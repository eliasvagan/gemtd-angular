import { IGameObjectMeshMap, IGameObjectMeshMapLoaded } from './game-object-mesh-map';

export interface IRenderSettings {
  offset: {
    x: number,
    y: number,
    z: number
  };
  meshMapIdentifier: string;
  meshMapLoaded?: IGameObjectMeshMapLoaded;
}
