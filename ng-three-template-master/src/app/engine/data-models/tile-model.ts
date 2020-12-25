import { ITower } from './tower-model';

export interface ITile  {
  tower?: ITower | 'stone';
  position: {
    x: number,
    y: number
  };
}

