import { IHasPosition } from './has-position';
import { IUpdateable } from './updatable';

export interface ITile extends IHasPosition, IUpdateable {
	removeFromScene(): void;
}

