import * as THREE from 'three-full';
import { IRenderable, IRenderParams, IRenderState } from '../data-models/renderable';
import { Materials } from '../enums/materials';
import { Geometries } from '../enums/geometries';
import { GameObjectState } from '../enums/game-object-state';
import { MouseEventType } from '../enums/mouse-events';
import { GameManager } from './game-manager';
import {Statics} from './statics';

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

			{	// Model Scale
				const { x, y, z } = asset.transform.scale;
				this.renderState.model.scale.set(x, y, z);
			}

			{ // Model position offset
				const { x, y, z} = asset.transform.offset;
				this.renderState.model.position.set(x, y, z);
			}

			{ // Model rotation
				const { x, y, z } = asset.transform.rotation;
				this.renderState.model.rotation.set(x, y, z);
			}

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

		{ // Translate position of rendered model to game object
			this.renderState.model.position.set(
				this.position.x,
				0,
				this.position.y
			);
		}

		{ // Offset
			const { x, y, z } = this.renderState.offset;
			this.renderState.model.translateX(x);
			this.renderState.model.translateY(y);
			this.renderState.model.translateZ(z);
		}

		{ // Scale
			const sca = 1.0;
			this.renderState.model.scale.multiplyScalar(sca);
		}
	}


	removeFromScene(): void {
		this.renderState.scene.remove(this.renderState.model);
	}
}
