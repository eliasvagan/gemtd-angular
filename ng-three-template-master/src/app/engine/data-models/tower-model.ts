import { IHasPosition } from './has-position';
import { ITowerType } from './tower-type-model';
import { IGameSession } from './game-session';
import { IEnemy } from './enemy-model';

export interface ITower extends IHasPosition {
	towerType: ITowerType;
	session: IGameSession;
	currentTargets: IEnemy[];
	cooldown: number;
}
