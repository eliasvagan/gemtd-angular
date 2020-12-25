import { TowerType } from '../enums/tower-type';
import { GemType } from '../enums/gem-type';

export interface ITower {
  type: GemType | TowerType;
  damage: number;
  range: number;
  buildCombination: ITower[];
}
