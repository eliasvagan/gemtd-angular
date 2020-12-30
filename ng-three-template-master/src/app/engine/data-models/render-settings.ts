import { IGameObjectMeshMapLoaded } from './game-object-mesh-map';
import { Scene } from 'three-full';

export interface IRenderSettings {
  scene: Scene;
  offset: {
    x: number,
    y: number,
    z: number
  };
  meshMapIdentifier: string;
  meshMapLoaded?: IGameObjectMeshMapLoaded;
}
