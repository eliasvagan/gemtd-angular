import { IHasPosition } from '../entities/has-position';

export interface IEnemy extends IHasPosition {
  hp: number;
  flying: boolean;
  isDead: boolean;
  stats: {
    damage: number,
    moveSpeed: number,
    armor?: number
    invisible?: boolean
  };

}
