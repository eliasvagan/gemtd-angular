import { ITile } from './tile-model';
import { IEnemyCheckpoint } from './enemy-checkpoint';
import { Gem } from '../entities/tiles/gem';
import {Stone} from '../entities/tiles/stone';

export interface IMap {
	width: number;
	height: number;
	tiles: ITile[];
	floors: Stone[];
	checkpoints: IEnemyCheckpoint[];
	placingGems: Gem[];
	maxGemsRound: number;
}
