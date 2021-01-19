import { GameObject } from '../game-object';
import {AnimationSpin} from '../animations/animation';

export interface HoverEffectType {
	assetName: string;
	opacity: number;
	rotationSpeed: number;
	color: string;
}

export const HoverEffectTypes: { [key: string]: HoverEffectType} = {
	ARROW: {
		assetName: 'HOVER_EFFECT_ARROW',
		opacity: 0.8,
		rotationSpeed: 0.001,
		color: '#0fb500',
	},
	HEXAGON: {
		assetName: 'HOVER_EFFECT_HEX',
		opacity: 0.3,
		rotationSpeed: 0.001,
		color: '#73a9c1',
	},
	CYLINDER: {
		assetName: 'HOVER_EFFECT_CYLINDER',
		opacity: 0.4,
		rotationSpeed: 0,
		color: '#ffd3ac',
	},
};

export class HoverEffect extends GameObject {
	hoverEffectType: HoverEffectType;

	constructor(
		position: { x: number, y: number },
		scene,
		effectType: HoverEffectType = HoverEffectTypes.ARROW
	) {
		super({
			position,
			assetNames: {
				normal: effectType.assetName,
				hovered: effectType.assetName
			},
			renderState: {
				model: null,
				scene,
				scale: {x: 1, y: 1, z: 1},
				offset: {x: 0, y: 0, z: 0},
				rotation: {x: 0, y: 0, z: 0},
				opacity: effectType.opacity
			},
			renderParams: {
				receiveShadow: true,
				castShadow: false,
			}
		});
		this.hoverEffectType = effectType;
		this.animation = new AnimationSpin(0, 1, 0);
	}
}
