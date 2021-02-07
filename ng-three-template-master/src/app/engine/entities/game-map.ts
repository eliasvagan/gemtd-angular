import * as THREE from 'three-full';
import { IMap, IMapTile } from '../data-models/map-model';
import { Checkpoint } from './tiles/checkpoint';
import { TileFree } from './tiles/tile-free';
import { Gem } from './tiles/gem';
import { ITowerType } from '../data-models/tower-type-model';
import { GamePhase } from '../enums/game-phase';
import { GemTypeLetters } from '../data/gem-types';
import { GemsBasic } from '../data/towers';
import { Statics } from '../services/statics.service';
import { IGameSessionGemChances } from './game-session';
import { Inspectable } from '../data-models/inspectable-model';
import { AbilityChoose } from './abilities/ability-choose';
import { Enemy } from './enemy';
import { IPath, PathFinder } from '../helpers/path-finder';
import * as GAMECONFIG from '../../json/gameconfig.json';
import { Stone } from './tiles/stone';
import {IAbility} from '../data-models/ability-model';

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
					gem: null,
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
			const { gem, ground, checker, checkpoint } = tile;
			if (gem) { gem.update(dt); }
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

	updateGemAbilities(gem: Gem): void {
		// Update preview gems
		const timeToChoose = this.placingGems.length >= this.maxGemsRound;
		gem.abilities
			.filter((ability: IAbility ) => ability instanceof AbilityChoose)
			.forEach((ability: IAbility) => {
				ability.isActive = timeToChoose;
			});
	}

	canBuildHere(position: {x: number, y: number}, usePathfinding: boolean = false): boolean {
		const { x, y } = position;

		// Check if withing bounds
		if (x < 0 || x >= this.width
		 || y < 0 || y >= this.height
		) {
			if (GAMECONFIG.debug.logBasic) {
				console.log(`Tried to place outside of bounds at x: ${x}, y: ${y}`);
			}
			return false;
		}

		// If ground is placed, ditch pathfinding.
		const { ground, gem, checkpoint } = this.getTile(position);
		if (!!ground || !!checkpoint) {
			return !gem && !checkpoint;
		}

		// Pathfinding to check if position would break path
		let validPath = !!ground;
		if (!ground && usePathfinding) {
			const pf = new PathFinder(this);
			pf.setBlock(x, y);
			const path: IPath = pf.getPathConnected(
				this.tiles
					.filter(tile => !!tile.checkpoint)
					.map(cp => cp.checkpoint.position)
			);
			if (GAMECONFIG.debug.logBasic) {
				console.log((path.steps ? 'Found legal path' : 'Found no legal path') + ' to build at ', position, path.steps);
			}

			validPath = path.steps?.length > 0;
		}
		return validPath;

	}
	canPlaceNow(): boolean {
		return this.placingGems.length < this.maxGemsRound || GAMECONFIG.debug.unlimitedGemPlaces;
	}

	canBuildCombo(gemType: ITowerType, position: { x: number, y: number }): boolean {
		// TODO: Add correct combo scan

		return true;
	}

	placeGem(position: { x: number; y: number }, gemType: ITowerType, preview: boolean): void {
		const gem = new Gem(position, this.scene, gemType, preview, this);
		const stone = new Stone(position, this.scene);
		this.updateTileProps(position, {
			gem,
			ground: stone,
			locked: false,
		});
		this.placingGems.push(gem);
		this.placingGems.forEach(pg => this.updateGemAbilities(pg));
	}

	chooseGem(position: {x: number, y: number}): void {
		try {
			const { gem } = this.getTile(position);
			const { CURRENT_SESSION: session } = Statics;
			if (session.phase !== GamePhase.Building) {
				throw new Error('Tried to choose gem outside of building phase!');
			}

			gem.handleGetPlaced();

			// Remove temporary gems
			this.placingGems
				.filter((pGem: Gem) => gem.isPreview)
				.forEach((pGem: Gem) => {
				const pTile = this.getTile(pGem.position);

				// Handle illegal operation
				if (pTile.gem !== pGem) {
					console.error('Tried to remove preview tiles, but target tile did not contain expected Gem instance!');
				}
				pGem.removeFromScene();
				this.updateTileProps(pGem.position, { gem: null, locked: false });
			});
			this.placingGems = [];

			// Handle session changes
			session.setActiveObject(this.getInspectable(position));
			session.handleNextPhase();
			session.updateWalkingPath();
		} catch (err) {
			console.error('TODO: Failed to choose gem!', err);
		}
	}

	handleTileClick(tile: IMapTile): IMapTile {
		const { position } = tile.checker;
		const { phase, gemChances } = Statics.CURRENT_SESSION;

		switch (phase) {
			case GamePhase.Building: {
				let placed = false;
				if (!tile.gem) {
					if (
						this.canPlaceNow() &&
						this.canBuildHere(position, true)
					) {
						const gemType: ITowerType = this.getRandomGemType(gemChances);
						this.placeGem(position, gemType, true);
						placed = true;
					}
				} else {

				}
				if (GAMECONFIG.debug.logBasic) {
					console.log(`${placed ? 'Placed' : 'Did not place'} random gem at ${position}`);
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
		const { checkpoint, gem, ground, checker } = this.getTile(position);
		return checkpoint ?? gem ?? ground ?? checker;
	}
}
