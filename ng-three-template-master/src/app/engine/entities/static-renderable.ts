import { IRenderable, IRenderState } from '../data-models/renderable';
import { GameObject } from './game-object';

export class StaticRenderable implements IRenderable {

	assetNames: { normal: string; hovered: string; };
	position: { x: number; y: number; };
	renderState: IRenderState;

	constructor(
		assetName: string,
		scene,
		size = 1.0,
		position: { x: number, y: number, z: number } = { x: 0, y: 0, z: 0 },
		rotation: { x: number, y: number, z: number } = { x: 0, y: 0, z: 0 },
	) {
		Object.assign(this, {
			assetNames: {
				normal: assetName,
				hovered: assetName,
			},
			renderState: {
				model: GameObject.LOADED_ASSETS[assetName],
				scene,
				scale: { x: size, y: size, z: size },
				offset: { x: position.x, y: position.y, z: position.z },
				rotation: { x: rotation.x, y: rotation.y, z: rotation.z },
			}
		});
		this.renderState.scene.add(this.renderState.model);
		this.updateModelPosition();
	}

	updateModelPosition() {
		const { model } = this.renderState;

		{ // Update scale
			const { x, y, z } = this.renderState.scale;
			model.scale.set(x, y, z);
		}

		{ // Update position
			const { x, y, z } = this.renderState.offset;
			model.position.set(x, y, z);
		}

		{ // Update rotation
			const { x, y, z } = this.renderState.rotation;
			model.rotation.set(x, y, z);
		}

	}
}
