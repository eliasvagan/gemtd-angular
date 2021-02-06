import { Tile } from './tile';
import { Inspectable } from '../../data-models/inspectable-model';
import { Scene } from 'three-full/sources/scenes/Scene';
import { AnimationGrowIn } from '../animations/animations-entry';

export class Stone extends Tile implements Inspectable {
	constructor(
		position: { x: number, y: number },
		scene: Scene,
	) {
		super(position, scene, {
			normal: 'TILE_STONE_3',
			hovered: 'TILE_STONE_3'
		});
		this.identifier = `Stone`;
		this.towerTypeId = `Stone`;
		this.nameLong = this.identifier;
		this.toolTip = 'This is a stone. You can still build here! When you pick a gem in the building phase, the remaining gems turn into stones.';
		this.animation = new AnimationGrowIn(0.5);
		this.pathWeight = -1;
	}
}
