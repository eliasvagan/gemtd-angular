import { Mesh } from 'three-full';
import { Materials } from './materials';
import { Geometries } from './geometries';

export const Meshes = {
  CubeWhite: new Mesh(Geometries.Cube, Materials.WireFrameWhite),
  CubeRed: new Mesh(Geometries.Cube, Materials.WireFrameRed),
};
