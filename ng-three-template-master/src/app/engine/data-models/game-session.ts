import { GameMap } from '../entities/game-map';

export interface IGameSession {
  round: number;
  hp: number;
  score: number;
  spawnRate: number;
  map: GameMap;
}
