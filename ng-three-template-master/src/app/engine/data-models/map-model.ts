import { ITile } from './tile-model';
import { IEnemyCheckpoint } from './enemy-checkpoint';
import * as THREE from 'three-full';

export interface IMap {
	width: number;
	height: number;
	tiles: ITile[];
	checkpoints: IEnemyCheckpoint[];
	scene: THREE.Scene;
}
