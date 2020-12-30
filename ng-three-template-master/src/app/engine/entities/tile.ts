import { ITile } from '../data-models/tile-model';
import { GameObject } from './game-object';
import * as THREE from 'three-full';
import { Geometries } from '../enums/geometries';
import { Materials } from '../enums/materials';
import { MeshMapIdentifiers } from '../enums/game-object-mesh-maps';

export class Tile extends GameObject implements ITile {
  position: { x: number; y: number };

  constructor(
    position: { x: number, y: number },
    geometry: THREE.Geometry = Geometries.CubeFlat,
    material: THREE.Material = Materials.WireFrameGray,
    renderSettings = {
      offset: { x: 0, y: 0, z: 0 },
      meshMapIdentifier: MeshMapIdentifiers.TILE_FREE
    }
  ) {
    super(position, geometry, material, renderSettings);
  }
}
