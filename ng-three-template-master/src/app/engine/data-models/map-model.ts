import { ITile } from './tile-model';
import { IEnemyCheckpoint } from './enemy-checkpoint';
import { Gem } from '../entities/tiles/gem';

export interface IMap {
	width: number;
	height: number;
	tiles: ITile[];
	checkpoints: IEnemyCheckpoint[];
	placingGems: Gem[];
	maxGemsRound: number;
}
