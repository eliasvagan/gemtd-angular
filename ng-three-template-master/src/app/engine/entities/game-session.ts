import * as THREE from 'three-full';
import { GAMESESSION_DEFAULT_VALUES, IGameSession, IGameSessionGemChances } from '../data-models/game-session';
import { GamePhase } from '../enums/game-phase';
import { GameMap } from './game-map';
import { Enemy } from './enemy';
import { IGameSessionBuff } from '../data-models/game-session-buff';
import { GameSessionBuff } from './game-session-buff';
import * as path from 'path';

export class GameSession implements IGameSession {

	public enemies: Enemy[];
	public gemChances: IGameSessionGemChances;
	public hpMax: number;
	public hpCurrent: number;
	public board: GameMap;
	public phase: GamePhase;
	public round: number;
	public score: number;
	public spawnRate: number;
	public buffs: IGameSessionBuff[];

	private readonly initialValues: IGameSession;

	constructor(scene: THREE.Scene) {
		this.initialValues = {
			...GAMESESSION_DEFAULT_VALUES,
			board: new GameMap(scene),
			buffs: [
				new GameSessionBuff('gemChances.types.amethyst', 2.0, 4000) // Test buff
			],
		};
		Object.assign(this, this.initialValues);
	}

	update(dt: number): void {
		this.enemies.forEach(enemy => enemy.update(dt));
		this.board.update(dt);
		this.buffs.forEach(buff => buff.update(dt));
		this.buffs = this.buffs.filter(b => b.timeRemaining > 0);
		this.applyBuffs();
	}

	applyBuffs() {
		// Reset gem chances to default before calculating
		const { gemChances, hpMax, spawnRate } = this.initialValues;
		Object.assign(this, { gemChances, hpMax, spawnRate });

		this.buffs.forEach((buff) => {
			try {
				// TODO: Fix this to be recursive
				/*
				const substrings: string[] = buff.affectedStatName.split('.');
				let substringIndex = 0;
				let target = /this[substrings ? substrings[0] : buff.affectedStatName];
				while (target.hasOwnProperty(substrings[substringIndex])) {
					target = target[substrings[substringIndex]];
					substringIndex++;
				}
				*/
			} catch (err) {
				console.error(`Could not find property ${buff.affectedStatName} on GameSession instance!`);
			}
		});

		// Normalize chances
		const normalizer = Object
			.values(this.gemChances.sizes)
			.reduce((sum, chance) => sum + chance, 0);

		Object
			.entries(this.gemChances.types)
			.forEach(([gemType, chance]) => {
				this.gemChances.types[gemType] = chance / normalizer;
		});

		const gemTypeCount: number = Object.keys(this.gemChances.types).length;
	}
}
