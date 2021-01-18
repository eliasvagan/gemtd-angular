export enum IAbilityType {
	Active,
	Passive
}

export interface IAbility {
	rarity: number;
	name: string;
	description: string;
	imgUrl: string;
	type: IAbilityType;
	execute(): void;
}
