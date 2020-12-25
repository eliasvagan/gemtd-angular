import {IGameSession} from '../data-models/game-session';
import {GameMap} from './game-map';

export class GameManager {
  private session: IGameSession;
  constructor() {
    this.session = {
      round: 0,
      hp: 100,
      score: 0,
      spawnRate: 5,
      map: new GameMap()
    };
  }

}
