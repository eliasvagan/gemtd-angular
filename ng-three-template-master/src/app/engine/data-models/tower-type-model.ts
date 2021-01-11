export interface ITowerType {
	name: string;
	damage: number;
	range: number;
	speed: number;
	slowWeight?: number;
	slowTime?: number;
	splitShots: number;
	assetName: string;
	buildCombination?: ITowerType[];
}
