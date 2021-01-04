import * as THREE from 'three-full';

export interface IGameObjectMeshMap {
  normal: string;
  hovered: string;
}

export interface IGameObjectMeshMapLoaded {
  normal: THREE.Object3D;
  hovered: THREE.Object3D;
}
