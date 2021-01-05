import { ITile } from '../data-models/tile-model';
import { GameObject } from './game-object';
import { Scene } from 'three-full/sources/scenes/Scene';

export class Tile extends GameObject implements ITile {
	position: { x: number; y: number };

	constructor(
		position: { x: number, y: number },
		scene: Scene,
		assetNames = {
			normal: 'TILE_FREE',
			hovered: 'TILE_FREE_HOVER'
		}
	) {
		super({
			position,
			assetNames,
			renderState: {
				model: null,
				scene,
				scale: { x: 1, y: 1, z: 1 },
				offset: { x: 0, y: 0, z: 0 },
				rotation: { x: 0, y: 0, z: 0 },
			},
			renderParams: {
				receiveShadow: false,
				castShadow: true,
			}
		});
	}
}
