import { GameMap } from '../entities/game-map';
import { GamePhase } from '../enums/game-phase';
import { IEnemy } from './enemy-model';

export interface IGameSession {
  round: number;
  hp: number;
  score: number;
  spawnRate: number;
  phase: GamePhase;
  map: GameMap;
  enemies: IEnemy[];
}
