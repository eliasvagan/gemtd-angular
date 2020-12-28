import { ITile } from '../data-models/tile-model';
import { GameObject } from './game-object';
import * as THREE from 'three';
import { Geometries } from '../enums/geometries';
import { Materials } from '../enums/materials';

export class Tile extends GameObject implements ITile {
  position: { x: number; y: number };

  constructor(
    position: { x: number, y: number },
    geometry: THREE.Geometry = Geometries.CubeFlat,
    material: THREE.Material = Materials.WireFrameGray
  ) {
    super(position, geometry, material);
  }
}
