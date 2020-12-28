import * as THREE from 'three';
import { IRenderable } from '../data-models/renderable';
import { Materials } from '../enums/materials';
import { Geometries } from '../enums/geometries';

export class GameObject implements IRenderable {

  model: THREE.Mesh;
  position: { x: number; y: number };

  constructor(
    position: { x: number; y: number} = {x: 0, y: 0},
    geometry: THREE.Geometry = Geometries.Cube,
    material: THREE.Material = Materials.WireFrameWhite
  ) {
    this.position = position;
    this.model = new THREE.Mesh(geometry, material);
    this.updateRenderPosition();
  }

  update(dt) {
    // Update rendered model to game object position
    this.updateRenderPosition();
  }

  updateRenderPosition() {
    this.model.position.set(this.position.x, 0, this.position.y);
  }

  addToScene(scene: THREE.Scene): void {
    scene.add(this.model);
  }

  removeFromScene(scene: THREE.Scene): void {
    scene.remove(this.model);
  }

}
