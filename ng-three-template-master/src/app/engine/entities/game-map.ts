import * as THREE from 'three-full';
import { IMap, IMapTile } from '../data-models/map-model';
import { Checkpoint } from './tiles/checkpoint';
import { TileFree } from './tiles/tile-free';
import { Gem } from './tiles/gem';
import { ITowerType } from '../data-models/tower-type-model';
import { GamePhase } from '../enums/game-phase';
import { GemTypeLetters } from '../data/gem-types';
import { GemsBasic, TowersAll } from '../data/towers';
import { Statics } from '../services/statics.service';
import { IGameSessionGemChances } from './game-session';
import { Inspectable } from '../data-models/inspectable-model';
import { AbilityChoose } from './abilities/ability-choose';
import { AbilityUpgrade } from './abilities/ability-upgrade';
import { Enemy } from './enemy';
import { IPath, PathFinder } from '../helpers/path-finder';
import * as GAMECONFIG from '../../json/gameconfig.json';
import {Stone} from './tiles/stone';

const IMapDefaultValues: IMap = {
	tiles: [],
	width: 11,
	height: 11,
	placingGems: [],
	maxGemsRound: 5,
};

export class GameMap implements IMap {

	public width: number;
	public height: number;
	public placingGems: Gem[];
	public enemies: Enemy[];
	public maxGemsRound: number;
	public tiles: IMapTile[];

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
				this.tiles.push({
					tower: null,
					ground: null,
					checker: new TileFree({ x, y }, this.scene),
					checkpoint: null,
					locked: false
				});
			}
		}

		// Place checkpoints
		[
			{ x: 1 , y: 0 },
			{ x: 1 , y: 5 },
			{ x: 9 , y: 5 },
			{ x: 9 , y: 1 },
			{ x: 5 , y: 1 },
			{ x: 5 , y: 9 },
			{ x: 10, y: 9 }
		].forEach((pos, index) => {
			this.updateTileProps(pos, {
				checkpoint: new Checkpoint(pos, this.scene, index),
				locked: true
			});
		});

		// Misc
		this.placingGems = [];
		this.enemies = [];
	}

	update(dt): void {
		this.tiles.forEach(tile => {
			const { tower, ground, checker, checkpoint } = tile;
			if (tower) { tower.update(dt); }
			if (ground) { ground.update(dt); }
			if (checker) { checker.update(dt); }
			if (checkpoint) { checkpoint.update(dt); }
		});
		this.enemies.forEach(enemy => enemy.update(dt));

		// Filter dead enemies
		this.enemies = this.enemies.filter(enemy => !enemy.isDead);
	}

	updateTileProps(position: { x: number, y: number }, diffObj: IMapTile) {
		Object.assign(this.tiles[position.y * this.height + position.x], diffObj);
	}

	getTile(position: {x: number, y: number}): IMapTile {
		try {
			return this.tiles[position.y * this.height + position.x];
		}
		catch (err) {
			return null;
		}
	}

	getTileCost(position): number {
		const target: IMapTile = this.getTile(position);
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
		const { ground, tower } = this.getTile(position);
		let validPath = !!ground;
		if (!ground) {
			const pf = new PathFinder(this);
			pf.setBlock(x, y);
			const path: IPath = pf.getPathConnected(
				this.tiles
					.filter(tile => !!tile.checkpoint)
					.map(cp => cp.checkpoint.position)
			);
			console.log((path.steps ? 'Can' : 'Cannot') + ' build at ', position, path.steps);
			validPath = path.steps?.length > 0;
		}

		return !(
				 x < 0 || x >= this.width
			|| y < 0 || y >= this.height
			|| !validPath
			|| tower !== null
		);
	}
	canPlaceNow(): boolean {
		return this.placingGems.length < this.maxGemsRound || GAMECONFIG.debug.unlimitedGemPlaces;
	}

	canBuildCombo(gemType: ITowerType): boolean {
		// TODO: Add correct checking
		return true;
	}

	canBuildTowerHere(position: { x: number; y: number }, gemType: ITowerType): boolean {
		return (
				 this.canBuildCombo(gemType)
			&& this.canBuildHere(position)
		);

	}

	placeGem(position: { x: number; y: number }, gemType: ITowerType, preview: boolean): boolean {
		if (GAMECONFIG.debug.logBasic) {
			console.log('Trying to place at ', this.canPlaceNow(), this.canBuildTowerHere(position, gemType));
		}

		if (
			this.canPlaceNow() &&
			this.canBuildTowerHere(position, gemType)
		) {
			const gem = new Gem(position, this.scene, gemType, preview, this);
			const stone = new Stone(position, this.scene);
			this.updateTileProps(position, {
				tower: gem,
				ground: stone,
				locked: false,
			});
			this.updateGemAbilities();
			this.placingGems.push(gem);
			return true;
		}

		return false;
	}

	chooseGem(position: {x: number, y: number}): IMapTile {
		console.log('TODO: Tried to place gem! Fix this. ');
		return this.getTile(position);
		/* const targetStone = this.getTile(position);
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

					const oldStone: Stone = this.getTile(position).ground;
					if (!oldStone) {
						this.updateTileProps(position, {
							ground: new Stone(position, this.scene, null),
							locked: false,
						});
					}
					const placedStone: Stone = this.getTile(position).ground;
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

		 */
	}

	handleTileClick(tile: IMapTile): IMapTile {
		const { position } = tile.checker;
		const { phase, gemChances } = Statics.CURRENT_SESSION;

		switch (phase) {
			case GamePhase.Building: {
				if (!tile.tower) {
					let placed = false;
					if (this.canBuildHere(position)) {
						const gemType: ITowerType = this.getRandomGemType(gemChances);
						placed = this.placeGem(position, gemType, true);
					}
					console.log(`${placed ? 'Placed' : 'Failed to place'} random gem at ${position}`);
				} else {

				}
				break;
			}
			case GamePhase.Defending: {
				break;
			}
		}
		return tile;
	}

	getInspectable(position: { x: number, y: number}): Inspectable {
		const { checkpoint, tower, ground, checker } = this.getTile(position);
		return checkpoint ?? tower ?? ground ?? checker;
	}
}
