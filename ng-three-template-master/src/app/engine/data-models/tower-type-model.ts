export interface ITowerType {
	rarity: TowerRarity;
	towerTypeId: string;
	nameLong: string;
	damage: number;
	range: number;
	speed: number;
	slowWeight?: number;
	slowTime?: number;
	splitShots: number;
	assetName: string;
	imgUrl: string;
	buildCombinations: (string[])[];
}

// TODO: Implement this
export enum TowerRarity {
	Common,
	Uncommon,
	Rare,
	Advanced,
	Legendary,
	Secret,
}
