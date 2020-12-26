import { IEnemy } from '../data-models/enemy-model';
import { IMap } from '../data-models/map-model';
import { IEnemyCheckpoint } from '../data-models/enemy-checkpoint';
import { EuclideanDistance } from '../helpers/trig-helpers';

export class Enemy implements IEnemy {

  flying: boolean;
  hp: number;
  position: { x: number; y: number };
  stats: { damage: number, moveSpeed: number };
  isDead: boolean;

  private gameMap: IMap;
  private targetTileIndex: number;
  private targetTileEntity: IEnemyCheckpoint;

  constructor(data: IEnemy, gameMap: IMap) {
    Object.assign(this, data);
    this.gameMap = gameMap;
    this.targetTileIndex = 0;
    this.isDead = false;
  }

  update(dt: number): void {

    if (this.hp <= 0) {
      this.isDead = true;
      return;
    }

    // Check if target is reached
    if (EuclideanDistance(this.targetTileEntity, this) < 0.1) {
      this.targetTileIndex++;
      this.targetTileEntity = this.gameMap.checkpoints[this.targetTileIndex];
    }

    // Handle movement
    const dx = this.position.x - this.targetTileEntity.position.x < 0 ? 1 : -1;
    const dy = this.position.y - this.targetTileEntity.position.y < 0 ? 1 : -1;

    this.position.x += dx * this.stats.moveSpeed * dt;
    this.position.y += dy * this.stats.moveSpeed * dt;

    // TODO: Handle walking units
  }


}
