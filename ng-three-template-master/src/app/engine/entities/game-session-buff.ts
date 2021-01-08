import { IGameSessionBuff } from '../data-models/game-session-buff';

export class GameSessionBuff implements IGameSessionBuff {
	public affectedStatName: string;
	public valueDifference: number;
	public timeRemaining: number;

	constructor(affectedStatName: string, valueDifference: number, lifeTime: number = -1) {
		this.timeRemaining = lifeTime;
		this.affectedStatName = affectedStatName;
		this.valueDifference = valueDifference;
	}

	update(dt) {
		this.timeRemaining -= dt;
	}
}


