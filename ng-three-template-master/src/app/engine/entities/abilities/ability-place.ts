import { IAbility, IAbilityType } from '../../data-models/ability-model';
import { ITowerType } from '../../data-models/tower-type-model';
import { Gem } from '../tiles/gem';
import { GameMap } from '../game-map';

export class AbilityPlace implements IAbility {
	rarity: number;
	name: string;
	description: string;
	imgUrl: string;
	type: IAbilityType;

	constructor(
		gemType: ITowerType,
		private father: Gem,
		private map: GameMap
	) {
		this.name = gemType.towerTypeId;
		this.description = `Build a ${gemType.nameLong}`;
		this.imgUrl = gemType.imgUrl;
		this.type = IAbilityType.Active;
		this.rarity = gemType.rarity;
	}

	execute(): void {
		const placed: Gem = this.map.chooseGem(this.father.position);
		if (placed) {
			this.father.removeAbility(this);
		}
	}

}
