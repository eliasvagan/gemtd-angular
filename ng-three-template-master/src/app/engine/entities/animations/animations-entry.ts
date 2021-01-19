import { AbstractAnimation } from './animation';
import { GameObject } from '../game-object';
import { IUpdateable } from '../../data-models/updatable';

export class AnimationGrowIn extends AbstractAnimation {

	private progress: number;

	constructor(
		private readonly duration: number = 1.0
	) {
		super();
		this.progress = 0;
		if (duration <= 0) {
			this.duration = 0.01;
		}
	}

	updateObj(obj: GameObject & IUpdateable, dt): void {

		if (this.progress >= 1) {
			return; // TODO: Make animations purge themselves when complete.
		}

		// Update progress
		this.progress = Math.min(1, this.progress + (dt / this.duration) * 0.001);

		// Update scale
		obj.renderState.scale.x = this.progress;
		obj.renderState.scale.y = this.progress;
		obj.renderState.scale.z = this.progress;

		super.updateObj(obj, dt);
	}
}
