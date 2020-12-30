import { IGameObjectMeshMap, IGameObjectMeshMapLoaded } from './game-object-mesh-map';

export interface ILoadedAssets {
  [key: string]: IGameObjectMeshMapLoaded;
}

export interface IUnloadedAssets {
  [key: string]: IGameObjectMeshMap;
}
