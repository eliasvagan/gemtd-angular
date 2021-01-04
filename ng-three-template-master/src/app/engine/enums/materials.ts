import * as THREE from 'three-full';

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
  }),

  MatteRed: new THREE.MeshStandardMaterial({
    visible: true,
    color: '#94212e',
    emissive: '#691f1f',
    wireframe: false,
    vertexColors: false,
    roughness: 0.3,
    metalness: 1,
    fog: true,
  })


};
