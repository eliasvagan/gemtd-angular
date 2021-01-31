import * as THREE from 'three-full';
import { GamePhase } from '../enums/game-phase';
import { GameMap } from './game-map';
import { Enemy } from './enemy';
import { IGameSessionBuff } from '../data-models/game-session-buff';
import { GameSessionBuff } from './game-session-buff';
import { GameObject } from './game-object';
import { Tile } from './tiles/tile';
import { GemTypeNames } from '../data/gem-types';
import { IUpdateable } from '../data-models/updatable';
import { Statics } from '../services/statics.service';
import { Inspectable, isInspectable } from '../data-models/inspectable-model';
import { HoverEffect } from './effects/hover_effect';
import { EnemiesAll } from '../data/enemies';
import { PathFinder, IPath } from '../helpers/path-finder';

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
	buffs: IGameSessionBuff[];
	activeObject: Inspectable;
	walkingPath: IPath;
	handleClickObject(obj: GameObject): void;
	handleNextPhase(): void;
	setActiveObject(Inspectable): void;
	updateHoverEffect(): void;
	takeDamage(enemy: Enemy): void;
	updateWalkingPath(): void;
}

export const GAME_SESSION_DEFAULT_VALUES: IGameSession | any = {
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
	walkingPath: null
};

export class GameSession implements IGameSession {
	public gemChances: IGameSessionGemChances;
	public hpMax: number;
	public hpCurrent: number;
	public board: GameMap;
	public phase: GamePhase;
	public round: number;
	public score: number;
	public spawnRate: number;
	public buffs: IGameSessionBuff[];
	public walkingPath: IPath;
	public activeObject: Inspectable;
	private readonly walkingPathPreview: THREE.Group = new THREE.Group();

	private readonly initialValues: IGameSession;

	private hoverEffect: HoverEffect;

	constructor(public scene: THREE.Scene) {
		this.initialValues = {
			...GAME_SESSION_DEFAULT_VALUES,
			board: new GameMap(scene),
			buffs: [
				new GameSessionBuff('gemChances.types.amethyst', .02, 8000),
				new GameSessionBuff('gemChances.sizes.4', .5, 3000)
			],
			scene
		};
		Object.assign(this, this.initialValues);
		this.hoverEffect = new HoverEffect({x: 0, y: 0}, scene);
		this.hoverEffect.setVisibility(false);
		this.updateWalkingPath();
		this.scene.add(this.walkingPathPreview);
	}

	update(dt: number): void {
		this.buffs.forEach(buff => buff.update(dt));
		this.buffs = this.buffs.filter(b => b.timeRemaining > 0);
		// this.applyBuffs();

		switch (this.phase) {
			case GamePhase.Picking:
				break;
			case GamePhase.Defending:
				break;
			case GamePhase.GameOver:
				// TODO: Add game over screen
				break;
			case GamePhase.Building: {
				break;
			}
		}
		this.board.update(dt);
		this.hoverEffect.update(dt);
	}

	applyBuffs() {
		// Reset gem chances to default before calculating
		const {gemChances, hpMax, spawnRate} = GAME_SESSION_DEFAULT_VALUES; // TODO: Fix this
		Object.assign(this, {gemChances, hpMax, spawnRate});

		// Apply buffs
		this.buffs.forEach(buff => {
			const {valueDifference, affectedStatName} = buff;
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

	updateWalkingPath(): void {
		const pf = new PathFinder(this.board);

		const path = pf.getPathConnected(this.board.checkpoints.map(cp => cp.position));

		// Draw Line along path
		this.walkingPathPreview.children = [];
		if (path.steps) {
			this.walkingPathPreview.children.push(new THREE.Line(
				new THREE.BufferGeometry().setFromPoints(
					path.steps.map(({ x, y }) => (new THREE.Vector3(x, 0.3, y))
					)),
				new THREE.LineBasicMaterial({ color: 0x2244ff, linewidth: 6, linecap: 'round' })
			));
		}
	}

	setPhase(phase: GamePhase): void {
		this.phase = phase;
		switch (phase) {
			case GamePhase.Picking:
				break;
			case GamePhase.Defending:
				break;
			case GamePhase.GameOver:
				break;
			case GamePhase.Building: {
				// Spawn a single enemy just to test
				const spawnPosition = { x: 3.5, y: -4 };
				const enemy = new Enemy(EnemiesAll.Walking.TestUnit1, spawnPosition, this.scene, this.board);
				this.board.enemies.push(enemy);
				this.setActiveObject(enemy);
				break;
			}
		}
	}

	handleNextPhase(): void {
		console.log('Switching from game-phase:', this.phase);
		switch (this.phase) {
			case GamePhase.Picking:
				this.setPhase(GamePhase.Defending);
				break;
			case GamePhase.Defending:
				if (this.hpCurrent <= 0) {
					this.setPhase(GamePhase.GameOver);
				} else {
					this.setPhase(GamePhase.Building);
				}
				break;
			case GamePhase.GameOver:
				// TODO: Add game over screen
				break;
			case GamePhase.Building: {
				this.setPhase(GamePhase.Defending);
				break;
			}
		}
	}

	handleClickObject(obj: GameObject): void {
		if (obj instanceof Tile) {
			const response = this.board.handleTileClick(obj);
			if (response instanceof GameObject) {
				this.updateWalkingPath();
			}
		} else if (obj instanceof Enemy) {
			this.setActiveObject(obj);
		} else {
			// TODO: Handle clicking of other object types
			console.log('Clicked a non-tile / non-enemy object: ', obj);
		}

		Statics.UI_MANAGER.forceUpdateZones();
	}

	updateHoverEffect(): void {
		if (!!this.activeObject) {
			this.hoverEffect.setVisibility(true);
			// this.hoverEffect.position = this.activeObject.position;
			this.hoverEffect.track(this.activeObject);
		} else {
			this.hoverEffect.setVisibility(false);
			// this.hoverEffect.position = { x: 0, y: 0 };
			this.hoverEffect.untrack();
		}
	}

	setActiveObject(obj: Inspectable): void {
		this.activeObject = obj;
		this.hoverEffect.setVisibility(!!obj);
		Statics.UI_MANAGER.forceUpdateZones();
		this.updateHoverEffect();
	}

	takeDamage(enemy: Enemy): void {
		this.hpCurrent -= enemy.stats.damage;
	}
}
