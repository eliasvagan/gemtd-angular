import { IMap } from '../data-models/map-model';
import { IEnemyCheckpoint } from '../data-models/enemy-checkpoint';
import { euclideanDistance } from '../helpers/math-helpers';
import { GameObject } from './game-object';
import { TowerRarity } from '../data-models/tower-type-model';
import { IEnemyType } from '../data-models/enemy-model';
import { Scene } from 'three-full/sources/scenes/Scene';
import { Statics } from '../services/statics.service';
import { Inspectable } from '../data-models/inspectable-model';
import {IAbility} from '../data-models/ability-model';
import {GameObjectState} from '../enums/game-object-state';

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
	private targetTileIndex: number;
	private targetTileEntity: IEnemyCheckpoint;
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
		this.targetTileIndex = 0;
		this.targetTileEntity = this.gameMap.checkpoints[0];
		this.isDead = false;
		this.hpCurrent = this.stats.hp;
		this.abilities = [];
		this.toolTip = this.nameLong;
	}

	update(dt: number): void {

		if (this.hpCurrent <= 0) {
			this.isDead = true;
			return;
		}

		// Check if target is reached
		if (euclideanDistance(this.targetTileEntity, this) < 0.1) {
			if (this.gameMap.checkpoints.length > this.targetTileIndex + 1) {
				this.targetTileIndex++;
				this.targetTileEntity = this.gameMap.checkpoints[this.targetTileIndex];
			} else {
				this.hpCurrent -= this.stats.hp * 0.01 * dt;
				Statics.CURRENT_SESSION.takeDamage(this);
			}
		}

		// Handle movement
		const speedConstant = 0.001;
		const dx = this.position.x - this.targetTileEntity.position.x < 0 ? 1 : -1;
		const dy = this.position.y - this.targetTileEntity.position.y < 0 ? 1 : -1;

		this.position.x += dx * this.stats.moveSpeed * dt * speedConstant;
		this.position.y += dy * this.stats.moveSpeed * dt * speedConstant;

		if (this.state !== GameObjectState.Changed) {
			this.updateRenderPosition();
		}

		super.update(dt);

		// TODO: Handle walking units
	}

	removeAbility(ability: IAbility): void {
	}
}
