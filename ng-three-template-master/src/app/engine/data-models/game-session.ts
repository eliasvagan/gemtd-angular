import { GameMap } from '../entities/game-map';
import { GamePhase } from '../enums/game-phase';
import { Enemy } from '../entities/enemy';


export interface IGameSession {
	hpMax: number;
	round: number;
	hp: number;
	score: number;
	spawnRate: number;
	phase: GamePhase;
	map: GameMap;
	enemies: Enemy[];
}
