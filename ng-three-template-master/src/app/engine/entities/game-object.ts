import * as THREE from 'three-full';
import { IRenderable } from '../data-models/renderable';
import { IRenderSettings } from '../data-models/render-settings';
import { Materials } from '../enums/materials';
import { Geometries } from '../enums/geometries';
import { GameObjectState } from '../enums/game-object-state';
import { MouseEventType } from '../enums/mouse-events';
import { ILoadedAssets } from '../data-models/assets-model';

export class GameObject implements IRenderable {

  public static HOVERED?: GameObject;
  public static LOADED_ASSETS?: ILoadedAssets;

  identifier: string;
  model: THREE.Object3D;
  position: { x: number; y: number };
  renderSettings: IRenderSettings;
  state: GameObjectState;

  constructor(
    position: { x: number; y: number} = {x: 0, y: 0},
    geometry: THREE.Geometry = Geometries.Cube,
    material: THREE.Material = Materials.WireFrameWhite,
    renderSettings: IRenderSettings = null,
  ) {
    this.identifier = 'GameObject';
    this.position = position;
    this.model = new THREE.Mesh(geometry, material);

    this.state = GameObjectState.Changed;

    this.renderSettings = Object.assign(
      { offset: { x: 0, y: 0, z: 0 }},
      renderSettings
    );
    this.updateRenderModel();
    this.updateRenderPosition();
    this.renderSettings.scene.add(this.model);
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

        this.removeFromScene();
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
    const { meshMapIdentifier } = this.renderSettings;
    const { LOADED_ASSETS } = GameObject;

    // Load assets if needed
    if (!this.renderSettings.meshMapLoaded) {
      if (LOADED_ASSETS) {
        this.renderSettings.meshMapLoaded = LOADED_ASSETS[meshMapIdentifier];
      } else {
        throw new Error(`Tried to load a non-existent mesh "${meshMapIdentifier}" from GameManager!`);
      }
    }

    // Update model to account for changed state
    const { meshMapLoaded } = this.renderSettings;
    const oldModel = this.model;

    if (meshMapLoaded) {
      if (GameObject.HOVERED === this) {
        this.model.geometry = meshMapLoaded.hovered.geometry;
        this.model.material = meshMapLoaded.hovered.material;
      } else {
        this.model.geometry = meshMapLoaded.normal.geometry;
        this.model.material = Materials.MatteRed; // meshMapLoaded.normal.material;
      }
    } else {

      this.model = new THREE.Mesh(Geometries.Cube, Materials.WireFrameRed);
      this.model.receiveShadow = true;
    }
    Object.assign(this.model, {
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
      this.model.position.set(
        this.position.x,
        0,
        this.position.y
      );
    }

    { // Offset
      const { x, y, z } = this.renderSettings.offset;
      this.model.translateX(x);
      this.model.translateY(y);
      this.model.translateZ(z);
    }

    { // Scale
      const sca = 0.5;
      this.model.scale.set(sca, sca, sca);
    }
  }


  removeFromScene(): void {
    this.renderSettings.scene.remove(this.model);
  }
}
