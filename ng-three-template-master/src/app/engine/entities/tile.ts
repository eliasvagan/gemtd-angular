import { ITile } from '../data-models/tile-model';
import { GameObject } from './game-object';
import { Scene } from 'three-full/sources/scenes/Scene';
import { MouseEventType } from '../enums/mouse-events';
import { GameManager } from './game-manager';

export enum TileType {
	FREE,
	STONE,
	CHECKPOINT,
	GEM_PLACING,
	GEM,
	TOWER
}

const tileTypeModels: {[key in TileType]: { normal: string, hovered: string }} = {
	[TileType.FREE]: {
		normal: 'TILE_FREE_0',
		hovered: 'TILE_FREE_1',
	},
	[TileType.FREE]: {
		normal: 'TILE_FREE_0',
		hovered: 'TILE_FREE_1',
	},
	[TileType.STONE]: {
		normal: 'TILE_STONE_1',
		hovered: 'TILE_STONE_1',
	},
	[TileType.CHECKPOINT]: {
		normal: 'SIGN',
		hovered: 'SIGN',
	},
	[TileType.GEM_PLACING]: {
		normal: 'GEM_D1',
		hovered: 'GEM_D2',
	},
	[TileType.GEM]: {
		normal: 'TILE_FREE_0',
		hovered: 'TILE_FREE_1',
	},
	[TileType.TOWER]: {
		normal: 'TILE_FREE_0',
		hovered: 'TILE_FREE_1',
	},
};

export class Tile extends GameObject implements ITile {
	position: { x: number; y: number };
	tileType: TileType;

	constructor(
		position: { x: number, y: number },
		tileType: TileType,
		scene: Scene,
	) {
		super({
			position,
			assetNames: tileTypeModels[tileType],
			renderState: {
				model: null,
				scene,
				scale: { x: 1, y: 1, z: 1 },
				offset: { x: 0, y: 0, z: 0 },
				rotation: { x: 0, y: 0, z: 0 },
			},
			renderParams: {
				receiveShadow: false,
				castShadow: true,
			}
		});
		this.tileType = tileType;
	}

	update(dt) {
		super.update(dt);
	}

	handleClick(): void {
		GameManager.ACTIVE_SESSION.handleTileClick(this);
	}

	handleMouseEvent(evt: MouseEvent, type: MouseEventType): void {
		super.handleMouseEvent(evt, type);
		switch (type) {
			case MouseEventType.Move: {  // TODO: Fix hovering

				break;
			}
			case MouseEventType.Click: {
				this.handleClick();
				break;
			}
			case MouseEventType.LeftButtonDown: {

				break;
			}
			case MouseEventType.LeftButtonUp: {

				break;
			}
			case MouseEventType.RightButtonDown: {

				break;
			}
			case MouseEventType.RightButtonUp: {

				break;
			}
		}
	}
}
