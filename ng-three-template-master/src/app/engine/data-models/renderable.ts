import { IHasPosition } from './has-position';
import * as THREE from 'three';

export interface IRenderable extends IHasPosition {
  model: THREE.Mesh;
}
