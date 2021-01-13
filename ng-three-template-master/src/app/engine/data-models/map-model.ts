import { ITile } from './tile-model';
import { IEnemyCheckpoint } from './enemy-checkpoint';

export interface IMap {
	width: number;
	height: number;
	tiles: ITile[];
	checkpoints: IEnemyCheckpoint[];
}
