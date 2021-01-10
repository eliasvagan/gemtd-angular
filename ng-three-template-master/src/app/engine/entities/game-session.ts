import * as THREE from 'three-full';
import { GAMESESSION_DEFAULT_VALUES, IGameSession, IGameSessionGemChances } from '../data-models/game-session';
import { GamePhase } from '../enums/game-phase';
import { GameMap } from './game-map';
import { Enemy } from './enemy';
import { IGameSessionBuff } from '../data-models/game-session-buff';
import { GameSessionBuff } from './game-session-buff';
import { Tile, TileType } from './tile';

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

	private scene: THREE.Scene;

	private readonly initialValues: IGameSession;

	constructor(scene: THREE.Scene) {
		this.initialValues = {
			...GAMESESSION_DEFAULT_VALUES,
			board: new GameMap(scene),
			buffs: [
				new GameSessionBuff('gemChances.types.amethyst', .02, 8000),
				new GameSessionBuff('gemChances.sizes.4', .5, 3000)
			],
			scene
		};
		Object.assign(this, this.initialValues);
	}

	update(dt: number): void {
		this.enemies.forEach(enemy => enemy.update(dt));
		this.board.update(dt);
		this.buffs.forEach(buff => buff.update(dt));
		this.buffs = this.buffs.filter(b => b.timeRemaining > 0);
		// this.applyBuffs();
	}

	applyBuffs() {
		// Reset gem chances to default before calculating
		const { gemChances, hpMax, spawnRate } = GAMESESSION_DEFAULT_VALUES; // TODO: Fix this
		Object.assign(this, { gemChances, hpMax, spawnRate });

		// Apply buffs
		this.buffs.forEach(buff => {
			const { valueDifference, affectedStatName } = buff;
			try {
				const path = affectedStatName.split('.');
				let targetObj: IGameSession | object;
				if (!path) {
					targetObj = this;
				} else {
					targetObj = path.reduce((target, subPath, index) => {
						return index === path.length - 1 ? target : target[subPath];
					}, this);
				}
				targetObj[path[path.length - 1]] += valueDifference;
			} catch (err) {
				console.error(`Could not find property ${affectedStatName} on GameSession instance!`);
			}
		});

		// Normalize gem size chances
		const normalizerGemSize = Object
			.values(this.gemChances.sizes)
			.reduce((sum, chance) => sum + chance, 0);

		Object
			.entries(this.gemChances.sizes)
			.forEach(([gemType, chance]) => {
				this.gemChances.sizes[gemType] = chance / normalizerGemSize;
			});

		// Normalize gem chances
		const normalizerGemType = Object
			.values(this.gemChances.types)
			.reduce((sum, chance) => sum + chance, 0);

		Object
			.entries(this.gemChances.types)
			.forEach(([gemType, chance]) => {
				this.gemChances.types[gemType] = chance / normalizerGemType;
			});
	}

	placeRandomTile(position: { x: number, y: number }): void {
		const getRandomGem = (chances: IGameSessionGemChances): [string, number] => {
			const foundType: string = (() => {
				let sum = 0;
				const rn = Math.random();
				for (const [name, chance] of Object.entries(chances.types)) {
					if ( rn > sum && rn  < sum + chance) {
						return name;
					}
					sum += chance;
				}
			})();
			const foundSize: number = (() => {
				let sum = 0;
				const rn  = Math.random();
				for (let i = 0; i < chances.sizes.length; i++) {
					const chance = chances.sizes[i];
					if ( rn > sum && rn < sum + chance) {
						return i;
					}
					sum += chance;
				}
			})();
			return [foundType, foundSize];
		};
		const [ gt, gs ] = getRandomGem(this.gemChances);
		this.board.placeGem(position, gt, gs);
	}

	handleTileClick(tile: Tile): void {
		switch (this.phase) {
			case GamePhase.Building: {
				const isValidPosition = true; // TODO: Check if tile would block path
				if (isValidPosition) {
					this.placeRandomTile(tile.position);
				}
				break;
			}
			case GamePhase.Defending: {

				break;
			}

		}
	}
}
