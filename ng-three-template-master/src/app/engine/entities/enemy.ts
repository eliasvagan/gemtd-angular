import { IMap } from '../data-models/map-model';
import { euclideanDistance } from '../helpers/math-helpers';
import { GameObject } from './game-object';
import { ITowerType, TowerRarity } from '../data-models/tower-type-model';
import { IEnemyType } from '../data-models/enemy-model';
import { Scene } from 'three-full/sources/scenes/Scene';
import { Statics } from '../services/statics.service';
import { Inspectable } from '../data-models/inspectable-model';
import { IAbility } from '../data-models/ability-model';
import { GameObjectState } from '../enums/game-object-state';
import { IPath } from '../helpers/path-finder';

export class Enemy extends GameObject implements IEnemyType, Inspectable {

	flying: boolean;
	position: { x: number; y: number };
	stats: {
		hp: number;
		rarity: TowerRarity,
		damage: number,
		moveSpeed: number,
		armor: number,
		invisible: boolean,
		evasion: number,
	};
	isDead: boolean;
	assetName: string;
	enemyTypeId: string;
	imgUrl: string;
	nameLong: string;
	rarity: TowerRarity;

	abilities: IAbility[];
	toolTip: string;
	towerTypeId: string;

	private gameMap: IMap;
	private path: IPath;
	private pathIndex: number;
	private hpCurrent: number;

	constructor(enemyType: IEnemyType, spawnPosition: {x: number, y: number}, scene: Scene, gameMap: IMap) {
		super({
			position: spawnPosition,
			assetNames: {
				normal: enemyType.assetName
			},
			renderState: {
				model: null,
				scene,
				scale: { x: 1, y: 1, z: 1 },
				offset: { x: 0, y: 0, z: 0 },
				rotation: { x: 0, y: 0, z: 0 },
				opacity: 1
			},
			renderParams: {
				castShadow: true,
				receiveShadow: false
			}
		});
		Object.assign(this, enemyType);
		this.gameMap = gameMap;
		this.path = Statics.CURRENT_SESSION.walkingPath;
		this.pathIndex = 0;
		this.isDead = false;
		this.hpCurrent = this.stats.hp;
		this.abilities = [];
		this.toolTip = this.nameLong;
	}

	takeDamage(source: ITowerType): number {
		const damage = source.damage;
		// TODO: Add armor calculation, etc.
		this.hpCurrent -= damage;
		return damage;
	}

	kill(): void {
		this.isDead = true;
		this.removeFromScene();
	}

	finishPath(): void {
		this.kill();
		Statics.CURRENT_SESSION.takeDamage(this);
	}

	update(dt: number): void {

		if (this.hpCurrent <= 0) {
			this.kill();
			return;
		}

		// Check if target is reached
		if (this.path.steps.length > this.pathIndex + 1) {
			this.finishPath();
			super.update(dt);
			return;
		}

		// Set target
		const pathTarget = this.path.steps[this.pathIndex];

		// Handle movement
		const speedConstant = 0.001;
		const dx = this.position.x - pathTarget.x < 0 ? 1 : -1;
		const dy = this.position.y - pathTarget.y < 0 ? 1 : -1;

		this.position.x += dx * this.stats.moveSpeed * dt * speedConstant;
		this.position.y += dy * this.stats.moveSpeed * dt * speedConstant;

		// Check if target was reached
		if (euclideanDistance(pathTarget, this) < 0.1) {
			this.pathIndex++;
		}

		// TODO: Why?
		if (this.state !== GameObjectState.Changed) {
			this.updateRenderPosition();
		}

		super.update(dt);

		// TODO: Handle walking units
	}

	removeAbility(ability: IAbility): void {
	}
}
