import { IHasPosition } from './has-position';
import * as THREE from 'three';
import { IRenderSettings } from './render-settings';

export interface IRenderable extends IHasPosition {
  model: THREE.Mesh;
  renderSettings: IRenderSettings;
}
