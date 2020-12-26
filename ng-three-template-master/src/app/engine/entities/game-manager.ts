import { IGameSession } from '../data-models/game-session';
import { GameMap } from './game-map';
import * as THREE from 'three';
import { GamePhase } from '../enums/game-phase';

export class GameManager {

  private session: IGameSession;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    this.session = {
      round: 0,
      hp: 100,
      score: 0,
      spawnRate: 5,
      phase: GamePhase.Building,
      map: new GameMap(),
      enemies: []
    };
  }

  handleUpdate(dt: number): void {
    this.session.enemies.forEach(enemy => enemy.update(dt));
    this.session.map.update(dt);
  }

  handleNextPhase(): void {
    switch (this.session.phase) {
      case GamePhase.Building: {
        this.session.phase = GamePhase.Defending;
        return;
      }
      case GamePhase.Defending: {
        if (this.session.hp > 0) {
          this.session.phase = GamePhase.Building;
          this.session.round += 1;
        } else {
          this.session.phase = GamePhase.GameOver;
        }
        return;
      }
      case GamePhase.GameOver: {
        console.log('Tried to change phase after the game was over!');
        return;
      }
    }
  }

  handleClick(x: number, y: number): void {

  }

}
