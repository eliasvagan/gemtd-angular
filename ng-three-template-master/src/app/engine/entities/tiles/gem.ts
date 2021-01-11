import { Tile } from './tile';
import { Scene } from 'three-full';
import { ITowerType } from '../../data-models/tower-type-model';

export class Gem extends Tile implements ITowerType {
	assetName: string;
	damage: number;
	name: string;
	range: number;
	speed: number;
	splitShots: number;

	public isPicked: boolean;

	constructor(
		position: { x: number, y: number },
		scene: Scene,
		gemType: ITowerType
	) {
		const gemData = gemType;
		const models = {
			normal: gemData.assetName,
			hovered: gemData.assetName
		};
		super(position, scene, models);
		Object.assign(this, gemData);
	}
}
