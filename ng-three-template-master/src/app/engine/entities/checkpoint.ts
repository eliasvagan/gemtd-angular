import { Tile } from './tile';
import { Scene } from 'three-full';

export class Checkpoint extends Tile {
	constructor(
		position: { x: number, y: number },
		scene: Scene,
	) {
		super(position, scene, {
			normal: 'SIGN',
			hovered: 'SIGN'
		});

	}
}
