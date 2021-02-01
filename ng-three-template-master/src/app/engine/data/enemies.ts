import { IEnemyType } from '../data-models/enemy-model';
import { TowerRarity } from '../data-models/tower-type-model';

interface IEnemiesAll {
	Walking: {
		tier0: {
			basic: IEnemyType;
			slow: IEnemyType;
			fast: IEnemyType;
			heavy: IEnemyType;
			hat: IEnemyType;
			boss: IEnemyType;
		};
		tier1: {
			basic: IEnemyType;
			slow: IEnemyType;
			fast: IEnemyType;
			heavy: IEnemyType;
			hat: IEnemyType;
			boss: IEnemyType;
		};
		tier2: {
			basic: IEnemyType;
			slow: IEnemyType;
			fast: IEnemyType;
			heavy: IEnemyType;
			hat: IEnemyType;
			boss: IEnemyType;
		};
		tier3: {
			basic: IEnemyType;
			slow: IEnemyType;
			fast: IEnemyType;
			heavy: IEnemyType;
			hat: IEnemyType;
			boss: IEnemyType;
		}
	};
	Flying: {
		tier0: {
			basic: IEnemyType;
			slow: IEnemyType;
			fast: IEnemyType;
			heavy: IEnemyType;
			hat: IEnemyType;
			boss: IEnemyType;
		};
		tier1: {
			basic: IEnemyType;
			slow: IEnemyType;
			fast: IEnemyType;
			heavy: IEnemyType;
			hat: IEnemyType;
			boss: IEnemyType;
		};
		tier2: {
			basic: IEnemyType;
			slow: IEnemyType;
			fast: IEnemyType;
			heavy: IEnemyType;
			hat: IEnemyType;
			boss: IEnemyType;
		};
	};
}

const EnemiesAll: IEnemiesAll = {
	Walking: {
		tier0: {
			basic: {
				flying: false,
				enemyTypeId:  								'walking_00_00',
				nameLong: 										'Walker Mk.1',
				assetName: 							'ENEMY_WALKING_00_00',
				imgUrl: 'sprites/enemies/enemy_walking_00_00.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Common,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			slow: {
				flying: false,
				enemyTypeId:  								'walking_00_01',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_00_01',
				imgUrl: 'sprites/enemies/enemy_walking_00_01.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Common,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			fast: {
				flying: false,
				enemyTypeId:  								'walking_00_02',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_00_02',
				imgUrl: 'sprites/enemies/enemy_walking_00_02.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Common,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			heavy: {
				flying: false,
				enemyTypeId:  								'walking_00_03',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_00_03',
				imgUrl: 'sprites/enemies/enemy_walking_00_03.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Common,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			hat: {
				flying: false,
				enemyTypeId:  								'walking_00_04',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_00_04',
				imgUrl: 'sprites/enemies/enemy_walking_00_04.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Common,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			boss: {
				flying: false,
				enemyTypeId:  								'walking_00_05',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_00_05',
				imgUrl: 'sprites/enemies/enemy_walking_00_05.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Common,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
		},
		tier1: {
			basic: {
				flying: false,
				enemyTypeId:  								'walking_01_00',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_01_00',
				imgUrl: 'sprites/enemies/enemy_walking_01_00.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Uncommon,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			slow: {
				flying: false,
				enemyTypeId:  								'walking_00_01',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_01_01',
				imgUrl: 'sprites/enemies/enemy_walking_00_01.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Uncommon,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			fast: {
				flying: false,
				enemyTypeId:  								'walking_01_02',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_01_02',
				imgUrl: 'sprites/enemies/enemy_walking_01_02.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Uncommon,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			heavy: {
				flying: false,
				enemyTypeId:  								'walking_01_03',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_01_03',
				imgUrl: 'sprites/enemies/enemy_walking_01_03.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Uncommon,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			hat: {
				flying: false,
				enemyTypeId:  								'walking_01_04',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_01_04',
				imgUrl: 'sprites/enemies/enemy_walking_01_04.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Uncommon,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			boss: {
				flying: false,
				enemyTypeId:  								'walking_01_05',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_01_05',
				imgUrl: 'sprites/enemies/enemy_walking_01_05.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Uncommon,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
		},
		tier2: {
			basic: {
				flying: false,
				enemyTypeId:  								'walking_02_00',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_02_00',
				imgUrl: 'sprites/enemies/enemy_walking_02_00.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			slow: {
				flying: false,
				enemyTypeId:  								'walking_02_01',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_02_01',
				imgUrl: 'sprites/enemies/enemy_walking_02_01.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			fast: {
				flying: false,
				enemyTypeId:  								'walking_02_02',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_02_02',
				imgUrl: 'sprites/enemies/enemy_walking_02_02.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			heavy: {
				flying: false,
				enemyTypeId:  								'walking_02_03',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_02_03',
				imgUrl: 'sprites/enemies/enemy_walking_02_03.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			hat: {
				flying: false,
				enemyTypeId:  								'walking_02_04',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_02_04',
				imgUrl: 'sprites/enemies/enemy_walking_02_04.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			boss: {
				flying: false,
				enemyTypeId:  								'walking_02_05',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_02_05',
				imgUrl: 'sprites/enemies/enemy_walking_02_05.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
		},
		tier3: {
			basic: {
				flying: false,
				enemyTypeId:  								'walking_03_00',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_03_00',
				imgUrl: 'sprites/enemies/enemy_walking_03_00.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			slow: {
				flying: false,
				enemyTypeId:  								'walking_03_01',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_03_01',
				imgUrl: 'sprites/enemies/enemy_walking_03_01.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			fast: {
				flying: false,
				enemyTypeId:  								'walking_03_03',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_03_02',
				imgUrl: 'sprites/enemies/enemy_walking_03_02.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			heavy: {
				flying: false,
				enemyTypeId:  								'walking_03_03',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_03_03',
				imgUrl: 'sprites/enemies/enemy_walking_03_03.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			hat: {
				flying: false,
				enemyTypeId:  								'walking_03_04',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_03_04',
				imgUrl: 'sprites/enemies/enemy_walking_03_04.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			boss: {
				flying: false,
				enemyTypeId:  								'walking_03_05',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_WALKING_03_05',
				imgUrl: 'sprites/enemies/enemy_walking_03_05.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
		},
	},
	Flying: {
		tier0: {
			basic: {
				flying: false,
				enemyTypeId:  								'flying_00_00',
				nameLong: 										'Walker Mk.1',
				assetName: 							'ENEMY_FLYING_00_00',
				imgUrl: 'sprites/enemies/enemy_flying_00_00.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Common,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			slow: {
				flying: false,
				enemyTypeId:  								'flying_00_01',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_FLYING_00_01',
				imgUrl: 'sprites/enemies/enemy_flying_00_01.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Common,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			fast: {
				flying: false,
				enemyTypeId:  								'flying_00_02',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_FLYING_00_02',
				imgUrl: 'sprites/enemies/enemy_flying_00_02.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Common,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			heavy: {
				flying: false,
				enemyTypeId:  								'flying_00_03',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_FLYING_00_03',
				imgUrl: 'sprites/enemies/enemy_flying_00_03.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Common,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			hat: {
				flying: false,
				enemyTypeId:  								'flying_00_04',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_FLYING_00_04',
				imgUrl: 'sprites/enemies/enemy_flying_00_04.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Common,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			boss: {
				flying: false,
				enemyTypeId:  								'flying_00_05',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_FLYING_00_05',
				imgUrl: 'sprites/enemies/enemy_flying_00_05.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Common,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
		},
		tier1: {
			basic: {
				flying: false,
				enemyTypeId:  								'flying_01_00',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_FLYING_01_00',
				imgUrl: 'sprites/enemies/enemy_flying_01_00.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Uncommon,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			slow: {
				flying: false,
				enemyTypeId:  								'flying_01_01',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_FLYING_01_01',
				imgUrl: 'sprites/enemies/enemy_flying_01_01.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Uncommon,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			fast: {
				flying: false,
				enemyTypeId:  								'flying_01_02',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_FLYING_01_02',
				imgUrl: 'sprites/enemies/enemy_flying_01_02.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Uncommon,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			heavy: {
				flying: false,
				enemyTypeId:  								'flying_01_03',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_FLYING_01_03',
				imgUrl: 'sprites/enemies/enemy_flying_01_03.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Uncommon,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			hat: {
				flying: false,
				enemyTypeId:  								'flying_01_04',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_FLYING_01_04',
				imgUrl: 'sprites/enemies/enemy_flying_01_04.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Uncommon,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			boss: {
				flying: false,
				enemyTypeId:  								'flying_01_05',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_FLYING_01_05',
				imgUrl: 'sprites/enemies/enemy_flying_01_05.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Uncommon,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
		},
		tier2: {
			basic: {
				flying: false,
				enemyTypeId:  								'flying_02_00',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_FLYING_02_00',
				imgUrl: 'sprites/enemies/enemy_flying_02_00.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			slow: {
				flying: false,
				enemyTypeId:  								'flying_02_01',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_FLYING_02_01',
				imgUrl: 'sprites/enemies/enemy_flying_02_01.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			fast: {
				flying: false,
				enemyTypeId:  								'flying_02_02',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_FLYING_02_02',
				imgUrl: 'sprites/enemies/enemy_flying_02_02.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			heavy: {
				flying: false,
				enemyTypeId:  								'flying_02_03',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_FLYING_02_03',
				imgUrl: 'sprites/enemies/enemy_flying_02_03.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			hat: {
				flying: false,
				enemyTypeId:  								'flying_02_04',
				nameLong: 										'Crawler Mk.1',
				assetName: 							'ENEMY_FLYING_02_04',
				imgUrl: 'sprites/enemies/enemy_flying_02_04.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
			boss: {
				flying: false,
				enemyTypeId:  								'flying_02_05',
				nameLong: 										'Emperor Mk.3',
				assetName: 							'ENEMY_FLYING_02_05',
				imgUrl: 'sprites/enemies/enemy_flying_02_05.png',
				stats: {
					hp: 100,
					rarity: TowerRarity.Rare,
					damage: 5,
					moveSpeed: 1,
					armor: 5,
					invisible: false,
					evasion: 0.0,
				},
			},
		}
	},
};

export {
	EnemiesAll
};
