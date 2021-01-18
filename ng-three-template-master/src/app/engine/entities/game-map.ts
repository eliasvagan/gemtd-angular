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
import { AbilityPlace } from './abilities/ability-place';
import {Stone} from './tiles/stone';
import {AbilityUpgrade} from './abilities/ability-upgrade';

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
	}

	update(dt): void {
		this.tiles.forEach(tile => tile.update(dt));
	}

	addTile(tile: Tile): boolean {
		const { x, y } = tile.position;
		if (
			x < 0 || x >= this.width  ||
			y < 0 || y >= this.height
			// this.getTile(x, y).tower !== undefined
		) {
			console.log(`Failed to place tile on (${x}, ${y})`);
			return false;
		}
		const index = x + y * this.width;

		const oldTile = this.tiles[index];
		oldTile.removeFromScene();
		this.tiles[index] = tile;

		return true;
	}

	getTile(x: number, y: number): Tile {
		try {
			return this.tiles[y * this.height + x] as Tile;
		}
		catch (err) {
			return null;
		}
	}

	placeRandomTile(position: { x: number, y: number }): void {
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
		this.placeGem(position, GemsBasic[gemId]);
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
					.filter(pg => combo.includes(pg.towerTypeId))
					.forEach(ug => {
						// TODO: upgradeableGem.addUpgrade(towerType)
						ug.abilities.push(new AbilityUpgrade(towerType, ug, this));
					}
				);
			}
		}
	}

	chooseGem(gem: Gem): boolean {
		let placed = false;
		if (this.placingGems.length >= this.maxGemsRound) {
			this.placingGems
				.filter(pg => pg !== gem)
				.forEach(pg => {
					this.addTile(
						new Stone(pg.position, this.scene)
					);
				});
			placed = this.addTile(gem);
			this.placingGems = [];
		}
		return placed;
	}

	handleTileClick(tile: Tile): Gem {
		let hasPlaced = false;
		switch (Statics.CURRENT_SESSION.phase) {
			case GamePhase.Building: {
				const isValidPosition = true; // TODO: Check if tile would block path
				if (tile instanceof TileFree) {
					this.placeRandomTile(tile.position);
					hasPlaced = true;
				}
				break;
			}
			case GamePhase.Defending: {
				break;
			}
		}
		// Always select placed/clicked unit.
		const nt = this.getTile(tile.position.x, tile.position.y);
		if (isInspectable(nt)) {
			Statics.CURRENT_SESSION.setActiveObject(nt);
		}
		return hasPlaced && nt instanceof Gem ? nt : null;
	}

	placeGem(position: { x: number; y: number }, gemType: ITowerType): void {
		if (this.placingGems.length < this.maxGemsRound) {
			const gem = new Gem(position, this.scene, gemType);
			gem.abilities.push(
				new AbilityPlace(TowersAll[gem.towerTypeId], gem, this)
			);
			this.addTile(gem);
			this.placingGems.push(gem);
			this.updateGemAbilities(gem);
		}
	}
}
