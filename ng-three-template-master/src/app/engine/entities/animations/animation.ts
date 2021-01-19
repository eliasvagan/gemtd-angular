import { IUpdateable } from '../../data-models/updatable';
import { GameObject } from '../game-object';

export interface IAnimation {
	updateObj(obj: GameObject & IUpdateable, dt: number): void;
}

abstract class AbstractAnimation implements IAnimation {
	updateObj(obj: GameObject, dt: number): void {
		obj.updateRenderPosition();
	}
}

export class AnimationSpin extends AbstractAnimation {
	constructor(
		private speedX: number = 0,
		private speedY: number = 0,
		private speedZ: number = 0,
	) {
		super();
	}

	updateObj(obj: GameObject & IUpdateable, dt): void {
		obj.renderState.rotation.x += this.speedX * dt * (0.001);
		obj.renderState.rotation.y += this.speedY * dt * (0.001);
		obj.renderState.rotation.z += this.speedZ * dt * (0.001);

		super.updateObj(obj, dt);
	}
}
