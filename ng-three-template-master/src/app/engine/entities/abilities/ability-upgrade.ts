import { IAbility, IAbilityType } from '../../data-models/ability-model';
import { Gem } from '../tiles/gem';
import { ITowerType } from '../../data-models/tower-type-model';
import { GameMap } from '../game-map';

export class AbilityUpgrade implements IAbility {
	rarity: number;
	description: string;
	imgUrl: string;
	name: string;
	type: IAbilityType;

	constructor(
		private gemType: ITowerType,
		private father: Gem,
		private map: GameMap
	) {
		this.name = gemType.rarity === 0 ? gemType.towerTypeId : gemType.nameLong;
		this.description = `Fuse gems to ${gemType.nameLong}`;
		this.imgUrl = gemType.imgUrl;
		this.type = IAbilityType.Active;
		this.rarity = gemType.rarity;
	}

	execute(): void {
		const comboTower = new Gem(this.father.position, this.map.scene, this.gemType);
		const placed = this.map.addTile(comboTower);
		// Statics.CURRENT_SESSION.updateHoverEffect();
		if (!placed) {
			console.error('Could not combine to tower! The tower placement was rejected by GameMap');
		}
	}
}
