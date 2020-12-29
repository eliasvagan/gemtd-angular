import { Materials } from '../enums/materials';
import { Geometries } from '../enums/geometries';
import { Tile } from './tile';
import { GameObjectState } from '../enums/game-object-state';

export class Checkpoint extends Tile {
  constructor(x: number, y: number) {
    super(
      { x, y },
      Geometries.CubeTall,
      Materials.WireFrameBlue,
      { offset: { x: 0, y: -1, z: 0 }},
    );
  }
  update(dt) {
    super.update(dt);
  }
}
