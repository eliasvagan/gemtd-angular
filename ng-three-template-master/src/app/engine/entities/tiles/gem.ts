import { Tile } from './tile';
import { Scene } from 'three-full';
import { ITowerType } from '../../data-models/tower-type-model';
import { Inspectable } from '../../data-models/inspectable-model';
import { IAbility } from '../../data-models/ability-model';

export class Gem extends Tile implements ITowerType, Inspectable {

	assetName: string;
	damage: number;
	nameShort: string;
	nameLong: string;
	range: number;
	speed: number;
	splitShots: number;
	slowTime: number;
	slowWeight: number;
	tower: ITowerType;
	buildCombination: ITowerType[];
	abilities: IAbility[];
	description: string;
	imgUrl: string;

	constructor(
		position: { x: number, y: number },
		scene: Scene,
		gemType: ITowerType
	) {
		const models = {
			normal: gemType.assetName,
			hovered: gemType.assetName
		};
		super(position, scene, models);
		Object.assign(this, gemType);
		this.identifier = gemType.assetName;
		this.abilities = [];
	}
}
