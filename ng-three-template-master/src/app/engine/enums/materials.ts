import * as THREE from 'three';

export const Materials = {
  WireFrameWhite: new THREE.MeshBasicMaterial({
    color: '#ffffff',
    wireframe: true
  }),

  WireFrameGray: new THREE.MeshBasicMaterial({
    color: '#404040',
    wireframe: true
  }),

  WireFrameRed: new THREE.MeshBasicMaterial({
    color: '#ff0000',
    wireframe: true
  }),

  WireFrameGreen: new THREE.MeshBasicMaterial({
    color: '#00ff00',
    wireframe: true
  }),

  WireFrameBlue: new THREE.MeshBasicMaterial({
    color: '#0000ff',
    wireframe: true
  })
};
