import { Tile } from './tile';
import { Scene } from 'three-full';

export class TileFree extends Tile {
	constructor(
		position: { x: number, y: number },
		scene: Scene,
	) {
		super(position, scene, {
			normal: (position.x + position.y) % 2 ? 'TILE_FREE_NORMAL_1' : 'TILE_FREE_NORMAL_2',
			hovered: 'TILE_FREE_HOVER_1',
		}, {
			castShadow: false,
			receiveShadow: false,
		});
		this.setOpacity(0.9);
	}
}
