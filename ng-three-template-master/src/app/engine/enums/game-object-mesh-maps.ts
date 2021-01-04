import { IUnloadedAssets } from '../data-models/assets-model';

export const GameObjectMeshMaps: IUnloadedAssets = {
	TILE_FREE: {
		normal: 'platform-free',
		hovered: 'platform-free-hover'
	},
	CHECKPOINT: {
		normal: 'checkpoint',
		hovered: 'checkpoint'
	}
};

export enum MeshMapIdentifiers {
	TILE_FREE = 'TILE_FREE',
	CHECKPOINT = 'CHECKPOINT',
}


