import { ITile } from '../../data-models/tile-model';
import { GameObject } from '../game-object';
import { Scene } from 'three-full/sources/scenes/Scene';
import { Inspectable } from '../../data-models/inspectable-model';
import { IAbility } from '../../data-models/ability-model';
import { IRenderParams } from '../../data-models/renderable';

export class Tile extends GameObject implements ITile, Inspectable {
	position: { x: number; y: number };
	abilities: IAbility[] = [];
	towerTypeId: string;
	nameLong: string;
	toolTip: string;
	imgUrl: string = null;
	tower = null;

	constructor(
		position: { x: number, y: number },
		scene: Scene,
		assetNames: {
			normal: string,
			hovered: string,
		},
		renderParams: IRenderParams = {
			receiveShadow: false,
			castShadow: true,
		}
	) {
		super({
			position,
			assetNames,
			renderState: {
				model: null,
				scene,
				scale: { x: 1, y: 1, z: 1 },
				offset: { x: 0, y: 0, z: 0 },
				rotation: { x: 0, y: 0, z: 0 },
				opacity: 1
			},
			renderParams
		});
		this.towerTypeId = 'Tile';
		this.nameLong = 'Tile';
		this.toolTip = 'If you can see this, the appropriate tooltip is missing.';
	}

	removeAbility(ability: IAbility): void {
		try {
			const index = this.abilities.indexOf(ability);
			if (index !== -1) {
				this.abilities.splice(index, 1);
			}
		} catch (err) {
			console.error('Failed to remove ability!', err);
		}
	}
}
