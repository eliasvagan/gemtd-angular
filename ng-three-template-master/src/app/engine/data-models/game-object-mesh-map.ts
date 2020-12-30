import * as THREE from 'three-full';

export interface IGameObjectMeshMap {
  normal: string;
  hovered: string;
}

export interface IGameObjectMeshMapLoaded {
  normal: THREE.Mesh;
  hovered: THREE.Mesh;
}
