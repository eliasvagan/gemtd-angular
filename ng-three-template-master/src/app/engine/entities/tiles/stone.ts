import { Tile } from './tile';
import { Inspectable } from '../../data-models/inspectable-model';
import { Scene } from 'three-full/sources/scenes/Scene';
import { AnimationGrowIn } from '../animations/animations-entry';
import { Gem } from './gem';

export class Stone extends Tile implements Inspectable {
	constructor(
		position: { x: number, y: number },
		scene: Scene,
		private gem = null
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

	update(dt) {
		if (this.gem instanceof Gem) {
			this.gem.update(dt);
		}
		super.update(dt);
	}

	setGem(gem: Gem): Stone {
		if (this.gem instanceof Gem && this.gem !== gem) {
			this.gem.removeFromScene();
		}
		this.gem = gem;
		return this;
	}

	getGem(): Gem {
		return this.gem;
	}

	isAvailable(): boolean {
		return !!this.gem;
	}
}
