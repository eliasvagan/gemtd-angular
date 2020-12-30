import * as THREE from 'three';

export interface IGameObjectMeshMap {
  normal: string;
  hovered: string;
}

export interface IGameObjectMeshMapLoaded {
  normal: THREE.Mesh;
  hovered: THREE.Mesh;
}
