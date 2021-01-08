import * as THREE from 'three-full';

export interface IAssets {
	[assetName: string]: {
		mtl: string,
		obj: string,
		transform: {
			scale: { x: number, y: number, z: number },
			offset: { x: number, y: number, z: number },
			rotation: { x: number, y: number, z: number },
		},
	};
}

export interface IAssetsLoaded extends IAssets {
	[assetName: string]: {
		mtl: string,
		obj: string,
		transform: {
			scale: { x: number, y: number, z: number },
			offset: { x: number, y: number, z: number },
			rotation: { x: number, y: number, z: number },
		},
		model: THREE.Model3D
	};
}

export const Assets: IAssets = {
	BED: {
		mtl: 'bed.mtl',
		obj: 'bed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BED_FLOOR: {
		mtl: 'bed_floor.mtl',
		obj: 'bed_floor.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_CENTER_STONE: {
		mtl: 'bridge_center_stone.mtl',
		obj: 'bridge_center_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_CENTER_STONEROUND: {
		mtl: 'bridge_center_stoneRound.mtl',
		obj: 'bridge_center_stoneRound.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_CENTER_WOOD: {
		mtl: 'bridge_center_wood.mtl',
		obj: 'bridge_center_wood.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_CENTER_WOODROUND: {
		mtl: 'bridge_center_woodRound.mtl',
		obj: 'bridge_center_woodRound.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_SIDE_STONE: {
		mtl: 'bridge_side_stone.mtl',
		obj: 'bridge_side_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_SIDE_STONEROUND: {
		mtl: 'bridge_side_stoneRound.mtl',
		obj: 'bridge_side_stoneRound.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_SIDE_WOOD: {
		mtl: 'bridge_side_wood.mtl',
		obj: 'bridge_side_wood.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_SIDE_WOODROUND: {
		mtl: 'bridge_side_woodRound.mtl',
		obj: 'bridge_side_woodRound.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_STONE: {
		mtl: 'bridge_stone.mtl',
		obj: 'bridge_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_STONENARROW: {
		mtl: 'bridge_stoneNarrow.mtl',
		obj: 'bridge_stoneNarrow.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_STONEROUND: {
		mtl: 'bridge_stoneRound.mtl',
		obj: 'bridge_stoneRound.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_STONEROUNDNARROW: {
		mtl: 'bridge_stoneRoundNarrow.mtl',
		obj: 'bridge_stoneRoundNarrow.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_WOOD: {
		mtl: 'bridge_wood.mtl',
		obj: 'bridge_wood.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_WOODNARROW: {
		mtl: 'bridge_woodNarrow.mtl',
		obj: 'bridge_woodNarrow.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_WOODROUND: {
		mtl: 'bridge_woodRound.mtl',
		obj: 'bridge_woodRound.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_WOODROUNDNARROW: {
		mtl: 'bridge_woodRoundNarrow.mtl',
		obj: 'bridge_woodRoundNarrow.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CACTUS_SHORT: {
		mtl: 'cactus_short.mtl',
		obj: 'cactus_short.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CACTUS_TALL: {
		mtl: 'cactus_tall.mtl',
		obj: 'cactus_tall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CAMPFIRE_BRICKS: {
		mtl: 'campfire_bricks.mtl',
		obj: 'campfire_bricks.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CAMPFIRE_LOGS: {
		mtl: 'campfire_logs.mtl',
		obj: 'campfire_logs.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CAMPFIRE_PLANKS: {
		mtl: 'campfire_planks.mtl',
		obj: 'campfire_planks.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CAMPFIRE_STONES: {
		mtl: 'campfire_stones.mtl',
		obj: 'campfire_stones.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CANOE: {
		mtl: 'canoe.mtl',
		obj: 'canoe.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CANOE_PADDLE: {
		mtl: 'canoe_paddle.mtl',
		obj: 'canoe_paddle.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKCAVE_ROCK: {
		mtl: 'cliff_blockCave_rock.mtl',
		obj: 'cliff_blockCave_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKCAVE_STONE: {
		mtl: 'cliff_blockCave_stone.mtl',
		obj: 'cliff_blockCave_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKDIAGONAL_ROCK: {
		mtl: 'cliff_blockDiagonal_rock.mtl',
		obj: 'cliff_blockDiagonal_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKDIAGONAL_STONE: {
		mtl: 'cliff_blockDiagonal_stone.mtl',
		obj: 'cliff_blockDiagonal_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKHALF_ROCK: {
		mtl: 'cliff_blockHalf_rock.mtl',
		obj: 'cliff_blockHalf_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKHALF_STONE: {
		mtl: 'cliff_blockHalf_stone.mtl',
		obj: 'cliff_blockHalf_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKQUARTER_ROCK: {
		mtl: 'cliff_blockQuarter_rock.mtl',
		obj: 'cliff_blockQuarter_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKQUARTER_STONE: {
		mtl: 'cliff_blockQuarter_stone.mtl',
		obj: 'cliff_blockQuarter_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKSLOPEHALFWALLS_ROCK: {
		mtl: 'cliff_blockSlopeHalfWalls_rock.mtl',
		obj: 'cliff_blockSlopeHalfWalls_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKSLOPEHALFWALLS_STONE: {
		mtl: 'cliff_blockSlopeHalfWalls_stone.mtl',
		obj: 'cliff_blockSlopeHalfWalls_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKSLOPEWALLS_ROCK: {
		mtl: 'cliff_blockSlopeWalls_rock.mtl',
		obj: 'cliff_blockSlopeWalls_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKSLOPEWALLS_STONE: {
		mtl: 'cliff_blockSlopeWalls_stone.mtl',
		obj: 'cliff_blockSlopeWalls_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKSLOPE_ROCK: {
		mtl: 'cliff_blockSlope_rock.mtl',
		obj: 'cliff_blockSlope_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKSLOPE_STONE: {
		mtl: 'cliff_blockSlope_stone.mtl',
		obj: 'cliff_blockSlope_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCK_ROCK: {
		mtl: 'cliff_block_rock.mtl',
		obj: 'cliff_block_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCK_STONE: {
		mtl: 'cliff_block_stone.mtl',
		obj: 'cliff_block_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CAVE_ROCK: {
		mtl: 'cliff_cave_rock.mtl',
		obj: 'cliff_cave_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CAVE_STONE: {
		mtl: 'cliff_cave_stone.mtl',
		obj: 'cliff_cave_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERINNERLARGE_ROCK: {
		mtl: 'cliff_cornerInnerLarge_rock.mtl',
		obj: 'cliff_cornerInnerLarge_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERINNERLARGE_STONE: {
		mtl: 'cliff_cornerInnerLarge_stone.mtl',
		obj: 'cliff_cornerInnerLarge_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERINNERTOP_ROCK: {
		mtl: 'cliff_cornerInnerTop_rock.mtl',
		obj: 'cliff_cornerInnerTop_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERINNERTOP_STONE: {
		mtl: 'cliff_cornerInnerTop_stone.mtl',
		obj: 'cliff_cornerInnerTop_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERINNER_ROCK: {
		mtl: 'cliff_cornerInner_rock.mtl',
		obj: 'cliff_cornerInner_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERINNER_STONE: {
		mtl: 'cliff_cornerInner_stone.mtl',
		obj: 'cliff_cornerInner_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERLARGE_ROCK: {
		mtl: 'cliff_cornerLarge_rock.mtl',
		obj: 'cliff_cornerLarge_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERLARGE_STONE: {
		mtl: 'cliff_cornerLarge_stone.mtl',
		obj: 'cliff_cornerLarge_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERTOP_ROCK: {
		mtl: 'cliff_cornerTop_rock.mtl',
		obj: 'cliff_cornerTop_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERTOP_STONE: {
		mtl: 'cliff_cornerTop_stone.mtl',
		obj: 'cliff_cornerTop_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNER_ROCK: {
		mtl: 'cliff_corner_rock.mtl',
		obj: 'cliff_corner_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNER_STONE: {
		mtl: 'cliff_corner_stone.mtl',
		obj: 'cliff_corner_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_DIAGONAL_ROCK: {
		mtl: 'cliff_diagonal_rock.mtl',
		obj: 'cliff_diagonal_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_DIAGONAL_STONE: {
		mtl: 'cliff_diagonal_stone.mtl',
		obj: 'cliff_diagonal_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_HALFCORNERINNER_ROCK: {
		mtl: 'cliff_halfCornerInner_rock.mtl',
		obj: 'cliff_halfCornerInner_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_HALFCORNERINNER_STONE: {
		mtl: 'cliff_halfCornerInner_stone.mtl',
		obj: 'cliff_halfCornerInner_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_HALFCORNER_ROCK: {
		mtl: 'cliff_halfCorner_rock.mtl',
		obj: 'cliff_halfCorner_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_HALFCORNER_STONE: {
		mtl: 'cliff_halfCorner_stone.mtl',
		obj: 'cliff_halfCorner_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_HALF_ROCK: {
		mtl: 'cliff_half_rock.mtl',
		obj: 'cliff_half_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_HALF_STONE: {
		mtl: 'cliff_half_stone.mtl',
		obj: 'cliff_half_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_LARGE_ROCK: {
		mtl: 'cliff_large_rock.mtl',
		obj: 'cliff_large_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_LARGE_STONE: {
		mtl: 'cliff_large_stone.mtl',
		obj: 'cliff_large_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_ROCK: {
		mtl: 'cliff_rock.mtl',
		obj: 'cliff_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_STEPSCORNERINNER_ROCK: {
		mtl: 'cliff_stepsCornerInner_rock.mtl',
		obj: 'cliff_stepsCornerInner_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_STEPSCORNERINNER_STONE: {
		mtl: 'cliff_stepsCornerInner_stone.mtl',
		obj: 'cliff_stepsCornerInner_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_STEPSCORNER_ROCK: {
		mtl: 'cliff_stepsCorner_rock.mtl',
		obj: 'cliff_stepsCorner_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_STEPSCORNER_STONE: {
		mtl: 'cliff_stepsCorner_stone.mtl',
		obj: 'cliff_stepsCorner_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_STEPS_ROCK: {
		mtl: 'cliff_steps_rock.mtl',
		obj: 'cliff_steps_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_STEPS_STONE: {
		mtl: 'cliff_steps_stone.mtl',
		obj: 'cliff_steps_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_STONE: {
		mtl: 'cliff_stone.mtl',
		obj: 'cliff_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_TOPDIAGONAL_ROCK: {
		mtl: 'cliff_topDiagonal_rock.mtl',
		obj: 'cliff_topDiagonal_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_TOPDIAGONAL_STONE: {
		mtl: 'cliff_topDiagonal_stone.mtl',
		obj: 'cliff_topDiagonal_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_TOP_ROCK: {
		mtl: 'cliff_top_rock.mtl',
		obj: 'cliff_top_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_TOP_STONE: {
		mtl: 'cliff_top_stone.mtl',
		obj: 'cliff_top_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_WATERFALLTOP_ROCK: {
		mtl: 'cliff_waterfallTop_rock.mtl',
		obj: 'cliff_waterfallTop_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_WATERFALLTOP_STONE: {
		mtl: 'cliff_waterfallTop_stone.mtl',
		obj: 'cliff_waterfallTop_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_WATERFALL_ROCK: {
		mtl: 'cliff_waterfall_rock.mtl',
		obj: 'cliff_waterfall_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_WATERFALL_STONE: {
		mtl: 'cliff_waterfall_stone.mtl',
		obj: 'cliff_waterfall_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_BAMBOOSTAGEA: {
		mtl: 'crops_bambooStageA.mtl',
		obj: 'crops_bambooStageA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_BAMBOOSTAGEB: {
		mtl: 'crops_bambooStageB.mtl',
		obj: 'crops_bambooStageB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_CORNSTAGEA: {
		mtl: 'crops_cornStageA.mtl',
		obj: 'crops_cornStageA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_CORNSTAGEB: {
		mtl: 'crops_cornStageB.mtl',
		obj: 'crops_cornStageB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_CORNSTAGEC: {
		mtl: 'crops_cornStageC.mtl',
		obj: 'crops_cornStageC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_CORNSTAGED: {
		mtl: 'crops_cornStageD.mtl',
		obj: 'crops_cornStageD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_DIRTDOUBLEROW: {
		mtl: 'crops_dirtDoubleRow.mtl',
		obj: 'crops_dirtDoubleRow.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_DIRTDOUBLEROWCORNER: {
		mtl: 'crops_dirtDoubleRowCorner.mtl',
		obj: 'crops_dirtDoubleRowCorner.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_DIRTDOUBLEROWEND: {
		mtl: 'crops_dirtDoubleRowEnd.mtl',
		obj: 'crops_dirtDoubleRowEnd.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_DIRTROW: {
		mtl: 'crops_dirtRow.mtl',
		obj: 'crops_dirtRow.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_DIRTROWCORNER: {
		mtl: 'crops_dirtRowCorner.mtl',
		obj: 'crops_dirtRowCorner.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_DIRTROWEND: {
		mtl: 'crops_dirtRowEnd.mtl',
		obj: 'crops_dirtRowEnd.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_DIRTSINGLE: {
		mtl: 'crops_dirtSingle.mtl',
		obj: 'crops_dirtSingle.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_LEAFSSTAGEA: {
		mtl: 'crops_leafsStageA.mtl',
		obj: 'crops_leafsStageA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_LEAFSSTAGEB: {
		mtl: 'crops_leafsStageB.mtl',
		obj: 'crops_leafsStageB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_WHEATSTAGEA: {
		mtl: 'crops_wheatStageA.mtl',
		obj: 'crops_wheatStageA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_WHEATSTAGEB: {
		mtl: 'crops_wheatStageB.mtl',
		obj: 'crops_wheatStageB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROP_CARROT: {
		mtl: 'crop_carrot.mtl',
		obj: 'crop_carrot.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROP_MELON: {
		mtl: 'crop_melon.mtl',
		obj: 'crop_melon.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROP_PUMPKIN: {
		mtl: 'crop_pumpkin.mtl',
		obj: 'crop_pumpkin.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROP_TURNIP: {
		mtl: 'crop_turnip.mtl',
		obj: 'crop_turnip.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_BEND: {
		mtl: 'fence_bend.mtl',
		obj: 'fence_bend.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_BENDCENTER: {
		mtl: 'fence_bendCenter.mtl',
		obj: 'fence_bendCenter.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_CORNER: {
		mtl: 'fence_corner.mtl',
		obj: 'fence_corner.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_GATE: {
		mtl: 'fence_gate.mtl',
		obj: 'fence_gate.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_PLANKS: {
		mtl: 'fence_planks.mtl',
		obj: 'fence_planks.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_PLANKSDOUBLE: {
		mtl: 'fence_planksDouble.mtl',
		obj: 'fence_planksDouble.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_SIMPLE: {
		mtl: 'fence_simple.mtl',
		obj: 'fence_simple.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_SIMPLECENTER: {
		mtl: 'fence_simpleCenter.mtl',
		obj: 'fence_simpleCenter.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_SIMPLEDIAGONAL: {
		mtl: 'fence_simpleDiagonal.mtl',
		obj: 'fence_simpleDiagonal.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_SIMPLEDIAGONALCENTER: {
		mtl: 'fence_simpleDiagonalCenter.mtl',
		obj: 'fence_simpleDiagonalCenter.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_SIMPLEHIGH: {
		mtl: 'fence_simpleHigh.mtl',
		obj: 'fence_simpleHigh.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_SIMPLELOW: {
		mtl: 'fence_simpleLow.mtl',
		obj: 'fence_simpleLow.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_PURPLEA: {
		mtl: 'flower_purpleA.mtl',
		obj: 'flower_purpleA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_PURPLEB: {
		mtl: 'flower_purpleB.mtl',
		obj: 'flower_purpleB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_PURPLEC: {
		mtl: 'flower_purpleC.mtl',
		obj: 'flower_purpleC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_REDA: {
		mtl: 'flower_redA.mtl',
		obj: 'flower_redA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_REDB: {
		mtl: 'flower_redB.mtl',
		obj: 'flower_redB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_REDC: {
		mtl: 'flower_redC.mtl',
		obj: 'flower_redC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_YELLOWA: {
		mtl: 'flower_yellowA.mtl',
		obj: 'flower_yellowA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_YELLOWB: {
		mtl: 'flower_yellowB.mtl',
		obj: 'flower_yellowB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_YELLOWC: {
		mtl: 'flower_yellowC.mtl',
		obj: 'flower_yellowC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GRASS: {
		mtl: 'grass.mtl',
		obj: 'grass.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GRASS_LARGE: {
		mtl: 'grass_large.mtl',
		obj: 'grass_large.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GRASS_LEAFS: {
		mtl: 'grass_leafs.mtl',
		obj: 'grass_leafs.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GRASS_LEAFSLARGE: {
		mtl: 'grass_leafsLarge.mtl',
		obj: 'grass_leafsLarge.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_GRASS: {
		mtl: 'ground_grass.mtl',
		obj: 'ground_grass.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHBEND: {
		mtl: 'ground_pathBend.mtl',
		obj: 'ground_pathBend.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHBENDBANK: {
		mtl: 'ground_pathBendBank.mtl',
		obj: 'ground_pathBendBank.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHCORNER: {
		mtl: 'ground_pathCorner.mtl',
		obj: 'ground_pathCorner.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHCORNERSMALL: {
		mtl: 'ground_pathCornerSmall.mtl',
		obj: 'ground_pathCornerSmall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHCROSS: {
		mtl: 'ground_pathCross.mtl',
		obj: 'ground_pathCross.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHEND: {
		mtl: 'ground_pathEnd.mtl',
		obj: 'ground_pathEnd.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHENDCLOSED: {
		mtl: 'ground_pathEndClosed.mtl',
		obj: 'ground_pathEndClosed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHOPEN: {
		mtl: 'ground_pathOpen.mtl',
		obj: 'ground_pathOpen.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHROCKS: {
		mtl: 'ground_pathRocks.mtl',
		obj: 'ground_pathRocks.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHSIDE: {
		mtl: 'ground_pathSide.mtl',
		obj: 'ground_pathSide.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHSIDEOPEN: {
		mtl: 'ground_pathSideOpen.mtl',
		obj: 'ground_pathSideOpen.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHSPLIT: {
		mtl: 'ground_pathSplit.mtl',
		obj: 'ground_pathSplit.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHSTRAIGHT: {
		mtl: 'ground_pathStraight.mtl',
		obj: 'ground_pathStraight.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHTILE: {
		mtl: 'ground_pathTile.mtl',
		obj: 'ground_pathTile.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERBEND: {
		mtl: 'ground_riverBend.mtl',
		obj: 'ground_riverBend.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERBENDBANK: {
		mtl: 'ground_riverBendBank.mtl',
		obj: 'ground_riverBendBank.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERCORNER: {
		mtl: 'ground_riverCorner.mtl',
		obj: 'ground_riverCorner.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERCORNERSMALL: {
		mtl: 'ground_riverCornerSmall.mtl',
		obj: 'ground_riverCornerSmall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERCROSS: {
		mtl: 'ground_riverCross.mtl',
		obj: 'ground_riverCross.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVEREND: {
		mtl: 'ground_riverEnd.mtl',
		obj: 'ground_riverEnd.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERENDCLOSED: {
		mtl: 'ground_riverEndClosed.mtl',
		obj: 'ground_riverEndClosed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVEROPEN: {
		mtl: 'ground_riverOpen.mtl',
		obj: 'ground_riverOpen.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERROCKS: {
		mtl: 'ground_riverRocks.mtl',
		obj: 'ground_riverRocks.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERSIDE: {
		mtl: 'ground_riverSide.mtl',
		obj: 'ground_riverSide.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERSIDEOPEN: {
		mtl: 'ground_riverSideOpen.mtl',
		obj: 'ground_riverSideOpen.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERSPLIT: {
		mtl: 'ground_riverSplit.mtl',
		obj: 'ground_riverSplit.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERSTRAIGHT: {
		mtl: 'ground_riverStraight.mtl',
		obj: 'ground_riverStraight.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERTILE: {
		mtl: 'ground_riverTile.mtl',
		obj: 'ground_riverTile.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	HANGING_MOSS: {
		mtl: 'hanging_moss.mtl',
		obj: 'hanging_moss.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	LILY_LARGE: {
		mtl: 'lily_large.mtl',
		obj: 'lily_large.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	LILY_SMALL: {
		mtl: 'lily_small.mtl',
		obj: 'lily_small.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	LOG: {
		mtl: 'log.mtl',
		obj: 'log.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	LOG_LARGE: {
		mtl: 'log_large.mtl',
		obj: 'log_large.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	LOG_STACK: {
		mtl: 'log_stack.mtl',
		obj: 'log_stack.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	LOG_STACKLARGE: {
		mtl: 'log_stackLarge.mtl',
		obj: 'log_stackLarge.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	MUSHROOM_RED: {
		mtl: 'mushroom_red.mtl',
		obj: 'mushroom_red.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	MUSHROOM_REDGROUP: {
		mtl: 'mushroom_redGroup.mtl',
		obj: 'mushroom_redGroup.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	MUSHROOM_REDTALL: {
		mtl: 'mushroom_redTall.mtl',
		obj: 'mushroom_redTall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	MUSHROOM_TAN: {
		mtl: 'mushroom_tan.mtl',
		obj: 'mushroom_tan.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	MUSHROOM_TANGROUP: {
		mtl: 'mushroom_tanGroup.mtl',
		obj: 'mushroom_tanGroup.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	MUSHROOM_TANTALL: {
		mtl: 'mushroom_tanTall.mtl',
		obj: 'mushroom_tanTall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PATH_STONE: {
		mtl: 'path_stone.mtl',
		obj: 'path_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PATH_STONECIRCLE: {
		mtl: 'path_stoneCircle.mtl',
		obj: 'path_stoneCircle.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PATH_STONECORNER: {
		mtl: 'path_stoneCorner.mtl',
		obj: 'path_stoneCorner.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PATH_STONEEND: {
		mtl: 'path_stoneEnd.mtl',
		obj: 'path_stoneEnd.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PATH_WOOD: {
		mtl: 'path_wood.mtl',
		obj: 'path_wood.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PATH_WOODCORNER: {
		mtl: 'path_woodCorner.mtl',
		obj: 'path_woodCorner.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PATH_WOODEND: {
		mtl: 'path_woodEnd.mtl',
		obj: 'path_woodEnd.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLANT_BUSH: {
		mtl: 'plant_bush.mtl',
		obj: 'plant_bush.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLANT_BUSHDETAILED: {
		mtl: 'plant_bushDetailed.mtl',
		obj: 'plant_bushDetailed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLANT_BUSHLARGE: {
		mtl: 'plant_bushLarge.mtl',
		obj: 'plant_bushLarge.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLANT_BUSHLARGETRIANGLE: {
		mtl: 'plant_bushLargeTriangle.mtl',
		obj: 'plant_bushLargeTriangle.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLANT_BUSHSMALL: {
		mtl: 'plant_bushSmall.mtl',
		obj: 'plant_bushSmall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLANT_BUSHTRIANGLE: {
		mtl: 'plant_bushTriangle.mtl',
		obj: 'plant_bushTriangle.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLANT_FLATSHORT: {
		mtl: 'plant_flatShort.mtl',
		obj: 'plant_flatShort.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLANT_FLATTALL: {
		mtl: 'plant_flatTall.mtl',
		obj: 'plant_flatTall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLATFORM_BEACH: {
		mtl: 'platform_beach.mtl',
		obj: 'platform_beach.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLATFORM_GRASS: {
		mtl: 'platform_grass.mtl',
		obj: 'platform_grass.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLATFORM_STONE: {
		mtl: 'platform_stone.mtl',
		obj: 'platform_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	POT_LARGE: {
		mtl: 'pot_large.mtl',
		obj: 'pot_large.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	POT_SMALL: {
		mtl: 'pot_small.mtl',
		obj: 'pot_small.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_LARGEA: {
		mtl: 'rock_largeA.mtl',
		obj: 'rock_largeA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_LARGEB: {
		mtl: 'rock_largeB.mtl',
		obj: 'rock_largeB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_LARGEC: {
		mtl: 'rock_largeC.mtl',
		obj: 'rock_largeC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_LARGED: {
		mtl: 'rock_largeD.mtl',
		obj: 'rock_largeD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_LARGEE: {
		mtl: 'rock_largeE.mtl',
		obj: 'rock_largeE.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_LARGEF: {
		mtl: 'rock_largeF.mtl',
		obj: 'rock_largeF.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLA: {
		mtl: 'rock_smallA.mtl',
		obj: 'rock_smallA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLB: {
		mtl: 'rock_smallB.mtl',
		obj: 'rock_smallB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLC: {
		mtl: 'rock_smallC.mtl',
		obj: 'rock_smallC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLD: {
		mtl: 'rock_smallD.mtl',
		obj: 'rock_smallD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLE: {
		mtl: 'rock_smallE.mtl',
		obj: 'rock_smallE.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLF: {
		mtl: 'rock_smallF.mtl',
		obj: 'rock_smallF.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLFLATA: {
		mtl: 'rock_smallFlatA.mtl',
		obj: 'rock_smallFlatA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLFLATB: {
		mtl: 'rock_smallFlatB.mtl',
		obj: 'rock_smallFlatB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLFLATC: {
		mtl: 'rock_smallFlatC.mtl',
		obj: 'rock_smallFlatC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLG: {
		mtl: 'rock_smallG.mtl',
		obj: 'rock_smallG.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLH: {
		mtl: 'rock_smallH.mtl',
		obj: 'rock_smallH.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLI: {
		mtl: 'rock_smallI.mtl',
		obj: 'rock_smallI.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLTOPA: {
		mtl: 'rock_smallTopA.mtl',
		obj: 'rock_smallTopA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLTOPB: {
		mtl: 'rock_smallTopB.mtl',
		obj: 'rock_smallTopB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLA: {
		mtl: 'rock_tallA.mtl',
		obj: 'rock_tallA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLB: {
		mtl: 'rock_tallB.mtl',
		obj: 'rock_tallB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLC: {
		mtl: 'rock_tallC.mtl',
		obj: 'rock_tallC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLD: {
		mtl: 'rock_tallD.mtl',
		obj: 'rock_tallD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLE: {
		mtl: 'rock_tallE.mtl',
		obj: 'rock_tallE.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLF: {
		mtl: 'rock_tallF.mtl',
		obj: 'rock_tallF.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLG: {
		mtl: 'rock_tallG.mtl',
		obj: 'rock_tallG.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLH: {
		mtl: 'rock_tallH.mtl',
		obj: 'rock_tallH.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLI: {
		mtl: 'rock_tallI.mtl',
		obj: 'rock_tallI.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLJ: {
		mtl: 'rock_tallJ.mtl',
		obj: 'rock_tallJ.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	SIGN: {
		mtl: 'sign.mtl',
		obj: 'sign.obj',
		transform: {
			scale: { x: 2.5, y: 2.5, z: 2.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STATUE_BLOCK: {
		mtl: 'statue_block.mtl',
		obj: 'statue_block.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STATUE_COLUMN: {
		mtl: 'statue_column.mtl',
		obj: 'statue_column.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STATUE_COLUMNDAMAGED: {
		mtl: 'statue_columnDamaged.mtl',
		obj: 'statue_columnDamaged.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STATUE_HEAD: {
		mtl: 'statue_head.mtl',
		obj: 'statue_head.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STATUE_OBELISK: {
		mtl: 'statue_obelisk.mtl',
		obj: 'statue_obelisk.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STATUE_RING: {
		mtl: 'statue_ring.mtl',
		obj: 'statue_ring.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_LARGEA: {
		mtl: 'stone_largeA.mtl',
		obj: 'stone_largeA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_LARGEB: {
		mtl: 'stone_largeB.mtl',
		obj: 'stone_largeB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_LARGEC: {
		mtl: 'stone_largeC.mtl',
		obj: 'stone_largeC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_LARGED: {
		mtl: 'stone_largeD.mtl',
		obj: 'stone_largeD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_LARGEE: {
		mtl: 'stone_largeE.mtl',
		obj: 'stone_largeE.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_LARGEF: {
		mtl: 'stone_largeF.mtl',
		obj: 'stone_largeF.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLA: {
		mtl: 'stone_smallA.mtl',
		obj: 'stone_smallA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLB: {
		mtl: 'stone_smallB.mtl',
		obj: 'stone_smallB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLC: {
		mtl: 'stone_smallC.mtl',
		obj: 'stone_smallC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLD: {
		mtl: 'stone_smallD.mtl',
		obj: 'stone_smallD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLE: {
		mtl: 'stone_smallE.mtl',
		obj: 'stone_smallE.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLF: {
		mtl: 'stone_smallF.mtl',
		obj: 'stone_smallF.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLFLATA: {
		mtl: 'stone_smallFlatA.mtl',
		obj: 'stone_smallFlatA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLFLATB: {
		mtl: 'stone_smallFlatB.mtl',
		obj: 'stone_smallFlatB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLFLATC: {
		mtl: 'stone_smallFlatC.mtl',
		obj: 'stone_smallFlatC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLG: {
		mtl: 'stone_smallG.mtl',
		obj: 'stone_smallG.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLH: {
		mtl: 'stone_smallH.mtl',
		obj: 'stone_smallH.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLI: {
		mtl: 'stone_smallI.mtl',
		obj: 'stone_smallI.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLTOPA: {
		mtl: 'stone_smallTopA.mtl',
		obj: 'stone_smallTopA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLTOPB: {
		mtl: 'stone_smallTopB.mtl',
		obj: 'stone_smallTopB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLA: {
		mtl: 'stone_tallA.mtl',
		obj: 'stone_tallA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLB: {
		mtl: 'stone_tallB.mtl',
		obj: 'stone_tallB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLC: {
		mtl: 'stone_tallC.mtl',
		obj: 'stone_tallC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLD: {
		mtl: 'stone_tallD.mtl',
		obj: 'stone_tallD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLE: {
		mtl: 'stone_tallE.mtl',
		obj: 'stone_tallE.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLF: {
		mtl: 'stone_tallF.mtl',
		obj: 'stone_tallF.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLG: {
		mtl: 'stone_tallG.mtl',
		obj: 'stone_tallG.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLH: {
		mtl: 'stone_tallH.mtl',
		obj: 'stone_tallH.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLI: {
		mtl: 'stone_tallI.mtl',
		obj: 'stone_tallI.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLJ: {
		mtl: 'stone_tallJ.mtl',
		obj: 'stone_tallJ.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STUMP_OLD: {
		mtl: 'stump_old.mtl',
		obj: 'stump_old.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STUMP_OLDTALL: {
		mtl: 'stump_oldTall.mtl',
		obj: 'stump_oldTall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STUMP_ROUND: {
		mtl: 'stump_round.mtl',
		obj: 'stump_round.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STUMP_ROUNDDETAILED: {
		mtl: 'stump_roundDetailed.mtl',
		obj: 'stump_roundDetailed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STUMP_SQUARE: {
		mtl: 'stump_square.mtl',
		obj: 'stump_square.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STUMP_SQUAREDETAILED: {
		mtl: 'stump_squareDetailed.mtl',
		obj: 'stump_squareDetailed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STUMP_SQUAREDETAILEDWIDE: {
		mtl: 'stump_squareDetailedWide.mtl',
		obj: 'stump_squareDetailedWide.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TENT_DETAILEDCLOSED: {
		mtl: 'tent_detailedClosed.mtl',
		obj: 'tent_detailedClosed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TENT_DETAILEDOPEN: {
		mtl: 'tent_detailedOpen.mtl',
		obj: 'tent_detailedOpen.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TENT_SMALLCLOSED: {
		mtl: 'tent_smallClosed.mtl',
		obj: 'tent_smallClosed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TENT_SMALLOPEN: {
		mtl: 'tent_smallOpen.mtl',
		obj: 'tent_smallOpen.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_BLOCKS: {
		mtl: 'tree_blocks.mtl',
		obj: 'tree_blocks.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_BLOCKS_DARK: {
		mtl: 'tree_blocks_dark.mtl',
		obj: 'tree_blocks_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_BLOCKS_FALL: {
		mtl: 'tree_blocks_fall.mtl',
		obj: 'tree_blocks_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_CONE: {
		mtl: 'tree_cone.mtl',
		obj: 'tree_cone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_CONE_DARK: {
		mtl: 'tree_cone_dark.mtl',
		obj: 'tree_cone_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_CONE_FALL: {
		mtl: 'tree_cone_fall.mtl',
		obj: 'tree_cone_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_DEFAULT: {
		mtl: 'tree_default.mtl',
		obj: 'tree_default.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_DEFAULT_DARK: {
		mtl: 'tree_default_dark.mtl',
		obj: 'tree_default_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_DEFAULT_FALL: {
		mtl: 'tree_default_fall.mtl',
		obj: 'tree_default_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_DETAILED: {
		mtl: 'tree_detailed.mtl',
		obj: 'tree_detailed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_DETAILED_DARK: {
		mtl: 'tree_detailed_dark.mtl',
		obj: 'tree_detailed_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_DETAILED_FALL: {
		mtl: 'tree_detailed_fall.mtl',
		obj: 'tree_detailed_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_FAT: {
		mtl: 'tree_fat.mtl',
		obj: 'tree_fat.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_FAT_DARKH: {
		mtl: 'tree_fat_darkh.mtl',
		obj: 'tree_fat_darkh.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_FAT_FALL: {
		mtl: 'tree_fat_fall.mtl',
		obj: 'tree_fat_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_OAK: {
		mtl: 'tree_oak.mtl',
		obj: 'tree_oak.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_OAK_DARK: {
		mtl: 'tree_oak_dark.mtl',
		obj: 'tree_oak_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_OAK_FALL: {
		mtl: 'tree_oak_fall.mtl',
		obj: 'tree_oak_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PALM: {
		mtl: 'tree_palm.mtl',
		obj: 'tree_palm.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PALMBEND: {
		mtl: 'tree_palmBend.mtl',
		obj: 'tree_palmBend.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PALMDETAILEDSHORT: {
		mtl: 'tree_palmDetailedShort.mtl',
		obj: 'tree_palmDetailedShort.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PALMDETAILEDTALL: {
		mtl: 'tree_palmDetailedTall.mtl',
		obj: 'tree_palmDetailedTall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PALMSHORT: {
		mtl: 'tree_palmShort.mtl',
		obj: 'tree_palmShort.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PALMTALL: {
		mtl: 'tree_palmTall.mtl',
		obj: 'tree_palmTall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEDEFAULTA: {
		mtl: 'tree_pineDefaultA.mtl',
		obj: 'tree_pineDefaultA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEDEFAULTB: {
		mtl: 'tree_pineDefaultB.mtl',
		obj: 'tree_pineDefaultB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEGROUNDA: {
		mtl: 'tree_pineGroundA.mtl',
		obj: 'tree_pineGroundA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEGROUNDB: {
		mtl: 'tree_pineGroundB.mtl',
		obj: 'tree_pineGroundB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEROUNDA: {
		mtl: 'tree_pineRoundA.mtl',
		obj: 'tree_pineRoundA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEROUNDB: {
		mtl: 'tree_pineRoundB.mtl',
		obj: 'tree_pineRoundB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEROUNDC: {
		mtl: 'tree_pineRoundC.mtl',
		obj: 'tree_pineRoundC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEROUNDD: {
		mtl: 'tree_pineRoundD.mtl',
		obj: 'tree_pineRoundD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEROUNDE: {
		mtl: 'tree_pineRoundE.mtl',
		obj: 'tree_pineRoundE.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEROUNDF: {
		mtl: 'tree_pineRoundF.mtl',
		obj: 'tree_pineRoundF.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINESMALLA: {
		mtl: 'tree_pineSmallA.mtl',
		obj: 'tree_pineSmallA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINESMALLB: {
		mtl: 'tree_pineSmallB.mtl',
		obj: 'tree_pineSmallB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINESMALLC: {
		mtl: 'tree_pineSmallC.mtl',
		obj: 'tree_pineSmallC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINESMALLD: {
		mtl: 'tree_pineSmallD.mtl',
		obj: 'tree_pineSmallD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINETALLA: {
		mtl: 'tree_pineTallA.mtl',
		obj: 'tree_pineTallA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINETALLA_DETAILED: {
		mtl: 'tree_pineTallA_detailed.mtl',
		obj: 'tree_pineTallA_detailed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINETALLB: {
		mtl: 'tree_pineTallB.mtl',
		obj: 'tree_pineTallB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINETALLB_DETAILED: {
		mtl: 'tree_pineTallB_detailed.mtl',
		obj: 'tree_pineTallB_detailed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINETALLC: {
		mtl: 'tree_pineTallC.mtl',
		obj: 'tree_pineTallC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINETALLC_DETAILED: {
		mtl: 'tree_pineTallC_detailed.mtl',
		obj: 'tree_pineTallC_detailed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINETALLD: {
		mtl: 'tree_pineTallD.mtl',
		obj: 'tree_pineTallD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINETALLD_DETAILED: {
		mtl: 'tree_pineTallD_detailed.mtl',
		obj: 'tree_pineTallD_detailed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PLATEAU: {
		mtl: 'tree_plateau.mtl',
		obj: 'tree_plateau.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PLATEAU_DARK: {
		mtl: 'tree_plateau_dark.mtl',
		obj: 'tree_plateau_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PLATEAU_FALL: {
		mtl: 'tree_plateau_fall.mtl',
		obj: 'tree_plateau_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_SIMPLE: {
		mtl: 'tree_simple.mtl',
		obj: 'tree_simple.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_SIMPLE_DARK: {
		mtl: 'tree_simple_dark.mtl',
		obj: 'tree_simple_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_SIMPLE_FALL: {
		mtl: 'tree_simple_fall.mtl',
		obj: 'tree_simple_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_SMALL: {
		mtl: 'tree_small.mtl',
		obj: 'tree_small.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_SMALL_DARK: {
		mtl: 'tree_small_dark.mtl',
		obj: 'tree_small_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_SMALL_FALL: {
		mtl: 'tree_small_fall.mtl',
		obj: 'tree_small_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_TALL: {
		mtl: 'tree_tall.mtl',
		obj: 'tree_tall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_TALL_DARK: {
		mtl: 'tree_tall_dark.mtl',
		obj: 'tree_tall_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_TALL_FALL: {
		mtl: 'tree_tall_fall.mtl',
		obj: 'tree_tall_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_THIN: {
		mtl: 'tree_thin.mtl',
		obj: 'tree_thin.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_THIN_DARK: {
		mtl: 'tree_thin_dark.mtl',
		obj: 'tree_thin_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_THIN_FALL: {
		mtl: 'tree_thin_fall.mtl',
		obj: 'tree_thin_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TILE_FREE: {
		mtl: 'platform_free.mtl',
		obj: 'platform_free.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TILE_FREE_HOVER: {
		mtl: 'platform_free_hover.mtl',
		obj: 'platform_free_hover.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CHECKPOINT: {
		mtl: 'checkpoint.mtl',
		obj: 'checkpoint.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ARENA_TEMPLE_A: {
		mtl: 'checkpoint.mtl',
		obj: 'checkpoint.obj',
		transform: {
			scale: { x: 0, y: 0.5, z: 0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	}
};
