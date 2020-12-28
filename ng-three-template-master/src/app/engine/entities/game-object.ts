import * as THREE from 'three';
import { IRenderable } from '../data-models/renderable';
import { Materials } from '../enums/materials';
import { Geometries } from '../enums/geometries';
import { IRenderSettings } from '../data-models/render-settings';

export class GameObject implements IRenderable {

  model: THREE.Mesh;
  position: { x: number; y: number };
  renderSettings: IRenderSettings;

  constructor(
    position: { x: number; y: number} = {x: 0, y: 0},
    geometry: THREE.Geometry = Geometries.Cube,
    material: THREE.Material = Materials.WireFrameWhite,
    renderSettings: IRenderSettings = null
  ) {
    this.position = position;
    this.model = new THREE.Mesh(geometry, material);
    this.renderSettings = Object.assign(
      { offset: { x: 0, y: 0, z: 0 }},
      renderSettings
    );
    this.updateRenderPosition();
  }

  update(dt) {
    // Update rendered model to game object position
    this.updateRenderPosition();
  }

  updateRenderPosition() {
    this.model.position.set(
      this.position.x + this.renderSettings.offset.x,
      0 + this.renderSettings.offset.y,
      this.position.y + this.renderSettings.offset.z
    );
  }

  addToScene(scene: THREE.Scene): void {
    scene.add(this.model);
  }

  removeFromScene(scene: THREE.Scene): void {
    scene.remove(this.model);
  }

}
