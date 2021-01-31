import * as THREE from 'three-full';
import { IMap } from '../data-models/map-model';
import { Tile } from './tiles/tile';
import { Checkpoint } from './tiles/checkpoint';
import { TileFree } from './tiles/tile-free';
import { Gem } from './tiles/gem';
import { ITowerType } from '../data-models/tower-type-model';
import { GamePhase } from '../enums/game-phase';
import { GemTypeLetters } from '../data/gem-types';
import { GemsBasic, TowersAll } from '../data/towers';
import { Statics } from '../services/statics.service';
import { IGameSessionGemChances } from './game-session';
import { Inspectable, isInspectable } from '../data-models/inspectable-model';
import { IEnemyCheckpoint } from '../data-models/enemy-checkpoint';
import { ITile } from '../data-models/tile-model';
import { AbilityChoose } from './abilities/ability-choose';
import { Stone } from './tiles/stone';
import { AbilityUpgrade } from './abilities/ability-upgrade';
import { GameObject } from './game-object';
import { Enemy } from './enemy';
import { IPath, PathFinder } from '../helpers/path-finder';
import * as GAMECONFIG from '../../json/gameconfig.json';

const IMapDefaultValues: IMap = {
	tiles: [],
	checkpoints: [],
	width: 11,
	height: 11,
	placingGems: [],
	maxGemsRound: 5,
};

export class GameMap implements IMap {

	public width: number;
	public height: number;
	public tiles: ITile[];
	public checkpoints: IEnemyCheckpoint[];
	public placingGems: Gem[];
	public enemies: Enemy[];
	public maxGemsRound: number;

	constructor(
		public scene: THREE.Scene
	) {
		Object.assign(this, IMapDefaultValues);
		this.initializeMap();
	}

	initializeMap(): void {
		this.tiles = [];
		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				this.tiles.push(new TileFree({ x, y }, this.scene));
			}
		}

		// Place checkpoints
		this.checkpoints = [];
		[
			{ x: 1 , y: 0 },
			{ x: 1 , y: 5 },
			{ x: 9 , y: 5 },
			{ x: 9 , y: 1 },
			{ x: 5 , y: 1 },
			{ x: 5 , y: 9 },
			{ x: 10, y: 9 }
		].forEach((pos, index) => {
			const cp = new Checkpoint(pos, this.scene, index);
			this.addTile(cp);
			this.checkpoints.push(cp);
		});

		// Misc
		this.placingGems = [];
		this.enemies = [];
	}

	update(dt): void {
		this.tiles.forEach(tile => tile.update(dt));
		this.enemies.forEach(enemy => enemy.update(dt));
		this.enemies = this.enemies.filter(enemy => !enemy.isDead);
	}

	addFloor(position: {x: number, y: number}): Stone  {
		return this.addTile(new Stone(position, this.scene, null)) as Stone;
	}

	addTile(tile: Tile): Tile {
		const { x, y } = tile.position;
		if (!this.canBuildHere(tile.position)) {
			console.log(`Failed to place tile on (${x}, ${y})`);
			return null;
		}
		const index = x + y * this.width;

		const oldTile = this.tiles[index];
		oldTile.removeFromScene();
		this.tiles[index] = tile;

		return tile;
	}

	getTile(position: {x: number, y: number}): ITile | null{
		try {
			return this.tiles[position.y * this.height + position.x];
		}
		catch (err) {
			return null;
		}
	}

	getTileCost(position): number {
		const target: ITile = this.getTile(position);
		return target.pathWeight;
	}

	getRandomGemType(chances: IGameSessionGemChances): ITowerType {
		const searchGemType = (): [string, number] => {
			const foundType: string = (() => {
				let sum = 0;
				const rn = Math.random();
				for (const [name, chance] of Object.entries(chances.types)) {
					if ( rn > sum && rn  < sum + chance) {
						return name;
					}
					sum += chance;
				}
			})();
			const foundSize: number = (() => {
				let sum = 0;
				const rn  = Math.random();
				for (let i = 0; i < chances.sizes.length; i++) {
					const chance = chances.sizes[i];
					if ( rn > sum && rn < sum + chance) {
						return i + 1; // Gem sizes start at 1
					}
					sum += chance;
				}
			})();
			return [foundType, foundSize];
		};
		const [ gt, gs ] = searchGemType();
		const gemId = GemTypeLetters[gt] + gs;
		return GemsBasic[gemId];
	}

	updateGemAbilities(): void {
		// Update gems that satisfy build
		for (const towerType of Object.values(TowersAll)) {
			const validCombos = towerType.buildCombinations.filter(
				combo => (combo.reduce((valid, next) => (
					valid || this.placingGems.map(pg => pg.towerTypeId).includes(next)
				), false))
			);
			for (const combo of validCombos) {
				this.placingGems
					.filter(pg => combo.includes(pg.towerTypeId) && this.canBuildCombo(towerType))
					.forEach(ug => {
							// TODO: Change isActive arg to be calculated
						ug.abilities.push(new AbilityUpgrade(towerType, ug, this, false));
					}
				);
			}
		}
		// Update place abilities to become active on last placed gem
		if (this.placingGems.length >= this.maxGemsRound) {
			this.placingGems.forEach(placingGem => {
				placingGem.abilities
					.filter(ability => ability instanceof AbilityChoose)
					.forEach(ability => {
						ability.isActive = true;
					});
			});
		}
	}

	canBuildHere(position: {x: number, y: number}): boolean {
		// Pathfinding to check if position would break path
		const { x, y } = position;
		const pf = new PathFinder(this);
		pf.setBlock(x, y);
		const path: IPath = pf.getPathConnected(this.checkpoints.map(cp => cp.position));
		console.log((path.steps ? 'Can' : 'Cannot') + ' build at ', position, path.steps);

		return !(
				 x < 0 || x >= this.width
			|| y < 0 || y >= this.height
			|| !path.steps
		) && (this.placingGems.length < this.maxGemsRound || GAMECONFIG.debug.unlimitedGemPlaces);
	}

	canBuildCombo(gemType: ITowerType): boolean {
		// TODO: Add correct checking
		return true;
	}

	canBuildTowerHere(position: { x: number; y: number }, gemType: ITowerType): boolean {
		const foundTile = this.getTile(position);
		return (
				 this.canBuildCombo(gemType)
			&& this.canBuildHere(position)
		 	&& (foundTile instanceof TileFree || (foundTile instanceof Stone && foundTile.isAvailable()))
			&& !(foundTile instanceof Stone && foundTile.getGem().towerType !== gemType)
		);

	}

	placeGem(position: { x: number; y: number }, gemType: ITowerType): Stone {
		if (this.canBuildTowerHere(position, gemType)) {
			const gem = new Gem(position, this.scene, gemType, true, this);
			const stone: Stone = this.addStone(gem.position);
			this.updateGemAbilities();
			// console.log('placed at ', position, gem);
			return stone;
		}
		return null;
	}

	chooseGem(position: {x: number, y: number}): Stone {
		const targetStone = this.getTile(position);
		if (targetStone instanceof Stone) {
			const targetGem = this.placingGems.find(gem => gem.position === position);
			if (targetGem instanceof Gem) {
				if (this.canBuildTowerHere(position, targetGem.towerType)) {
					// Remove placeholder gems
					this.placingGems
						// .filter(pg => pg.position !== position)
						.forEach(pg => {
							pg.removeFromScene();
						});

					this.placingGems = [];
					const newGem = new Gem(position, this.scene, targetGem.towerType, false, this);
					newGem.handleGetPlaced();

					const placedStone: ITile & Stone = this.addStone(position);
					const placedGem: Gem = placedStone.setGem(newGem).getGem();

					if (placedStone instanceof Stone && placedGem) {
						Statics.CURRENT_SESSION.setActiveObject(this.getInspectable(position));
						this.updateGemAbilities();

						GameObject.setHovered(placedStone);
						Statics.CURRENT_SESSION.handleNextPhase();
						Statics.CURRENT_SESSION.updateWalkingPath();
						return placedStone;
					} else {
						console.error('Gems were consumed, but nothing was placed!');
					}
				}
			} else {
				console.error('Tried to choose gem, but found no valid gem in', this.placingGems);
				return null;
			}
		} else {
			console.error('Tried to choose gem, but found no stone at position', position, targetStone);
			return null;
		}
	}

	handleTileClick(tile: Tile): ITile | null {
		let response: ITile = null;
		const { phase, gemChances } = Statics.CURRENT_SESSION;

		switch (phase) {
			case GamePhase.Building: {
				if (this.canBuildHere(tile.position)) {
					const stone: Stone = this.addStone(tile.position);
					const gemType: ITowerType = this.getRandomGemType(gemChances);
					const gem = new Gem(tile.position, this.scene, gemType, false, this);
					if (stone && gem) {
						console.log('placed', stone);
						this.placingGems.push(
							new Gem(tile.position, this.scene, gemType, true, this)
						);
						this.updateGemAbilities();
						response = stone;
					}
				}
				break;
			}
			case GamePhase.Defending: {
				break;
			}
		}
		// Always select placed/clicked unit.
		Statics.CURRENT_SESSION.setActiveObject(this.getInspectable(tile.position));
		return response;
	}

	getInspectable(position: { x: number, y: number}): Inspectable {
		const ft = this.getTile(position);
		if (ft instanceof Stone) {
			const placingGem = this.placingGems.find(gem => ft.position === gem.position);
			if (placingGem) {
				return placingGem;
			} else if (ft.getGem()) {
				return ft.getGem();
			}
			return placingGem ? placingGem : ft;
		}
		if (isInspectable(ft)) {
			return ft;
		}
		return null;
	}

	private addStone(position: { x: number; y: number }): Stone {
		const foundStone = this.getTile(position);
		if (foundStone instanceof Stone) {
			return foundStone;
		}
		const newStone = new Stone(position, this.scene, null);
		return this.addTile(newStone) as Stone;
	}
}
