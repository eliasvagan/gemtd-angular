import { IAbility, IAbilityType } from '../../data-models/ability-model';
import { Gem } from '../tiles/gem';
import { GameMap } from '../game-map';
export class AbilityChoose implements IAbility {
	rarity: number;
	name: string;
	description: string;
	imgUrl: string;
	type: IAbilityType;

	constructor(
		private father: Gem,
		private map: GameMap,
		public isActive: boolean,
	) {
		this.name = father.towerTypeId;
		this.description = `Place a ${father.nameLong} (${father.towerTypeId}) here.`;
		this.imgUrl = father.imgUrl;
		this.type = IAbilityType.Active;
		this.rarity = father.rarity;
	}

	execute(): void {
		if (this.isActive) {
			this.map.chooseGem(this.father.position);
		}
	}

}
