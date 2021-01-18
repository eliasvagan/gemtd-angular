import { Tile } from './tile';
import { Scene } from 'three-full';
import { ordinalNumber } from '../../helpers/math-helpers';
import { Inspectable } from '../../data-models/inspectable-model';

export class Checkpoint extends Tile implements Inspectable {

	private readonly checkpointIndex: number;

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
		this.towerTypeId = `CP #${this.checkpointIndex}`;
		this.nameLong = this.identifier;
		this.toolTip = `
			This is a checkpoint. All enemies must pass this as
			the ${ordinalNumber(this.checkpointIndex)} such checkpoint
			on their way. You cannot build here.
		`;
	}
}
