import { ITowerType } from './tower-type-model';
import { IHasPosition } from './has-position';

export interface ITile extends IHasPosition {
  tower?: ITowerType | 'stone';
}

