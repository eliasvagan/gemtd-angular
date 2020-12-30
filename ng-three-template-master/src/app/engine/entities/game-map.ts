import * as THREE from 'three-full';
import { ITile } from '../data-models/tile-model';
import { IMap } from '../data-models/map-model';
import { Checkpoint } from './checkpoint';
import { Tile } from './tile';

export class GameMap implements IMap {
  tiles: Tile[] = [];
  checkpoints: Checkpoint[];
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
        const nt = new Tile({ x, y });
        this.tiles.push(new Tile({ x, y }));
        nt.addToScene(this.scene);
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
      const cp = new Checkpoint(pos.x, pos.y);
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
    oldTile.removeFromScene(this.scene);
    this.tiles[index] = tile;
    tile.addToScene(this.scene);

    return true;
  }

  getTile(x: number, y: number): ITile {
    return this.tiles[y * this.height + x];
  }

}
