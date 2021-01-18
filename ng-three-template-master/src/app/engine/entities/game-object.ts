import * as THREE from 'three-full';
import { IRenderable, IRenderParams, IRenderState } from '../data-models/renderable';
import { Materials } from '../enums/materials';
import { Geometries } from '../enums/geometries';
import { GameObjectState } from '../enums/game-object-state';
import { MouseEventType } from '../enums/mouse-events';
import { Statics } from '../services/statics.service';

export class GameObject implements IRenderable {

	public static HOVERED?: GameObject;
	identifier: string;
	state: GameObjectState;
	position: { x: number; y: number };
	assetNames: { normal: string; hovered: string; };
	renderState: IRenderState;
	renderParams: IRenderParams;

	constructor(
		father: IRenderable
	) {
		Object.assign(this, father);
		this.identifier = 'GameObject';
		this.state = GameObjectState.Changed;

		this.updateRenderModel();
		this.updateRenderPosition();
	}

	handleMouseEvent(evt: MouseEvent, type: MouseEventType): void {
		switch (type) {
			case MouseEventType.Move: {  // TODO: Fix hovering
				const prevHovered = GameObject.HOVERED;
				if (prevHovered !== this) {
					if (prevHovered instanceof GameObject) {
						prevHovered.state = GameObjectState.Changed;
					}
					GameObject.HOVERED = this;
					this.state = GameObjectState.Changed;
				}
				break;
			}
			case MouseEventType.Click: {
				Statics.CURRENT_SESSION.handleClickObject(this);
				break;
			}
			case MouseEventType.LeftButtonDown: {

				break;
			}
			case MouseEventType.LeftButtonUp: {

				break;
			}
			case MouseEventType.RightButtonDown: {

				break;
			}
			case MouseEventType.RightButtonUp: {

				break;
			}
		}
	}

	updateRenderModel() {

		// Initialize model
		if (!this.renderState.model) {
			this.renderState.model = new THREE.Mesh(Geometries.Cube, Materials.WireFrameWhite);
			this.renderState.scene.add(this.renderState.model);
		}

		// Update model to appropriate asset
		const { LOADED_ASSETS } = Statics;
		const assetName = GameObject.HOVERED === this ? this.assetNames.hovered : this.assetNames.normal;

		try {
			const asset = LOADED_ASSETS[assetName];
			const { model } = asset;
			this.renderState.model.geometry = model.geometry;
			this.renderState.model.material = model.material;
			this.renderState.assetTransform = asset.transform;

			// Set shadow properties
			this.renderState.model.receiveShadow = this.renderParams.receiveShadow;
			this.renderState.model.castShadow = this.renderParams.castShadow;


		} catch (err) {
			console.error(`Failed to update render model to ${assetName}`, err);
		}

		// Update mouse event handler
		Object.assign(this.renderState.model.userData, {
			handleMouseEvent: (evt, type) => this.handleMouseEvent(evt, type)
		});
	}

	update(dt) {
		switch (this.state) {
			case GameObjectState.Changed: {
				this.updateRenderModel();
				this.state = GameObjectState.Unchanged;
				break;
			}
			case GameObjectState.Unchanged: {
				// Unchanged behaviour on update

				break;
			}
		}

		// this.position.x += 0.01 * (Math.random() - 0.5) * dt;
		// this.position.y += 0.01 * (Math.random() - 0.5) * dt;

		// Update rendered model to game object position
		this.updateRenderPosition();
	}

	updateRenderPosition() {
		const { scale: assetScale, offset: assetOffset, rotation: assetRotation } = this.renderState.assetTransform;
		const { scale: renderScale, offset: renderOffset, rotation: renderRotation } = this.renderState;

		this.renderState.model.scale.set(
			assetScale.x * renderScale.x,
			assetScale.y * renderScale.y,
			assetScale.z * renderScale.z
		);

		this.renderState.model.position.set(
			assetOffset.x + renderOffset.x + this.position.x,
			assetOffset.y + renderOffset.y,
			assetOffset.z + renderOffset.z + this.position.y
		);

		this.renderState.model.rotation.set(
			assetRotation.x + renderRotation.x,
			assetRotation.y + renderRotation.y,
			assetRotation.z + renderRotation.z
		);
	}


	removeFromScene(): void {
		this.renderState.scene.remove(this.renderState.model);
	}
}
