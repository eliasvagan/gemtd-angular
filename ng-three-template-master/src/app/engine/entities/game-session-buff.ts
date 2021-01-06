import { IGameSessionBuff } from '../data-models/game-session-buff';

export class GameSessionBuff implements IGameSessionBuff {
	public affectedStatName: string;
	public valueDifference: number;
	public timeRemaining: number;
	public isDead = false;

	constructor(affectedStatName: string, valueDifference: number, lifeTime: number = -1) {
		this.timeRemaining = lifeTime;
		this.affectedStatName = affectedStatName;
		this.valueDifference = valueDifference;
	}

	update(dt) {
		if (!this.isDead) {
			this.timeRemaining -= dt;
			if (this.timeRemaining <= 0.0) {
				this.isDead = true;
			}
		}
	}
}


