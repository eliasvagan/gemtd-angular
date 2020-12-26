import { ITower } from '../data-models/tower-model';
import { IEnemy } from '../data-models/enemy-model';
import { IGameSession } from '../data-models/game-session';
import { EuclideanDistance } from '../helpers/trig-helpers';

export class Tower implements ITower {

  damage: number;
  name: string;
  range: number;
  speed: number;
  splitShots: number;

  private session: IGameSession;
  private currentTargets: IEnemy[];
  private cooldown: number;

  constructor(towerType: ITower, session: IGameSession) {
    Object.assign(this, towerType);
    this.session = session;
    this.cooldown = 0;
  }

  updateTargets(): void {
    this.currentTargets = this.session.enemies
      .filter(enemy => EuclideanDistance(enemy, this) < this.range)
      .sort(enemy => EuclideanDistance(enemy, this));
  }

  handleAttack(target: IEnemy): void {
    // TODO: Handle attacking properly
    target.hp -= this.damage;
  }

  update(dt: number) {
    this.cooldown -= dt;
    if (this.cooldown <= 0 && this.currentTargets.length > 0) {
      for (let i = 0; i < this.splitShots && this.currentTargets.length >= i; i++) {
        this.handleAttack(this.currentTargets[i]);
      }
      this.cooldown = 1000 / this.speed;
    }
  }
}
