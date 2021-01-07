import { IGameSessionBuff } from '../data-models/game-session-buff';
import { IGameSession } from '../data-models/game-session';

export class GameSessionBuff implements IGameSessionBuff {
	public affectedStatName: string;
	public valueDifference: number;
	public timeRemaining: number;

	constructor(affectedStatName: string, valueDifference: number, lifeTime: number = -1) {
		this.timeRemaining = lifeTime;
		this.affectedStatName = affectedStatName;
		this.valueDifference = valueDifference;
	}

	applyBuff(gameSession: IGameSession) {
		try {
			const path = this.affectedStatName.split('.');
			let targetStat;
			if (!path) {
				targetStat = gameSession[this.affectedStatName];
			} else {
				targetStat = path.reduce((target, subPath) => {
					return target[subPath];
				}, gameSession);
			}
			targetStat += this.valueDifference;
			return true;

		} catch (err) {
			console.error(`Could not find property ${this.affectedStatName} on GameSession instance!`);
			return false;
		}
	}

	update(dt) {
		this.timeRemaining -= dt;
	}
}


