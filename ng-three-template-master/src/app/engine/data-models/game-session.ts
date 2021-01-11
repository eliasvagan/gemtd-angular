import { GameMap } from '../entities/game-map';
import { GamePhase } from '../enums/game-phase';
import { IUpdateable } from './updatable';
import { IGameSessionBuff } from './game-session-buff';
import { IEnemy } from './enemy-model';
import { GemTypeNames } from '../enums/gem-types';
import { GameObject } from '../entities/game-object';

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
	activeObject: GameObject | null;

	handleClickObject(obj: GameObject): void;
	setActiveObject(obj: GameObject): void;
}

export const GAMESESSION_DEFAULT_VALUES: IGameSession | any = {
	hpMax: 100,
	hpCurrent: 100,
	round: 0,
	gemChances: {
		types: {
			amethyst: 0.125,
			aquamarine: 0.125,
			diamond: 0.125,
			emerald: 0.125,
			opal: 0.125,
			ruby: 0.125,
			sapphire: 0.125,
			topaz: 0.125
		},
		sizes: [1, 0, 0, 0, 0]
	},
	score: 0,
	spawnRate: 5,
	phase: GamePhase.Building,
	board: null,
	enemies: [],
	buffs: [],
	activeObject: null,
};
