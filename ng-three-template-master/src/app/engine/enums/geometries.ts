import * as THREE from 'three';

export const Geometries = {
  Cube: new THREE.BoxGeometry(1, 1, 1),
  CubeTall: new THREE.BoxGeometry(1, 2, 1),
  CubeFlat: new THREE.BoxGeometry(1, 0.1, 1),
  Circle: new THREE.CircleGeometry(1),
};
