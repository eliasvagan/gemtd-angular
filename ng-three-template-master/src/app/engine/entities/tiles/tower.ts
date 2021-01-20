import { ITowerType, TowerRarity } from '../../data-models/tower-type-model';
import { IEnemy } from '../../data-models/enemy-model';
import { euclideanDistance } from '../../helpers/math-helpers';
import { Tile } from './tile';
import { Inspectable } from '../../data-models/inspectable-model';
import { IAbility } from '../../data-models/ability-model';
import { AnimationGrowIn } from '../animations/animations-entry';
import { Scene } from 'three-full/sources/scenes/Scene';
import { GameMap } from '../game-map';

export class Tower extends Tile implements ITowerType, Inspectable {

	towerTypeId: string;
	assetName: string;
	damage: number;
	nameLong: string;
	description: string;
	range: number;
	speed: number;
	splitShots: number;
	slowTime: number;
	slowWeight: number;
	towerType: ITowerType;
	abilities: IAbility[];
	imgUrl: string;
	buildCombinations: string[][];
	rarity: TowerRarity;
	isPreview: boolean;

	constructor(
		position: { x: number, y: number },
		scene: Scene,
		towerType: ITowerType,
		preview = true,
		private gameMap: GameMap,
	) {
		super(position, scene, {
			normal: towerType.assetName,
			hovered: towerType.assetName
		});
		Object.assign(this, towerType);
		this.identifier = towerType.assetName + (preview ? '(not picked)' : '');
		this.toolTip = towerType.nameLong;
		this.abilities = [];
		this.towerType = towerType;
		this.isPreview = preview;
		if (preview) {
			this.setOpacity(0.5);
		} else {
			this.animation = new AnimationGrowIn(this.rarity  * 0.5 + 0.4);
		}
	}

	updateTargets(): void {
		this.gameMap.enemies = this.session.enemies
			.filter(enemy => euclideanDistance(this, enemy) < this.towerType.range)
			.sort(enemy => euclideanDistance(this, enemy));
	}

	handleAttack(target: IEnemy): void {
		// TODO: Handle attacking properly
		target.hp -= this.towerType.damage;
	}

	update(dt: number) {
		this.cooldown -= dt;
		if (this.cooldown <= 0 && this.currentTargets.length > 0) {
			for (let i = 0; i < this.towerType.splitShots && this.currentTargets.length >= i; i++) {
				this.handleAttack(this.currentTargets[i]);
			}
			this.cooldown = 1000 / this.towerType.speed;
		}
	}
}
