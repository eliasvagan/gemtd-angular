import { ITile } from '../data-models/tile-model';
import { GameObject } from './game-object';
import { Geometries } from '../enums/geometries';
import { Materials } from '../enums/materials';
import { MeshMapIdentifiers } from '../enums/game-object-mesh-maps';
import { IRenderSettings } from '../data-models/render-settings';
import { Scene } from 'three-full/sources/scenes/Scene';

export class Tile extends GameObject implements ITile {
  position: { x: number; y: number };

  constructor(
    position: { x: number, y: number },
    scene: Scene,
    renderSettings: IRenderSettings = {
      scene,
      offset: { x: 0, y: 0, z: 0 },
      meshMapIdentifier: MeshMapIdentifiers.TILE_FREE
    }
  ) {
    super(
      position,
      Geometries.CubeFlat,
      Materials.WireFrameGray,
      renderSettings
    );
  }
}
