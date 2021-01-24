import { IAbility, IAbilityType } from '../../data-models/ability-model';
import { ITowerType } from '../../data-models/tower-type-model';
import { Gem } from '../tiles/gem';
import { GameMap } from '../game-map';
import { Stone } from '../tiles/stone';

export class AbilityChoose implements IAbility {
	rarity: number;
	name: string;
	description: string;
	imgUrl: string;
	type: IAbilityType;

	constructor(
		gemType: ITowerType,
		private father: Gem,
		private map: GameMap,
		public isActive: boolean,
	) {
		this.name = gemType.towerTypeId;
		this.description = `Place a ${gemType.nameLong} (${gemType.towerTypeId}) here.`;
		this.imgUrl = gemType.imgUrl;
		this.type = IAbilityType.Active;
		this.rarity = gemType.rarity;
	}

	execute(): void {
		if (this.isActive) {
			const placed: Stone = this.map.chooseGem(this.father.position);
			if (placed instanceof Stone && placed.getGem()) {
				this.father.removeAbility(this);
			}
		}
	}

}
