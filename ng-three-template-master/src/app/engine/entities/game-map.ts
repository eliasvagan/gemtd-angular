import { ITile } from '../data-models/tile-model';
import { IEnemyCheckpoint } from '../data-models/enemy-checkpoint';
import { Tower } from './tower';
import { IMap } from '../data-models/map-model';

export class GameMap implements IMap {
  tiles: ITile[];
  checkpoints: IEnemyCheckpoint[];
  width = 11;
  height = 11;

  constructor() {
    this.initializeMap();
  }

  initializeMap(): void {
    this.tiles = [];
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        this.tiles.push(
          { position: { x, y } }
        );
      }
    }
    this.checkpoints = [
      { position: { x: 2, y: 5 } },
      { position: { x: 8, y: 5 } },
      { position: { x: 8, y: 2 } },
      { position: { x: 5, y: 2 } },
      { position: { x: 5, y: 9 } },
      { position: { x: 10, y: 9 } },
    ];
  }

  update(dt) {
    this.tiles.forEach(tile => {
      if (tile instanceof Tower) {
        console.log(tile);
      }
    });
  }

  addTile(tile: ITile): boolean {
    const { x, y } = tile.position;
    if (
      x < 0 || x >= this.width ||
      y < 0 || y >= this.height ||
      this.getTile(x, y).tower !== undefined
    ) {
      console.log(`Failed to place tile on (${x}, ${y})`);
      return false;
    }

    this.tiles[y * this.height + x] = tile;
    return true;
  }

  getTile(x: number, y: number): ITile {
    return this.tiles[y * this.height + x];
  }
}
