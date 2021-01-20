import { Tile } from './tile';
import { Scene } from 'three-full';

export class TileFree extends Tile {
	constructor(
		position: { x: number, y: number },
		scene: Scene,
	) {
		super(position, scene, {
			normal: 'TILE_FREE_0',
			hovered: 'TILE_FREE_1',
		}, {
			castShadow: false,
			receiveShadow: false,
		});
		this.setOpacity(0.4);
	}
}
