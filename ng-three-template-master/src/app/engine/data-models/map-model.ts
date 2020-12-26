import { ITile } from './tile-model';
import { IEnemyCheckpoint } from './enemy-checkpoint';

export interface IMap {
  size: number;
  tiles: ITile[];
  checkpoints: IEnemyCheckpoint[];
}
