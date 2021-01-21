import { IEnemyType } from '../data-models/enemy-model';
import { TowerRarity } from '../data-models/tower-type-model';


interface IEnemiesAll {
	Walking: {
		TestUnit1: IEnemyType
	};
	Flying: {};
}

const EnemiesAll: IEnemiesAll = {
	Walking: {
		TestUnit1: {
			flying: false,
			enemyTypeId: 'testUnit1',
			nameLong: 'Test Unit 1',
			assetName: 'VOLCANO',
			imgUrl: 'sprites/towers/tower_volcano.png',
			stats: {
				hp: 100,
				rarity: TowerRarity.Common,
				damage: 5,
				moveSpeed: 1,
				armor: 5,
				invisible: false,
				evasion: 0.0,
			},
		}
	},
	Flying: {

	}
};

export {
	EnemiesAll
};
