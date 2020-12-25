import { ITile } from '../data-models/tile-model';
import { IEnemyCheckpoint } from '../data-models/enemy-checkpoint';

export class GameMap {
  private tiles: ITile[];
  private checkpoints: IEnemyCheckpoint[];
  private readonly width: number = 10;
  private readonly height: number = 10;

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
