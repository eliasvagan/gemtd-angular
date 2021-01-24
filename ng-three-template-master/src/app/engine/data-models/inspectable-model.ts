import { IAbility } from './ability-model';
import { IHasPosition } from './has-position';

export interface Inspectable extends IHasPosition {
	towerTypeId: string;
	nameLong: string;
	toolTip: string;
	abilities: IAbility[];
	imgUrl: string;
	removeAbility(ability: IAbility): void;
}

export function isInspectable(object: any): object is Inspectable {
	return 'imgUrl' in object;
}
