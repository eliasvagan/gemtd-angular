export interface ITowerType {
	nameShort: string;
	nameLong: string;
	damage: number;
	range: number;
	speed: number;
	slowWeight?: number;
	slowTime?: number;
	splitShots: number;
	assetName: string;
	imgUrl: string;
	buildCombination?: ITowerType[];
}
