import { Scene } from 'three-full';
import { ITowerType, TowerRarity } from '../../data-models/tower-type-model';
import { Inspectable } from '../../data-models/inspectable-model';
import { IAbility } from '../../data-models/ability-model';
import { AnimationGrowIn } from '../animations/animations-entry';
import { euclideanDistance } from '../../helpers/math-helpers';
import { Enemy } from '../enemy';
import { Statics } from '../../services/statics.service';
import { GamePhase } from '../../enums/game-phase';
import { GameMap } from '../game-map';
import { GameObject } from '../game-object';
import { IRenderParams } from '../../data-models/renderable';

export class Gem extends GameObject implements ITowerType, Inspectable {

	towerTypeId: string;
	assetName: string;
	damage: number;
	nameLong: string;
	description: string;
	toolTip: string;
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
	private targetEnemies: Enemy[]; // Updates on every hit
	private cooldown = 0;

	constructor(
		position: { x: number, y: number },
		scene: Scene,
		gemType: ITowerType,
		preview = true,
		private gameMap: GameMap,
		renderParams: IRenderParams = {
			receiveShadow: false,
			castShadow: true,
		}
	) {
		super({
			position,
			assetNames: {
				normal: gemType.assetName,
					hovered: gemType.assetName
			},
			renderState: {
				model: null,
				scene,
				scale: { x: 1, y: 1, z: 1 },
				offset: { x: 0, y: 0, z: 0 },
				rotation: { x: 0, y: 0, z: 0 },
				opacity: 1
			},
			renderParams
		});
		Object.assign(this, gemType);
		this.identifier = gemType.assetName;
		this.toolTip = gemType.nameLong + (preview ? '(not picked)' : '');
		this.abilities = [];
		this.towerType = gemType;
		this.isPreview = preview;
		if (preview) {
			// this.setOpacity(0.5);
		}
		this.animation = new AnimationGrowIn(0.2);
	}


	handleGetPlaced(): void {
		this.animation = new AnimationGrowIn(this.rarity  * 0.5 + 0.2);
		this.setOpacity(1);
	}

	updateTargets(): void {
		this.targetEnemies = this.gameMap.enemies
			.filter(enemy => euclideanDistance(this, enemy) < this.towerType.range)
			.sort(enemy => euclideanDistance(this, enemy));
	}

	handleAttack(target: Enemy): void {
		// TODO: Handle attacking properly
		const damageDealt = target.takeDamage(this); // TODO: Add visuals for real damage dealt
		this.cooldown = this.speed;
	}

	update(dt: number) {
		if (Statics.CURRENT_SESSION.phase === GamePhase.Defending) {
			this.cooldown -= dt;
			if (this.cooldown <= 0){
				if (this.targetEnemies) {
					for (let i = 0; i < this.towerType.splitShots && i < this.targetEnemies.length ; i++) {
						this.handleAttack(this.targetEnemies[i]);
					}
					this.cooldown = 1000 / this.towerType.speed;
				}
				this.updateTargets();
			}
		}
	}


	removeAbility(ability: IAbility): void {
	}
}
