import { IGameObjectMeshMap, IGameObjectMeshMapLoaded } from './game-object-mesh-map';
import { MeshMapIdentifiers } from '../enums/game-object-mesh-maps';

export type ILoadedAssets = {
  [key in MeshMapIdentifiers ]?: IGameObjectMeshMapLoaded;
};

export type IUnloadedAssets = {
  [key in MeshMapIdentifiers ]: IGameObjectMeshMap;
};
