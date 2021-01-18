import { ITowerType } from '../../data-models/tower-type-model';
import { IEnemy } from '../../data-models/enemy-model';
import { euclideanDistance } from '../../helpers/math-helpers';
import { ITower } from '../../data-models/tower-model';
import { IHasPosition } from '../../data-models/has-position';
import { IGameSession } from '../game-session';

export class Tower implements ITower {

	position: { x: number; y: number };
	towerType: ITowerType;
	session: IGameSession;
	currentTargets: IEnemy[];
	cooldown: number;

	constructor(position: IHasPosition, towerType: ITowerType, session: IGameSession) {
		Object.assign(this, position);
		this.towerType = towerType;
		this.session = session;
		this.currentTargets = [];
		this.cooldown = 0;
	}

	updateTargets(): void {
		this.currentTargets = this.session.enemies
			.filter(enemy => euclideanDistance(this, enemy) < this.towerType.range)
			.sort(enemy => euclideanDistance(this, enemy));
	}

	handleAttack(target: IEnemy): void {
		// TODO: Handle attacking properly
		target.hp -= this.towerType.damage;
	}

	update(dt: number) {
		this.cooldown -= dt;
		if (this.cooldown <= 0 && this.currentTargets.length > 0) {
			for (let i = 0; i < this.towerType.splitShots && this.currentTargets.length >= i; i++) {
				this.handleAttack(this.currentTargets[i]);
			}
			this.cooldown = 1000 / this.towerType.speed;
		}
	}
}
