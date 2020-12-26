import { ITower } from './tower-model';
import { IHasPosition } from '../entities/has-position';

export interface ITile extends IHasPosition{
  tower?: ITower | 'stone';
}

