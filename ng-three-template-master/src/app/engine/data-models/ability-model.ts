export enum IAbilityType {
	Active,
	Passive
}

export interface IAbility {
	name: string;
	description: string;
	imgUrl: string;
	type: IAbilityType;
	execute(): void;
}
