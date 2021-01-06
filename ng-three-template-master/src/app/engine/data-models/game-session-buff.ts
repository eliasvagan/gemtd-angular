export interface IGameSessionBuff {
	timeRemaining: number;
	affectedStatName: string;
	valueDifference: number;
	update(dt: number): void;
}
