import { IGameObjectMeshMap } from './game-object-mesh-map';

export interface IRenderSettings {
  offset?: {
    x: number,
    y: number,
    z: number
  };
  meshMap: IGameObjectMeshMap;
}
