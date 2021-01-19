import * as THREE from 'three-full';
import { IRenderable, IRenderParams, IRenderState } from '../data-models/renderable';
import { Materials } from '../enums/materials';
import { Geometries } from '../enums/geometries';
import { GameObjectState } from '../enums/game-object-state';
import { MouseEventType } from '../enums/mouse-events';
import { Statics } from '../services/statics.service';
import { IUpdateable } from '../data-models/updatable';
import { IAnimation } from './animations/animation';

export class GameObject implements IRenderable, IUpdateable {

	public static HOVERED?: GameObject;
	identifier: string;
	state: GameObjectState;
	position: { x: number; y: number };
	assetNames: { normal: string; hovered: string; };
	renderState: IRenderState;
	renderParams: IRenderParams;
	animation?: IAnimation;

	constructor(
		father: IRenderable
	) {
		Object.assign(this, father);
		this.identifier = 'GameObject';
		this.state = GameObjectState.Changed;
		this.updateRenderModel();
	}

	static setHovered(obj: GameObject|null): void {
		const prevHovered = GameObject.HOVERED;
		if (prevHovered !== obj) {
			if (prevHovered instanceof GameObject) {
				prevHovered.state = GameObjectState.Changed;
			}
			GameObject.HOVERED = obj;
			if (obj !== null) {
				obj.state = GameObjectState.Changed;
			}
		}
	}

	setVisibility(visible: boolean): void {
		this.renderState.isInvisible = !visible;
		this.state = GameObjectState.Changed;
	}

	setOpacity(opacity: number): void {
		this.renderState.opacity = opacity;
		this.state = GameObjectState.Changed;
	}

	handleMouseEvent(evt: MouseEvent, type: MouseEventType): void {
		switch (type) {
			case MouseEventType.Move: {  // TODO: Fix hovering
				GameObject.setHovered(this);
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

		// Handle unset model
		const isHovered = GameObject.HOVERED === this;
		if (isHovered && !this.assetNames.hovered) {
			return;
		}
		const assetName: string|null = (isHovered ? this.assetNames.hovered : this.assetNames.normal) ?? this.assetNames.normal;

		// Initialize model
		if (!this.renderState.model) {
			this.renderState.model = new THREE.Mesh(Geometries.Cube, Materials.WireFrameWhite);
			this.renderState.scene.add(this.renderState.model);
		} else {
			// Load model by name
			try {
				const { LOADED_ASSETS } = Statics;
				const asset = LOADED_ASSETS[assetName];
				const { model } = asset;
				this.renderState.model.geometry = model.geometry;
				this.renderState.model.material = model.material;
				this.renderState.assetTransform = asset.transform ?? {
					scale: { x: 1.0, y: 1.0, z: 1.0 },
					offset: { x: 0, y: 0, z: 0 },
					rotation: { x: 0, y: 0, z: 0 }
				};

				// Handle invisibility
				this.renderState.model.material.opacity = this.renderState.isInvisible ? 0.0 : this.renderState.opacity;
				this.renderState.model.material.transparent = this.renderState.model.material.opacity < 1;

				// Set shadow properties
				this.renderState.model.receiveShadow = this.renderParams.receiveShadow;
				this.renderState.model.castShadow = this.renderParams.castShadow;

				// Fix the rest of properties
				this.updateRenderPosition();

			} catch (err) {
				console.error(`Failed to update render model to ${assetName}`, err);
			}

			// Update mouse event handler
			Object.assign(this.renderState.model.userData, {
				handleMouseEvent: (evt, type) => this.handleMouseEvent(evt, type)
			});
		}
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
		if (this.animation) {
			this.animation.updateObj(this, dt);
		}
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
		if (this.renderState.model) {
			this.renderState.scene.remove(this.renderState.model);
		}
	}
}
