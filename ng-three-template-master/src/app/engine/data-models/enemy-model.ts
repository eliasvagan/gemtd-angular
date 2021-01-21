import { TowerRarity } from './tower-type-model';

export interface IEnemyType {
	flying: boolean;
	enemyTypeId: string;
	nameLong: string;
	assetName: string;
	imgUrl: string;
	stats: {
		hp: number;
		rarity: TowerRarity;
		damage: number;
		moveSpeed: number;
		armor: number;
		invisible: boolean;
		evasion: number;
	};
}
