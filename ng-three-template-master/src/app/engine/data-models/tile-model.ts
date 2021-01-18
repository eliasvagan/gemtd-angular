import { ITowerType } from './tower-type-model';
import { IHasPosition } from './has-position';
import { IUpdateable } from './updatable';

export interface ITile extends IHasPosition, IUpdateable {
	tower?: ITowerType | 'stone';

	removeFromScene(): void;
}

