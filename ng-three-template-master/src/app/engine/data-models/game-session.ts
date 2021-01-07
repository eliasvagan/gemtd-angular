import { GameMap } from '../entities/game-map';
import { GamePhase } from '../enums/game-phase';
import { IUpdateable } from './updatable';
import { IGameSessionBuff } from './game-session-buff';
import { IEnemy } from './enemy-model';
import { GemTypeNames } from '../enums/gem-types-names';

export interface IGameSessionGemChances {
	types: {
		[key in GemTypeNames]: number;
	};
	sizes: [number, number, number, number, number];
}

export interface IGameSession extends IUpdateable {
	hpMax: number;
	hpCurrent: number;
	round: number;
	score: number;
	spawnRate: number;
	gemChances: IGameSessionGemChances;
	phase: GamePhase;
	board: GameMap;
	enemies: IEnemy[];
	buffs: IGameSessionBuff[];
}

export const GAMESESSION_DEFAULT_VALUES: IGameSession | any = {
	hpMax: 100,
	hpCurrent: 100,
	round: 0,
	gemChances: {
		types: {
			amethyst: 1,
			aquamarine: 1,
			diamond: 1,
			emerald: 1,
			opal: 1,
			ruby: 1,
			sapphire: 1,
			topaz: 1
		},
		sizes: [1, 0, 0, 0, 0]
	},
	score: 0,
	spawnRate: 5,
	phase: GamePhase.Building,
	board: null,
	enemies: [],
	buffs: [],
};
