import { Gem } from '../entities/tiles/gem';
import { TileFree } from '../entities/tiles/tile-free';
import { Checkpoint } from '../entities/tiles/checkpoint';
import { Stone } from '../entities/tiles/stone';

export interface IMapTile {
	tower?: Gem;
	ground?: Stone;
	checker?: TileFree;
	checkpoint?: Checkpoint;
	pathWeight?: number;
	locked: boolean;
}

export interface IMap {
	width: number;
	height: number;
	tiles: IMapTile[];
	placingGems: Gem[];
	maxGemsRound: number;
}
