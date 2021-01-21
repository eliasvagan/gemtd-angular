import * as THREE from 'three-full';
import { IMap } from '../data-models/map-model';
import { Tile } from './tiles/tile';
import { Checkpoint } from './tiles/checkpoint';
import { TileFree } from './tiles/tile-free';
import { Gem } from './tiles/gem';
import { ITowerType } from '../data-models/tower-type-model';
import { GamePhase } from '../enums/game-phase';
import { GemTypeLetters } from '../enums/gem-types';
import { GemsBasic, TowersAll } from '../enums/towers';
import { Statics } from '../services/statics.service';
import { IGameSessionGemChances } from './game-session';
import { isInspectable } from '../data-models/inspectable-model';
import { IEnemyCheckpoint } from '../data-models/enemy-checkpoint';
import { ITile } from '../data-models/tile-model';
import { AbilityChoose } from './abilities/ability-choose';
import { Stone } from './tiles/stone';
import { AbilityUpgrade } from './abilities/ability-upgrade';
import { GameObject } from './game-object';
import { Enemy } from './enemy';

const IMapDefaultValues: IMap = {
	tiles: [],
	checkpoints: [],
	floors: [],
	width: 11,
	height: 11,
	placingGems: [],
	maxGemsRound: 5,
};

export class GameMap implements IMap {

	public width: number;
	public height: number;
	public tiles: (ITile|Gem)[];
	public floors: Stone[];
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
		this.floors.forEach(floor => floor.update(dt));
		this.enemies.forEach(enemy => enemy.update(dt));
	}

	addFloor(position: {x: number, y: number}): boolean  {
		const isOccupied = this.floors.reduce(
			(valid, stone: Stone) => valid || stone.position === position,
			false
		);
		if (!isOccupied) {
			this.floors.push(new Stone(position, this.scene));
			console.log('Floors: ', this.floors);
		}
		return !isOccupied;
	}

	addTile(tile: Tile): boolean {
		const { x, y } = tile.position;
		if (!this.canBuildHere(tile.position)) {
			console.log(`Failed to place tile on (${x}, ${y})`);
			return false;
		}
		const index = x + y * this.width;

		const oldTile = this.tiles[index];
		oldTile.removeFromScene();
		this.tiles[index] = tile;

		return true;
	}

	getTile(position: {x: number, y: number}): ITile | Gem | null{
		try {
			return this.tiles[position.y * this.height + position.x];
		}
		catch (err) {
			return null;
		}
	}

	placeRandomTile(position: { x: number, y: number }): Gem {
		const session = Statics.CURRENT_SESSION;
		const getRandomGem = (chances: IGameSessionGemChances): [string, number] => {
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
		const [ gt, gs ] = getRandomGem(session.gemChances);
		const gemId = GemTypeLetters[gt] + gs;
		return this.placeGem(position, GemsBasic[gemId]);
	}

	updateGemAbilities(newGem: Gem): void {
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
		// TODO: Add pathfinder check here!
		const { x, y } = position;
		return !(
				 x < 0 || x >= this.width
			|| y < 0 || y >= this.height
		);
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
			&& !(foundTile instanceof Gem && foundTile.towerType !== gemType)
		);
	}

	placeGem(position: { x: number; y: number }, gemType: ITowerType): Gem {
		if (this.canBuildTowerHere(position, gemType)) {
			const gem = new Gem(position, this.scene, gemType);
			gem.abilities.push(
				new AbilityChoose(TowersAll[gem.towerTypeId], gem, this, false)
			);
			this.addTile(gem);
			this.addFloor(gem.position);
			this.updateGemAbilities(gem);
			console.log('placed at ', position);
			return gem;
		}
		return null;
	}

	chooseGem(target: Gem): Gem {
		if (target instanceof Gem) {
			if (this.canBuildTowerHere(target.position, target.towerType) && this.placingGems.length >= this.maxGemsRound) {
				this.placingGems
					.filter(pg => pg.position !== target.position)
					.forEach(pg => {
						this.addTile(new TileFree(pg.position, this.scene));
					});

				this.placingGems = [];
				const gem = new Gem(target.position, this.scene, target.towerType);
				this.addTile(gem);
				gem.handleGetPlaced();
				this.addFloor(target.position);

				const placed = this.getTile(target.position);
				if (placed instanceof Gem) {
					Statics.CURRENT_SESSION.setActiveObject(placed);
					GameObject.setHovered(placed);
					this.updateGemAbilities(placed);
					Statics.CURRENT_SESSION.handleNextPhase();
					return placed;
				} else {
					console.error('Gems were consumed, but nothing was placed!');
				}
			}
		}
		console.log('Tried to choose gem, but failed at position', target.position);
		return null;
	}

	handleTileClick(tile: Tile): Gem | null {
		let response: Gem | null = null;

		switch (Statics.CURRENT_SESSION.phase) {
			case GamePhase.Building: {
				if ((tile instanceof TileFree || tile instanceof Stone)
					&& this.canBuildHere(tile.position)
					&& this.placingGems.length < this.maxGemsRound
				) {
					const placed = this.placeRandomTile(tile.position);
					this.placingGems.push(placed);
					this.updateGemAbilities(placed);
					response = placed;
				}
				break;
			}
			case GamePhase.Defending: {
				break;
			}
		}
		// Always select placed/clicked unit.
		const nt = this.getTile(tile.position);
		if (isInspectable(nt)) {
			Statics.CURRENT_SESSION.setActiveObject(nt);
		}
		return response;
	}
}
