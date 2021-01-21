import { IHasPosition } from './has-position';
import { ITowerType } from './tower-type-model';
import { IEnemyType } from './enemy-model';

export interface ITower extends IHasPosition {
	towerType: ITowerType;
	currentTargets: IEnemyType[];
	cooldown: number;
}
