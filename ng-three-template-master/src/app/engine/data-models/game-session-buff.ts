import { IGameSession } from './game-session';

export interface IGameSessionBuff {
	timeRemaining: number;
	affectedStatName: string;
	valueDifference: number;
	update(dt: number): void;
	applyBuff(gameSession: IGameSession): boolean;
}
