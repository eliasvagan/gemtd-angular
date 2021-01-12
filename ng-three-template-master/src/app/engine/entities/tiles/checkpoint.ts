import { Tile } from './tile';
import { Scene } from 'three-full';

export class Checkpoint extends Tile {

	private checkpointIndex: number;

	constructor(
		position: { x: number, y: number },
		scene: Scene,
		checkpointIndex: number
	) {
		super(position, scene, {
			normal: 'SIGN',
			hovered: 'SIGN'
		});
		this.checkpointIndex = checkpointIndex;
		this.identifier = `Checkpoint ${this.checkpointIndex}`;
	}
}
