import * as THREE from 'three-full';
import { ITile } from '../data-models/tile-model';
import { IMap } from '../data-models/map-model';
import { Tile, TileType } from './tile';

export class GameMap implements IMap {
	tiles: Tile[] = [];
	checkpoints: Tile[];
	width = 11;
	height = 11;

	constructor(
		public scene: THREE.Scene
	) {
		this.initializeMap();
	}

	initializeMap(): void {
		this.tiles = [];
		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				this.tiles.push(new Tile({ x, y }, TileType.FREE, this.scene));
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
		].forEach(pos => {
			const cp = new Tile(pos, TileType.CHECKPOINT, this.scene);
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

	getTile(x: number, y: number): ITile {
		return this.tiles[y * this.height + x];
	}

	placeGem(position: { x: number; y: number }, gemType: string, gemSize: number): void {
		console.log('Placing a ', gemType, gemSize, ' at ', position);
		const gem = new Tile(position, TileType.GEM_PLACING, this.scene);
		this.addTile(gem);
	}
}
