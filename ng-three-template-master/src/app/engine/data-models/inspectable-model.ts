import { IAbility } from './ability-model';

export interface Inspectable {
	nameShort: string;
	nameLong: string;
	toolTip: string;
	abilities: IAbility[];
	imgUrl: string;
}

export function isInspectable(object: any): object is Inspectable {
	return 'imgUrl' in object;
}
