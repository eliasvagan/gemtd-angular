import { Tile } from './tile';
import { MeshMapIdentifiers } from '../enums/game-object-mesh-maps';
import { Scene } from 'three-full';

export class Checkpoint extends Tile {
  constructor(
    position: { x: number, y: number },
    scene: Scene
  ) {
    super(
      position,
      scene,
      {
        scene,
        offset: { x: 0, y: 0, z: 0 },
        meshMapIdentifier: MeshMapIdentifiers.CHECKPOINT
      },
    );
  }
}
