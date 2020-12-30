import * as THREE from 'three-full';
import { IGameSession } from '../data-models/game-session';
import { ILoadedAssets } from '../data-models/assets-model';
import { GameMap } from './game-map';
import { GamePhase } from '../enums/game-phase';
import { GameObject } from './game-object';

export class GameManager {

  private session: IGameSession;
  private readonly scene: THREE.Scene;

  constructor(scene: THREE.Scene, assets: ILoadedAssets) {
    GameObject.LOADED_ASSETS = assets;
    this.scene = scene;
    this.session = {
      round: 0,
      hp: 100,
      score: 0,
      spawnRate: 5,
      phase: GamePhase.Building,
      map: new GameMap(this.scene),
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
