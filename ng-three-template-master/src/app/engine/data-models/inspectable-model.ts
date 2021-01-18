import { IAbility } from './ability-model';

export interface Inspectable {
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
