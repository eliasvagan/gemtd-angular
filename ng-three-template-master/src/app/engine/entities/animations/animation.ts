import { IUpdateable } from '../../data-models/updatable';
import { GameObject } from '../game-object';
import { IHasPosition } from '../../data-models/has-position';

export interface IAnimation {
	updateObj(obj: GameObject & IUpdateable, dt: number): void;
}

export abstract class AbstractAnimation implements IAnimation {
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

export class AnimationChase extends AbstractAnimation {
	constructor(
		private target: IHasPosition,
		private speed: number,
	) {
		super();
	}
	updateObj(obj: GameObject & IUpdateable, dt): void {
		const minSpeed = 0.05;

		const dx = -1 * (obj.position.x - this.target.position.x);
		const dy = -1 * (obj.position.y - this.target.position.y);
		// const vx = Math.min(Math.max(dx * dt * this.speed * 0.0001, -dx), dx);
		// const vy = Math.min(Math.max(dy * dt * this.speed * 0.0001, -dy), dy);

		// minSpeed * (dx < 0 ? 1 : -1)
		// minSpeed * (dy < 0 ? 1 : -1)

		obj.position.x += dx * 0.002 * this.speed * dt;
		obj.position.y += dy * 0.002 * this.speed * dt;

		super.updateObj(obj, dt);
	}
}
