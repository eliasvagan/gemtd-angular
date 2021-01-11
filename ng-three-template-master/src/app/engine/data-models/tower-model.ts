import { IHasPosition } from './has-position';
import { ITowerType } from './tower-type-model';
import { IEnemy } from './enemy-model';

export interface ITower extends IHasPosition {
	towerType: ITowerType;
	currentTargets: IEnemy[];
	cooldown: number;
}
