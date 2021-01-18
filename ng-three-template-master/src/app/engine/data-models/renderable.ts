import { IHasPosition } from './has-position';
import * as THREE from 'three-full';

export interface IRenderState {
	model: THREE.Model3D;
	assetTransform?: {
		scale: { x: number; y: number; z: number };
		offset: { x: number; y: number; z: number };
		rotation: { x: number; y: number; z: number }
	};
	scene: THREE.Scene;
	scale: { x: number, y: number, z: number };
	offset: { x: number, y: number, z: number };
	rotation: { x: number, y: number, z: number };
	isInvisible?: boolean;
}

export interface IRenderParams {
	castShadow: boolean;
	receiveShadow: boolean;
}

export interface IRenderable extends IHasPosition {
	assetNames: {
		normal: string | null,
		hovered: string | null,
	};
	renderState: IRenderState;
	renderParams: IRenderParams;
}
