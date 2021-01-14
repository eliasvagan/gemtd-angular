import * as THREE from 'three-full';

export interface IAssets {
	[assetName: string]: {
		path: string,
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
		path: string,
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
		path: 'downloaded/',
		mtl: 'bed.mtl',
		obj: 'bed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BED_FLOOR: {
		path: 'downloaded/',
		mtl: 'bed_floor.mtl',
		obj: 'bed_floor.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_CENTER_STONE: {
		path: 'downloaded/',
		mtl: 'bridge_center_stone.mtl',
		obj: 'bridge_center_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_CENTER_STONEROUND: {
		path: 'downloaded/',
		mtl: 'bridge_center_stoneRound.mtl',
		obj: 'bridge_center_stoneRound.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_CENTER_WOOD: {
		path: 'downloaded/',
		mtl: 'bridge_center_wood.mtl',
		obj: 'bridge_center_wood.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_CENTER_WOODROUND: {
		path: 'downloaded/',
		mtl: 'bridge_center_woodRound.mtl',
		obj: 'bridge_center_woodRound.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_SIDE_STONE: {
		path: 'downloaded/',
		mtl: 'bridge_side_stone.mtl',
		obj: 'bridge_side_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_SIDE_STONEROUND: {
		path: 'downloaded/',
		mtl: 'bridge_side_stoneRound.mtl',
		obj: 'bridge_side_stoneRound.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_SIDE_WOOD: {
		path: 'downloaded/',
		mtl: 'bridge_side_wood.mtl',
		obj: 'bridge_side_wood.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_SIDE_WOODROUND: {
		path: 'downloaded/',
		mtl: 'bridge_side_woodRound.mtl',
		obj: 'bridge_side_woodRound.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_STONE: {
		path: 'downloaded/',
		mtl: 'bridge_stone.mtl',
		obj: 'bridge_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_STONENARROW: {
		path: 'downloaded/',
		mtl: 'bridge_stoneNarrow.mtl',
		obj: 'bridge_stoneNarrow.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_STONEROUND: {
		path: 'downloaded/',
		mtl: 'bridge_stoneRound.mtl',
		obj: 'bridge_stoneRound.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_STONEROUNDNARROW: {
		path: 'downloaded/',
		mtl: 'bridge_stoneRoundNarrow.mtl',
		obj: 'bridge_stoneRoundNarrow.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_WOOD: {
		path: 'downloaded/',
		mtl: 'bridge_wood.mtl',
		obj: 'bridge_wood.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_WOODNARROW: {
		path: 'downloaded/',
		mtl: 'bridge_woodNarrow.mtl',
		obj: 'bridge_woodNarrow.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_WOODROUND: {
		path: 'downloaded/',
		mtl: 'bridge_woodRound.mtl',
		obj: 'bridge_woodRound.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	BRIDGE_WOODROUNDNARROW: {
		path: 'downloaded/',
		mtl: 'bridge_woodRoundNarrow.mtl',
		obj: 'bridge_woodRoundNarrow.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CACTUS_SHORT: {
		path: 'downloaded/',
		mtl: 'cactus_short.mtl',
		obj: 'cactus_short.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CACTUS_TALL: {
		path: 'downloaded/',
		mtl: 'cactus_tall.mtl',
		obj: 'cactus_tall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CAMPFIRE_BRICKS: {
		path: 'downloaded/',
		mtl: 'campfire_bricks.mtl',
		obj: 'campfire_bricks.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CAMPFIRE_LOGS: {
		path: 'downloaded/',
		mtl: 'campfire_logs.mtl',
		obj: 'campfire_logs.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CAMPFIRE_PLANKS: {
		path: 'downloaded/',
		mtl: 'campfire_planks.mtl',
		obj: 'campfire_planks.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CAMPFIRE_STONES: {
		path: 'downloaded/',
		mtl: 'campfire_stones.mtl',
		obj: 'campfire_stones.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CANOE: {
		path: 'downloaded/',
		mtl: 'canoe.mtl',
		obj: 'canoe.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CANOE_PADDLE: {
		path: 'downloaded/',
		mtl: 'canoe_paddle.mtl',
		obj: 'canoe_paddle.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKCAVE_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_blockCave_rock.mtl',
		obj: 'cliff_blockCave_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKCAVE_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_blockCave_stone.mtl',
		obj: 'cliff_blockCave_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKDIAGONAL_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_blockDiagonal_rock.mtl',
		obj: 'cliff_blockDiagonal_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKDIAGONAL_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_blockDiagonal_stone.mtl',
		obj: 'cliff_blockDiagonal_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKHALF_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_blockHalf_rock.mtl',
		obj: 'cliff_blockHalf_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKHALF_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_blockHalf_stone.mtl',
		obj: 'cliff_blockHalf_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKQUARTER_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_blockQuarter_rock.mtl',
		obj: 'cliff_blockQuarter_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKQUARTER_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_blockQuarter_stone.mtl',
		obj: 'cliff_blockQuarter_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKSLOPEHALFWALLS_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_blockSlopeHalfWalls_rock.mtl',
		obj: 'cliff_blockSlopeHalfWalls_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKSLOPEHALFWALLS_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_blockSlopeHalfWalls_stone.mtl',
		obj: 'cliff_blockSlopeHalfWalls_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKSLOPEWALLS_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_blockSlopeWalls_rock.mtl',
		obj: 'cliff_blockSlopeWalls_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKSLOPEWALLS_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_blockSlopeWalls_stone.mtl',
		obj: 'cliff_blockSlopeWalls_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKSLOPE_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_blockSlope_rock.mtl',
		obj: 'cliff_blockSlope_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCKSLOPE_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_blockSlope_stone.mtl',
		obj: 'cliff_blockSlope_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCK_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_block_rock.mtl',
		obj: 'cliff_block_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_BLOCK_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_block_stone.mtl',
		obj: 'cliff_block_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CAVE_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_cave_rock.mtl',
		obj: 'cliff_cave_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CAVE_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_cave_stone.mtl',
		obj: 'cliff_cave_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERINNERLARGE_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_cornerInnerLarge_rock.mtl',
		obj: 'cliff_cornerInnerLarge_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERINNERLARGE_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_cornerInnerLarge_stone.mtl',
		obj: 'cliff_cornerInnerLarge_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERINNERTOP_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_cornerInnerTop_rock.mtl',
		obj: 'cliff_cornerInnerTop_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERINNERTOP_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_cornerInnerTop_stone.mtl',
		obj: 'cliff_cornerInnerTop_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERINNER_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_cornerInner_rock.mtl',
		obj: 'cliff_cornerInner_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERINNER_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_cornerInner_stone.mtl',
		obj: 'cliff_cornerInner_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERLARGE_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_cornerLarge_rock.mtl',
		obj: 'cliff_cornerLarge_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERLARGE_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_cornerLarge_stone.mtl',
		obj: 'cliff_cornerLarge_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERTOP_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_cornerTop_rock.mtl',
		obj: 'cliff_cornerTop_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNERTOP_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_cornerTop_stone.mtl',
		obj: 'cliff_cornerTop_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNER_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_corner_rock.mtl',
		obj: 'cliff_corner_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_CORNER_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_corner_stone.mtl',
		obj: 'cliff_corner_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_DIAGONAL_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_diagonal_rock.mtl',
		obj: 'cliff_diagonal_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_DIAGONAL_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_diagonal_stone.mtl',
		obj: 'cliff_diagonal_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_HALFCORNERINNER_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_halfCornerInner_rock.mtl',
		obj: 'cliff_halfCornerInner_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_HALFCORNERINNER_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_halfCornerInner_stone.mtl',
		obj: 'cliff_halfCornerInner_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_HALFCORNER_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_halfCorner_rock.mtl',
		obj: 'cliff_halfCorner_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_HALFCORNER_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_halfCorner_stone.mtl',
		obj: 'cliff_halfCorner_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_HALF_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_half_rock.mtl',
		obj: 'cliff_half_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_HALF_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_half_stone.mtl',
		obj: 'cliff_half_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_LARGE_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_large_rock.mtl',
		obj: 'cliff_large_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_LARGE_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_large_stone.mtl',
		obj: 'cliff_large_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_rock.mtl',
		obj: 'cliff_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_STEPSCORNERINNER_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_stepsCornerInner_rock.mtl',
		obj: 'cliff_stepsCornerInner_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_STEPSCORNERINNER_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_stepsCornerInner_stone.mtl',
		obj: 'cliff_stepsCornerInner_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_STEPSCORNER_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_stepsCorner_rock.mtl',
		obj: 'cliff_stepsCorner_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_STEPSCORNER_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_stepsCorner_stone.mtl',
		obj: 'cliff_stepsCorner_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_STEPS_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_steps_rock.mtl',
		obj: 'cliff_steps_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_STEPS_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_steps_stone.mtl',
		obj: 'cliff_steps_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_stone.mtl',
		obj: 'cliff_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_TOPDIAGONAL_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_topDiagonal_rock.mtl',
		obj: 'cliff_topDiagonal_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_TOPDIAGONAL_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_topDiagonal_stone.mtl',
		obj: 'cliff_topDiagonal_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_TOP_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_top_rock.mtl',
		obj: 'cliff_top_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_TOP_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_top_stone.mtl',
		obj: 'cliff_top_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_WATERFALLTOP_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_waterfallTop_rock.mtl',
		obj: 'cliff_waterfallTop_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_WATERFALLTOP_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_waterfallTop_stone.mtl',
		obj: 'cliff_waterfallTop_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_WATERFALL_ROCK: {
		path: 'downloaded/',
		mtl: 'cliff_waterfall_rock.mtl',
		obj: 'cliff_waterfall_rock.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CLIFF_WATERFALL_STONE: {
		path: 'downloaded/',
		mtl: 'cliff_waterfall_stone.mtl',
		obj: 'cliff_waterfall_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_BAMBOOSTAGEA: {
		path: 'downloaded/',
		mtl: 'crops_bambooStageA.mtl',
		obj: 'crops_bambooStageA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_BAMBOOSTAGEB: {
		path: 'downloaded/',
		mtl: 'crops_bambooStageB.mtl',
		obj: 'crops_bambooStageB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_CORNSTAGEA: {
		path: 'downloaded/',
		mtl: 'crops_cornStageA.mtl',
		obj: 'crops_cornStageA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_CORNSTAGEB: {
		path: 'downloaded/',
		mtl: 'crops_cornStageB.mtl',
		obj: 'crops_cornStageB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_CORNSTAGEC: {
		path: 'downloaded/',
		mtl: 'crops_cornStageC.mtl',
		obj: 'crops_cornStageC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_CORNSTAGED: {
		path: 'downloaded/',
		mtl: 'crops_cornStageD.mtl',
		obj: 'crops_cornStageD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_DIRTDOUBLEROW: {
		path: 'downloaded/',
		mtl: 'crops_dirtDoubleRow.mtl',
		obj: 'crops_dirtDoubleRow.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_DIRTDOUBLEROWCORNER: {
		path: 'downloaded/',
		mtl: 'crops_dirtDoubleRowCorner.mtl',
		obj: 'crops_dirtDoubleRowCorner.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_DIRTDOUBLEROWEND: {
		path: 'downloaded/',
		mtl: 'crops_dirtDoubleRowEnd.mtl',
		obj: 'crops_dirtDoubleRowEnd.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_DIRTROW: {
		path: 'downloaded/',
		mtl: 'crops_dirtRow.mtl',
		obj: 'crops_dirtRow.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_DIRTROWCORNER: {
		path: 'downloaded/',
		mtl: 'crops_dirtRowCorner.mtl',
		obj: 'crops_dirtRowCorner.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_DIRTROWEND: {
		path: 'downloaded/',
		mtl: 'crops_dirtRowEnd.mtl',
		obj: 'crops_dirtRowEnd.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_DIRTSINGLE: {
		path: 'downloaded/',
		mtl: 'crops_dirtSingle.mtl',
		obj: 'crops_dirtSingle.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_LEAFSSTAGEA: {
		path: 'downloaded/',
		mtl: 'crops_leafsStageA.mtl',
		obj: 'crops_leafsStageA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_LEAFSSTAGEB: {
		path: 'downloaded/',
		mtl: 'crops_leafsStageB.mtl',
		obj: 'crops_leafsStageB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_WHEATSTAGEA: {
		path: 'downloaded/',
		mtl: 'crops_wheatStageA.mtl',
		obj: 'crops_wheatStageA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROPS_WHEATSTAGEB: {
		path: 'downloaded/',
		mtl: 'crops_wheatStageB.mtl',
		obj: 'crops_wheatStageB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROP_CARROT: {
		path: 'downloaded/',
		mtl: 'crop_carrot.mtl',
		obj: 'crop_carrot.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROP_MELON: {
		path: 'downloaded/',
		mtl: 'crop_melon.mtl',
		obj: 'crop_melon.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROP_PUMPKIN: {
		path: 'downloaded/',
		mtl: 'crop_pumpkin.mtl',
		obj: 'crop_pumpkin.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CROP_TURNIP: {
		path: 'downloaded/',
		mtl: 'crop_turnip.mtl',
		obj: 'crop_turnip.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_BEND: {
		path: 'downloaded/',
		mtl: 'fence_bend.mtl',
		obj: 'fence_bend.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_BENDCENTER: {
		path: 'downloaded/',
		mtl: 'fence_bendCenter.mtl',
		obj: 'fence_bendCenter.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_CORNER: {
		path: 'downloaded/',
		mtl: 'fence_corner.mtl',
		obj: 'fence_corner.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_GATE: {
		path: 'downloaded/',
		mtl: 'fence_gate.mtl',
		obj: 'fence_gate.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_PLANKS: {
		path: 'downloaded/',
		mtl: 'fence_planks.mtl',
		obj: 'fence_planks.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_PLANKSDOUBLE: {
		path: 'downloaded/',
		mtl: 'fence_planksDouble.mtl',
		obj: 'fence_planksDouble.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_SIMPLE: {
		path: 'downloaded/',
		mtl: 'fence_simple.mtl',
		obj: 'fence_simple.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_SIMPLECENTER: {
		path: 'downloaded/',
		mtl: 'fence_simpleCenter.mtl',
		obj: 'fence_simpleCenter.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_SIMPLEDIAGONAL: {
		path: 'downloaded/',
		mtl: 'fence_simpleDiagonal.mtl',
		obj: 'fence_simpleDiagonal.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_SIMPLEDIAGONALCENTER: {
		path: 'downloaded/',
		mtl: 'fence_simpleDiagonalCenter.mtl',
		obj: 'fence_simpleDiagonalCenter.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_SIMPLEHIGH: {
		path: 'downloaded/',
		mtl: 'fence_simpleHigh.mtl',
		obj: 'fence_simpleHigh.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FENCE_SIMPLELOW: {
		path: 'downloaded/',
		mtl: 'fence_simpleLow.mtl',
		obj: 'fence_simpleLow.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_PURPLEA: {
		path: 'downloaded/',
		mtl: 'flower_purpleA.mtl',
		obj: 'flower_purpleA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_PURPLEB: {
		path: 'downloaded/',
		mtl: 'flower_purpleB.mtl',
		obj: 'flower_purpleB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_PURPLEC: {
		path: 'downloaded/',
		mtl: 'flower_purpleC.mtl',
		obj: 'flower_purpleC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_REDA: {
		path: 'downloaded/',
		mtl: 'flower_redA.mtl',
		obj: 'flower_redA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_REDB: {
		path: 'downloaded/',
		mtl: 'flower_redB.mtl',
		obj: 'flower_redB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_REDC: {
		path: 'downloaded/',
		mtl: 'flower_redC.mtl',
		obj: 'flower_redC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_YELLOWA: {
		path: 'downloaded/',
		mtl: 'flower_yellowA.mtl',
		obj: 'flower_yellowA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_YELLOWB: {
		path: 'downloaded/',
		mtl: 'flower_yellowB.mtl',
		obj: 'flower_yellowB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOWER_YELLOWC: {
		path: 'downloaded/',
		mtl: 'flower_yellowC.mtl',
		obj: 'flower_yellowC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GRASS: {
		path: 'downloaded/',
		mtl: 'grass.mtl',
		obj: 'grass.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GRASS_LARGE: {
		path: 'downloaded/',
		mtl: 'grass_large.mtl',
		obj: 'grass_large.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GRASS_LEAFS: {
		path: 'downloaded/',
		mtl: 'grass_leafs.mtl',
		obj: 'grass_leafs.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GRASS_LEAFSLARGE: {
		path: 'downloaded/',
		mtl: 'grass_leafsLarge.mtl',
		obj: 'grass_leafsLarge.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_GRASS: {
		path: 'downloaded/',
		mtl: 'ground_grass.mtl',
		obj: 'ground_grass.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHBEND: {
		path: 'downloaded/',
		mtl: 'ground_pathBend.mtl',
		obj: 'ground_pathBend.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHBENDBANK: {
		path: 'downloaded/',
		mtl: 'ground_pathBendBank.mtl',
		obj: 'ground_pathBendBank.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHCORNER: {
		path: 'downloaded/',
		mtl: 'ground_pathCorner.mtl',
		obj: 'ground_pathCorner.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHCORNERSMALL: {
		path: 'downloaded/',
		mtl: 'ground_pathCornerSmall.mtl',
		obj: 'ground_pathCornerSmall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHCROSS: {
		path: 'downloaded/',
		mtl: 'ground_pathCross.mtl',
		obj: 'ground_pathCross.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHEND: {
		path: 'downloaded/',
		mtl: 'ground_pathEnd.mtl',
		obj: 'ground_pathEnd.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHENDCLOSED: {
		path: 'downloaded/',
		mtl: 'ground_pathEndClosed.mtl',
		obj: 'ground_pathEndClosed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHOPEN: {
		path: 'downloaded/',
		mtl: 'ground_pathOpen.mtl',
		obj: 'ground_pathOpen.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHROCKS: {
		path: 'downloaded/',
		mtl: 'ground_pathRocks.mtl',
		obj: 'ground_pathRocks.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHSIDE: {
		path: 'downloaded/',
		mtl: 'ground_pathSide.mtl',
		obj: 'ground_pathSide.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHSIDEOPEN: {
		path: 'downloaded/',
		mtl: 'ground_pathSideOpen.mtl',
		obj: 'ground_pathSideOpen.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHSPLIT: {
		path: 'downloaded/',
		mtl: 'ground_pathSplit.mtl',
		obj: 'ground_pathSplit.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHSTRAIGHT: {
		path: 'downloaded/',
		mtl: 'ground_pathStraight.mtl',
		obj: 'ground_pathStraight.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_PATHTILE: {
		path: 'downloaded/',
		mtl: 'ground_pathTile.mtl',
		obj: 'ground_pathTile.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERBEND: {
		path: 'downloaded/',
		mtl: 'ground_riverBend.mtl',
		obj: 'ground_riverBend.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERBENDBANK: {
		path: 'downloaded/',
		mtl: 'ground_riverBendBank.mtl',
		obj: 'ground_riverBendBank.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERCORNER: {
		path: 'downloaded/',
		mtl: 'ground_riverCorner.mtl',
		obj: 'ground_riverCorner.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERCORNERSMALL: {
		path: 'downloaded/',
		mtl: 'ground_riverCornerSmall.mtl',
		obj: 'ground_riverCornerSmall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERCROSS: {
		path: 'downloaded/',
		mtl: 'ground_riverCross.mtl',
		obj: 'ground_riverCross.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVEREND: {
		path: 'downloaded/',
		mtl: 'ground_riverEnd.mtl',
		obj: 'ground_riverEnd.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERENDCLOSED: {
		path: 'downloaded/',
		mtl: 'ground_riverEndClosed.mtl',
		obj: 'ground_riverEndClosed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVEROPEN: {
		path: 'downloaded/',
		mtl: 'ground_riverOpen.mtl',
		obj: 'ground_riverOpen.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERROCKS: {
		path: 'downloaded/',
		mtl: 'ground_riverRocks.mtl',
		obj: 'ground_riverRocks.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERSIDE: {
		path: 'downloaded/',
		mtl: 'ground_riverSide.mtl',
		obj: 'ground_riverSide.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERSIDEOPEN: {
		path: 'downloaded/',
		mtl: 'ground_riverSideOpen.mtl',
		obj: 'ground_riverSideOpen.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERSPLIT: {
		path: 'downloaded/',
		mtl: 'ground_riverSplit.mtl',
		obj: 'ground_riverSplit.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERSTRAIGHT: {
		path: 'downloaded/',
		mtl: 'ground_riverStraight.mtl',
		obj: 'ground_riverStraight.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GROUND_RIVERTILE: {
		path: 'downloaded/',
		mtl: 'ground_riverTile.mtl',
		obj: 'ground_riverTile.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	HANGING_MOSS: {
		path: 'downloaded/',
		mtl: 'hanging_moss.mtl',
		obj: 'hanging_moss.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	LILY_LARGE: {
		path: 'downloaded/',
		mtl: 'lily_large.mtl',
		obj: 'lily_large.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	LILY_SMALL: {
		path: 'downloaded/',
		mtl: 'lily_small.mtl',
		obj: 'lily_small.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	LOG: {
		path: 'downloaded/',
		mtl: 'log.mtl',
		obj: 'log.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	LOG_LARGE: {
		path: 'downloaded/',
		mtl: 'log_large.mtl',
		obj: 'log_large.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	LOG_STACK: {
		path: 'downloaded/',
		mtl: 'log_stack.mtl',
		obj: 'log_stack.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	LOG_STACKLARGE: {
		path: 'downloaded/',
		mtl: 'log_stackLarge.mtl',
		obj: 'log_stackLarge.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	MUSHROOM_RED: {
		path: 'downloaded/',
		mtl: 'mushroom_red.mtl',
		obj: 'mushroom_red.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	MUSHROOM_REDGROUP: {
		path: 'downloaded/',
		mtl: 'mushroom_redGroup.mtl',
		obj: 'mushroom_redGroup.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	MUSHROOM_REDTALL: {
		path: 'downloaded/',
		mtl: 'mushroom_redTall.mtl',
		obj: 'mushroom_redTall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	MUSHROOM_TAN: {
		path: 'downloaded/',
		mtl: 'mushroom_tan.mtl',
		obj: 'mushroom_tan.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	MUSHROOM_TANGROUP: {
		path: 'downloaded/',
		mtl: 'mushroom_tanGroup.mtl',
		obj: 'mushroom_tanGroup.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	MUSHROOM_TANTALL: {
		path: 'downloaded/',
		mtl: 'mushroom_tanTall.mtl',
		obj: 'mushroom_tanTall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PATH_STONE: {
		path: 'downloaded/',
		mtl: 'path_stone.mtl',
		obj: 'path_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PATH_STONECIRCLE: {
		path: 'downloaded/',
		mtl: 'path_stoneCircle.mtl',
		obj: 'path_stoneCircle.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PATH_STONECORNER: {
		path: 'downloaded/',
		mtl: 'path_stoneCorner.mtl',
		obj: 'path_stoneCorner.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PATH_STONEEND: {
		path: 'downloaded/',
		mtl: 'path_stoneEnd.mtl',
		obj: 'path_stoneEnd.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PATH_WOOD: {
		path: 'downloaded/',
		mtl: 'path_wood.mtl',
		obj: 'path_wood.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PATH_WOODCORNER: {
		path: 'downloaded/',
		mtl: 'path_woodCorner.mtl',
		obj: 'path_woodCorner.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PATH_WOODEND: {
		path: 'downloaded/',
		mtl: 'path_woodEnd.mtl',
		obj: 'path_woodEnd.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLANT_BUSH: {
		path: 'downloaded/',
		mtl: 'plant_bush.mtl',
		obj: 'plant_bush.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLANT_BUSHDETAILED: {
		path: 'downloaded/',
		mtl: 'plant_bushDetailed.mtl',
		obj: 'plant_bushDetailed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLANT_BUSHLARGE: {
		path: 'downloaded/',
		mtl: 'plant_bushLarge.mtl',
		obj: 'plant_bushLarge.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLANT_BUSHLARGETRIANGLE: {
		path: 'downloaded/',
		mtl: 'plant_bushLargeTriangle.mtl',
		obj: 'plant_bushLargeTriangle.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLANT_BUSHSMALL: {
		path: 'downloaded/',
		mtl: 'plant_bushSmall.mtl',
		obj: 'plant_bushSmall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLANT_BUSHTRIANGLE: {
		path: 'downloaded/',
		mtl: 'plant_bushTriangle.mtl',
		obj: 'plant_bushTriangle.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLANT_FLATSHORT: {
		path: 'downloaded/',
		mtl: 'plant_flatShort.mtl',
		obj: 'plant_flatShort.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLANT_FLATTALL: {
		path: 'downloaded/',
		mtl: 'plant_flatTall.mtl',
		obj: 'plant_flatTall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLATFORM_BEACH: {
		path: 'downloaded/',
		mtl: 'platform_beach.mtl',
		obj: 'platform_beach.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLATFORM_GRASS: {
		path: 'downloaded/',
		mtl: 'platform_grass.mtl',
		obj: 'platform_grass.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	PLATFORM_STONE: {
		path: 'downloaded/',
		mtl: 'platform_stone.mtl',
		obj: 'platform_stone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	POT_LARGE: {
		path: 'downloaded/',
		mtl: 'pot_large.mtl',
		obj: 'pot_large.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	POT_SMALL: {
		path: 'downloaded/',
		mtl: 'pot_small.mtl',
		obj: 'pot_small.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_LARGEA: {
		path: 'downloaded/',
		mtl: 'rock_largeA.mtl',
		obj: 'rock_largeA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_LARGEB: {
		path: 'downloaded/',
		mtl: 'rock_largeB.mtl',
		obj: 'rock_largeB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_LARGEC: {
		path: 'downloaded/',
		mtl: 'rock_largeC.mtl',
		obj: 'rock_largeC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_LARGED: {
		path: 'downloaded/',
		mtl: 'rock_largeD.mtl',
		obj: 'rock_largeD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_LARGEE: {
		path: 'downloaded/',
		mtl: 'rock_largeE.mtl',
		obj: 'rock_largeE.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_LARGEF: {
		path: 'downloaded/',
		mtl: 'rock_largeF.mtl',
		obj: 'rock_largeF.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLA: {
		path: 'downloaded/',
		mtl: 'rock_smallA.mtl',
		obj: 'rock_smallA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLB: {
		path: 'downloaded/',
		mtl: 'rock_smallB.mtl',
		obj: 'rock_smallB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLC: {
		path: 'downloaded/',
		mtl: 'rock_smallC.mtl',
		obj: 'rock_smallC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLD: {
		path: 'downloaded/',
		mtl: 'rock_smallD.mtl',
		obj: 'rock_smallD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLE: {
		path: 'downloaded/',
		mtl: 'rock_smallE.mtl',
		obj: 'rock_smallE.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLF: {
		path: 'downloaded/',
		mtl: 'rock_smallF.mtl',
		obj: 'rock_smallF.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLFLATA: {
		path: 'downloaded/',
		mtl: 'rock_smallFlatA.mtl',
		obj: 'rock_smallFlatA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLFLATB: {
		path: 'downloaded/',
		mtl: 'rock_smallFlatB.mtl',
		obj: 'rock_smallFlatB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLFLATC: {
		path: 'downloaded/',
		mtl: 'rock_smallFlatC.mtl',
		obj: 'rock_smallFlatC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLG: {
		path: 'downloaded/',
		mtl: 'rock_smallG.mtl',
		obj: 'rock_smallG.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLH: {
		path: 'downloaded/',
		mtl: 'rock_smallH.mtl',
		obj: 'rock_smallH.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLI: {
		path: 'downloaded/',
		mtl: 'rock_smallI.mtl',
		obj: 'rock_smallI.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLTOPA: {
		path: 'downloaded/',
		mtl: 'rock_smallTopA.mtl',
		obj: 'rock_smallTopA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_SMALLTOPB: {
		path: 'downloaded/',
		mtl: 'rock_smallTopB.mtl',
		obj: 'rock_smallTopB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLA: {
		path: 'downloaded/',
		mtl: 'rock_tallA.mtl',
		obj: 'rock_tallA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLB: {
		path: 'downloaded/',
		mtl: 'rock_tallB.mtl',
		obj: 'rock_tallB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLC: {
		path: 'downloaded/',
		mtl: 'rock_tallC.mtl',
		obj: 'rock_tallC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLD: {
		path: 'downloaded/',
		mtl: 'rock_tallD.mtl',
		obj: 'rock_tallD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLE: {
		path: 'downloaded/',
		mtl: 'rock_tallE.mtl',
		obj: 'rock_tallE.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLF: {
		path: 'downloaded/',
		mtl: 'rock_tallF.mtl',
		obj: 'rock_tallF.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLG: {
		path: 'downloaded/',
		mtl: 'rock_tallG.mtl',
		obj: 'rock_tallG.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLH: {
		path: 'downloaded/',
		mtl: 'rock_tallH.mtl',
		obj: 'rock_tallH.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLI: {
		path: 'downloaded/',
		mtl: 'rock_tallI.mtl',
		obj: 'rock_tallI.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ROCK_TALLJ: {
		path: 'downloaded/',
		mtl: 'rock_tallJ.mtl',
		obj: 'rock_tallJ.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	SIGN: {
		path: 'downloaded/',
		mtl: 'sign.mtl',
		obj: 'sign.obj',
		transform: {
			scale: { x: 2.5, y: 2.5, z: 2.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STATUE_BLOCK: {
		path: 'downloaded/',
		mtl: 'statue_block.mtl',
		obj: 'statue_block.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STATUE_COLUMN: {
		path: 'downloaded/',
		mtl: 'statue_column.mtl',
		obj: 'statue_column.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STATUE_COLUMNDAMAGED: {
		path: 'downloaded/',
		mtl: 'statue_columnDamaged.mtl',
		obj: 'statue_columnDamaged.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STATUE_HEAD: {
		path: 'downloaded/',
		mtl: 'statue_head.mtl',
		obj: 'statue_head.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STATUE_OBELISK: {
		path: 'downloaded/',
		mtl: 'statue_obelisk.mtl',
		obj: 'statue_obelisk.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STATUE_RING: {
		path: 'downloaded/',
		mtl: 'statue_ring.mtl',
		obj: 'statue_ring.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_LARGEA: {
		path: 'downloaded/',
		mtl: 'stone_largeA.mtl',
		obj: 'stone_largeA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_LARGEB: {
		path: 'downloaded/',
		mtl: 'stone_largeB.mtl',
		obj: 'stone_largeB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_LARGEC: {
		path: 'downloaded/',
		mtl: 'stone_largeC.mtl',
		obj: 'stone_largeC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_LARGED: {
		path: 'downloaded/',
		mtl: 'stone_largeD.mtl',
		obj: 'stone_largeD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_LARGEE: {
		path: 'downloaded/',
		mtl: 'stone_largeE.mtl',
		obj: 'stone_largeE.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_LARGEF: {
		path: 'downloaded/',
		mtl: 'stone_largeF.mtl',
		obj: 'stone_largeF.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLA: {
		path: 'downloaded/',
		mtl: 'stone_smallA.mtl',
		obj: 'stone_smallA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLB: {
		path: 'downloaded/',
		mtl: 'stone_smallB.mtl',
		obj: 'stone_smallB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLC: {
		path: 'downloaded/',
		mtl: 'stone_smallC.mtl',
		obj: 'stone_smallC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLD: {
		path: 'downloaded/',
		mtl: 'stone_smallD.mtl',
		obj: 'stone_smallD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLE: {
		path: 'downloaded/',
		mtl: 'stone_smallE.mtl',
		obj: 'stone_smallE.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLF: {
		path: 'downloaded/',
		mtl: 'stone_smallF.mtl',
		obj: 'stone_smallF.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLFLATA: {
		path: 'downloaded/',
		mtl: 'stone_smallFlatA.mtl',
		obj: 'stone_smallFlatA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLFLATB: {
		path: 'downloaded/',
		mtl: 'stone_smallFlatB.mtl',
		obj: 'stone_smallFlatB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLFLATC: {
		path: 'downloaded/',
		mtl: 'stone_smallFlatC.mtl',
		obj: 'stone_smallFlatC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLG: {
		path: 'downloaded/',
		mtl: 'stone_smallG.mtl',
		obj: 'stone_smallG.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLH: {
		path: 'downloaded/',
		mtl: 'stone_smallH.mtl',
		obj: 'stone_smallH.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLI: {
		path: 'downloaded/',
		mtl: 'stone_smallI.mtl',
		obj: 'stone_smallI.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLTOPA: {
		path: 'downloaded/',
		mtl: 'stone_smallTopA.mtl',
		obj: 'stone_smallTopA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_SMALLTOPB: {
		path: 'downloaded/',
		mtl: 'stone_smallTopB.mtl',
		obj: 'stone_smallTopB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLA: {
		path: 'downloaded/',
		mtl: 'stone_tallA.mtl',
		obj: 'stone_tallA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLB: {
		path: 'downloaded/',
		mtl: 'stone_tallB.mtl',
		obj: 'stone_tallB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLC: {
		path: 'downloaded/',
		mtl: 'stone_tallC.mtl',
		obj: 'stone_tallC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLD: {
		path: 'downloaded/',
		mtl: 'stone_tallD.mtl',
		obj: 'stone_tallD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLE: {
		path: 'downloaded/',
		mtl: 'stone_tallE.mtl',
		obj: 'stone_tallE.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLF: {
		path: 'downloaded/',
		mtl: 'stone_tallF.mtl',
		obj: 'stone_tallF.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLG: {
		path: 'downloaded/',
		mtl: 'stone_tallG.mtl',
		obj: 'stone_tallG.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLH: {
		path: 'downloaded/',
		mtl: 'stone_tallH.mtl',
		obj: 'stone_tallH.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLI: {
		path: 'downloaded/',
		mtl: 'stone_tallI.mtl',
		obj: 'stone_tallI.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STONE_TALLJ: {
		path: 'downloaded/',
		mtl: 'stone_tallJ.mtl',
		obj: 'stone_tallJ.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STUMP_OLD: {
		path: 'downloaded/',
		mtl: 'stump_old.mtl',
		obj: 'stump_old.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STUMP_OLDTALL: {
		path: 'downloaded/',
		mtl: 'stump_oldTall.mtl',
		obj: 'stump_oldTall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STUMP_ROUND: {
		path: 'downloaded/',
		mtl: 'stump_round.mtl',
		obj: 'stump_round.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STUMP_ROUNDDETAILED: {
		path: 'downloaded/',
		mtl: 'stump_roundDetailed.mtl',
		obj: 'stump_roundDetailed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STUMP_SQUARE: {
		path: 'downloaded/',
		mtl: 'stump_square.mtl',
		obj: 'stump_square.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STUMP_SQUAREDETAILED: {
		path: 'downloaded/',
		mtl: 'stump_squareDetailed.mtl',
		obj: 'stump_squareDetailed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	STUMP_SQUAREDETAILEDWIDE: {
		path: 'downloaded/',
		mtl: 'stump_squareDetailedWide.mtl',
		obj: 'stump_squareDetailedWide.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TENT_DETAILEDCLOSED: {
		path: 'downloaded/',
		mtl: 'tent_detailedClosed.mtl',
		obj: 'tent_detailedClosed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TENT_DETAILEDOPEN: {
		path: 'downloaded/',
		mtl: 'tent_detailedOpen.mtl',
		obj: 'tent_detailedOpen.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TENT_SMALLCLOSED: {
		path: 'downloaded/',
		mtl: 'tent_smallClosed.mtl',
		obj: 'tent_smallClosed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TENT_SMALLOPEN: {
		path: 'downloaded/',
		mtl: 'tent_smallOpen.mtl',
		obj: 'tent_smallOpen.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_BLOCKS: {
		path: 'downloaded/',
		mtl: 'tree_blocks.mtl',
		obj: 'tree_blocks.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_BLOCKS_DARK: {
		path: 'downloaded/',
		mtl: 'tree_blocks_dark.mtl',
		obj: 'tree_blocks_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_BLOCKS_FALL: {
		path: 'downloaded/',
		mtl: 'tree_blocks_fall.mtl',
		obj: 'tree_blocks_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_CONE: {
		path: 'downloaded/',
		mtl: 'tree_cone.mtl',
		obj: 'tree_cone.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_CONE_DARK: {
		path: 'downloaded/',
		mtl: 'tree_cone_dark.mtl',
		obj: 'tree_cone_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_CONE_FALL: {
		path: 'downloaded/',
		mtl: 'tree_cone_fall.mtl',
		obj: 'tree_cone_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_DEFAULT: {
		path: 'downloaded/',
		mtl: 'tree_default.mtl',
		obj: 'tree_default.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_DEFAULT_DARK: {
		path: 'downloaded/',
		mtl: 'tree_default_dark.mtl',
		obj: 'tree_default_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_DEFAULT_FALL: {
		path: 'downloaded/',
		mtl: 'tree_default_fall.mtl',
		obj: 'tree_default_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_DETAILED: {
		path: 'downloaded/',
		mtl: 'tree_detailed.mtl',
		obj: 'tree_detailed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_DETAILED_DARK: {
		path: 'downloaded/',
		mtl: 'tree_detailed_dark.mtl',
		obj: 'tree_detailed_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_DETAILED_FALL: {
		path: 'downloaded/',
		mtl: 'tree_detailed_fall.mtl',
		obj: 'tree_detailed_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_FAT: {
		path: 'downloaded/',
		mtl: 'tree_fat.mtl',
		obj: 'tree_fat.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_FAT_DARKH: {
		path: 'downloaded/',
		mtl: 'tree_fat_darkh.mtl',
		obj: 'tree_fat_darkh.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_FAT_FALL: {
		path: 'downloaded/',
		mtl: 'tree_fat_fall.mtl',
		obj: 'tree_fat_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_OAK: {
		path: 'downloaded/',
		mtl: 'tree_oak.mtl',
		obj: 'tree_oak.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_OAK_DARK: {
		path: 'downloaded/',
		mtl: 'tree_oak_dark.mtl',
		obj: 'tree_oak_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_OAK_FALL: {
		path: 'downloaded/',
		mtl: 'tree_oak_fall.mtl',
		obj: 'tree_oak_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PALM: {
		path: 'downloaded/',
		mtl: 'tree_palm.mtl',
		obj: 'tree_palm.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PALMBEND: {
		path: 'downloaded/',
		mtl: 'tree_palmBend.mtl',
		obj: 'tree_palmBend.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PALMDETAILEDSHORT: {
		path: 'downloaded/',
		mtl: 'tree_palmDetailedShort.mtl',
		obj: 'tree_palmDetailedShort.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PALMDETAILEDTALL: {
		path: 'downloaded/',
		mtl: 'tree_palmDetailedTall.mtl',
		obj: 'tree_palmDetailedTall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PALMSHORT: {
		path: 'downloaded/',
		mtl: 'tree_palmShort.mtl',
		obj: 'tree_palmShort.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PALMTALL: {
		path: 'downloaded/',
		mtl: 'tree_palmTall.mtl',
		obj: 'tree_palmTall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEDEFAULTA: {
		path: 'downloaded/',
		mtl: 'tree_pineDefaultA.mtl',
		obj: 'tree_pineDefaultA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEDEFAULTB: {
		path: 'downloaded/',
		mtl: 'tree_pineDefaultB.mtl',
		obj: 'tree_pineDefaultB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEGROUNDA: {
		path: 'downloaded/',
		mtl: 'tree_pineGroundA.mtl',
		obj: 'tree_pineGroundA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEGROUNDB: {
		path: 'downloaded/',
		mtl: 'tree_pineGroundB.mtl',
		obj: 'tree_pineGroundB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEROUNDA: {
		path: 'downloaded/',
		mtl: 'tree_pineRoundA.mtl',
		obj: 'tree_pineRoundA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEROUNDB: {
		path: 'downloaded/',
		mtl: 'tree_pineRoundB.mtl',
		obj: 'tree_pineRoundB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEROUNDC: {
		path: 'downloaded/',
		mtl: 'tree_pineRoundC.mtl',
		obj: 'tree_pineRoundC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEROUNDD: {
		path: 'downloaded/',
		mtl: 'tree_pineRoundD.mtl',
		obj: 'tree_pineRoundD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEROUNDE: {
		path: 'downloaded/',
		mtl: 'tree_pineRoundE.mtl',
		obj: 'tree_pineRoundE.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINEROUNDF: {
		path: 'downloaded/',
		mtl: 'tree_pineRoundF.mtl',
		obj: 'tree_pineRoundF.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINESMALLA: {
		path: 'downloaded/',
		mtl: 'tree_pineSmallA.mtl',
		obj: 'tree_pineSmallA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINESMALLB: {
		path: 'downloaded/',
		mtl: 'tree_pineSmallB.mtl',
		obj: 'tree_pineSmallB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINESMALLC: {
		path: 'downloaded/',
		mtl: 'tree_pineSmallC.mtl',
		obj: 'tree_pineSmallC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINESMALLD: {
		path: 'downloaded/',
		mtl: 'tree_pineSmallD.mtl',
		obj: 'tree_pineSmallD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINETALLA: {
		path: 'downloaded/',
		mtl: 'tree_pineTallA.mtl',
		obj: 'tree_pineTallA.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINETALLA_DETAILED: {
		path: 'downloaded/',
		mtl: 'tree_pineTallA_detailed.mtl',
		obj: 'tree_pineTallA_detailed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINETALLB: {
		path: 'downloaded/',
		mtl: 'tree_pineTallB.mtl',
		obj: 'tree_pineTallB.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINETALLB_DETAILED: {
		path: 'downloaded/',
		mtl: 'tree_pineTallB_detailed.mtl',
		obj: 'tree_pineTallB_detailed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINETALLC: {
		path: 'downloaded/',
		mtl: 'tree_pineTallC.mtl',
		obj: 'tree_pineTallC.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINETALLC_DETAILED: {
		path: 'downloaded/',
		mtl: 'tree_pineTallC_detailed.mtl',
		obj: 'tree_pineTallC_detailed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINETALLD: {
		path: 'downloaded/',
		mtl: 'tree_pineTallD.mtl',
		obj: 'tree_pineTallD.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PINETALLD_DETAILED: {
		path: 'downloaded/',
		mtl: 'tree_pineTallD_detailed.mtl',
		obj: 'tree_pineTallD_detailed.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PLATEAU: {
		path: 'downloaded/',
		mtl: 'tree_plateau.mtl',
		obj: 'tree_plateau.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PLATEAU_DARK: {
		path: 'downloaded/',
		mtl: 'tree_plateau_dark.mtl',
		obj: 'tree_plateau_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_PLATEAU_FALL: {
		path: 'downloaded/',
		mtl: 'tree_plateau_fall.mtl',
		obj: 'tree_plateau_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_SIMPLE: {
		path: 'downloaded/',
		mtl: 'tree_simple.mtl',
		obj: 'tree_simple.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_SIMPLE_DARK: {
		path: 'downloaded/',
		mtl: 'tree_simple_dark.mtl',
		obj: 'tree_simple_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_SIMPLE_FALL: {
		path: 'downloaded/',
		mtl: 'tree_simple_fall.mtl',
		obj: 'tree_simple_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_SMALL: {
		path: 'downloaded/',
		mtl: 'tree_small.mtl',
		obj: 'tree_small.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_SMALL_DARK: {
		path: 'downloaded/',
		mtl: 'tree_small_dark.mtl',
		obj: 'tree_small_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_SMALL_FALL: {
		path: 'downloaded/',
		mtl: 'tree_small_fall.mtl',
		obj: 'tree_small_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_TALL: {
		path: 'downloaded/',
		mtl: 'tree_tall.mtl',
		obj: 'tree_tall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_TALL_DARK: {
		path: 'downloaded/',
		mtl: 'tree_tall_dark.mtl',
		obj: 'tree_tall_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_TALL_FALL: {
		path: 'downloaded/',
		mtl: 'tree_tall_fall.mtl',
		obj: 'tree_tall_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_THIN: {
		path: 'downloaded/',
		mtl: 'tree_thin.mtl',
		obj: 'tree_thin.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_THIN_DARK: {
		path: 'downloaded/',
		mtl: 'tree_thin_dark.mtl',
		obj: 'tree_thin_dark.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TREE_THIN_FALL: {
		path: 'downloaded/',
		mtl: 'tree_thin_fall.mtl',
		obj: 'tree_thin_fall.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TILE_FREE_OLD: {
		path: 'originals/',
		mtl: 'platform_free.mtl',
		obj: 'platform_free.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TILE_FREE_OLD_HOVER: {
		path: 'originals/',
		mtl: 'platform_free_hover.mtl',
		obj: 'platform_free_hover.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TILE_FREE_0: {
		path: 'originals/',
		mtl: 'tile_free_0.mtl',
		obj: 'tile_free_0.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TILE_FREE_1: {
		path: 'originals/',
		mtl: 'tile_free_1.mtl',
		obj: 'tile_free_1.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TILE_STONE_1: {
		path: 'tiles/',
		mtl: 'tile_stone_1.mtl',
		obj: 'tile_stone_1.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	CHECKPOINT: {
		path: 'originals/',
		mtl: 'checkpoint.mtl',
		obj: 'checkpoint.obj',
		transform: {
			scale: { x: 0.5, y: 0.5, z: 0.5 },
			offset: { x: -0.5, y: 0, z: -0.5 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	ARENA_TEMPLE_A: {
		path: 'arenas/',
		mtl: 'dungeon_arena.mtl',
		obj: 'dungeon_arena.obj',
		transform: {
			scale: { x: 2.0, y: 2.0, z: 2.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_P1: {
		path: 'gems/',
		mtl: 'gems_amethyst_1.mtl',
		obj: 'gems_amethyst_1.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_P2: {
		path: 'gems/',
		mtl: 'gems_amethyst_2.mtl',
		obj: 'gems_amethyst_2.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_P3: {
		path: 'gems/',
		mtl: 'gems_amethyst_3.mtl',
		obj: 'gems_amethyst_3.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_P4: {
		path: 'gems/',
		mtl: 'gems_amethyst_4.mtl',
		obj: 'gems_amethyst_4.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_P5: {
		path: 'gems/',
		mtl: 'gems_amethyst_5.mtl',
		obj: 'gems_amethyst_5.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_P6: {
		path: 'gems/',
		mtl: 'gems_amethyst_6.mtl',
		obj: 'gems_amethyst_6.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_Q1: {
		path: 'gems/',
		mtl: 'gems_aquamarine_1.mtl',
		obj: 'gems_aquamarine_1.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_Q2: {
		path: 'gems/',
		mtl: 'gems_aquamarine_2.mtl',
		obj: 'gems_aquamarine_2.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_Q3: {
		path: 'gems/',
		mtl: 'gems_aquamarine_3.mtl',
		obj: 'gems_aquamarine_3.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_Q4: {
		path: 'gems/',
		mtl: 'gems_aquamarine_4.mtl',
		obj: 'gems_aquamarine_4.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_Q5: {
		path: 'gems/',
		mtl: 'gems_aquamarine_5.mtl',
		obj: 'gems_aquamarine_5.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_Q6: {
		path: 'gems/',
		mtl: 'gems_aquamarine_6.mtl',
		obj: 'gems_aquamarine_6.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_D1: {
		path: 'gems/',
		mtl: 'gems_diamond_1.mtl',
		obj: 'gems_diamond_1.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_D2: {
		path: 'gems/',
		mtl: 'gems_diamond_2.mtl',
		obj: 'gems_diamond_2.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_D3: {
		path: 'gems/',
		mtl: 'gems_diamond_3.mtl',
		obj: 'gems_diamond_3.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_D4: {
		path: 'gems/',
		mtl: 'gems_diamond_4.mtl',
		obj: 'gems_diamond_4.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_D5: {
		path: 'gems/',
		mtl: 'gems_diamond_5.mtl',
		obj: 'gems_diamond_5.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_D6: {
		path: 'gems/',
		mtl: 'gems_diamond_6.mtl',
		obj: 'gems_diamond_6.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_G1: {
		path: 'gems/',
		mtl: 'gems_emerald_1.mtl',
		obj: 'gems_emerald_1.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_G2: {
		path: 'gems/',
		mtl: 'gems_emerald_2.mtl',
		obj: 'gems_emerald_2.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_G3: {
		path: 'gems/',
		mtl: 'gems_emerald_3.mtl',
		obj: 'gems_emerald_3.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_G4: {
		path: 'gems/',
		mtl: 'gems_emerald_4.mtl',
		obj: 'gems_emerald_4.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_G5: {
		path: 'gems/',
		mtl: 'gems_emerald_5.mtl',
		obj: 'gems_emerald_5.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_G6: {
		path: 'gems/',
		mtl: 'gems_emerald_6.mtl',
		obj: 'gems_emerald_6.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_E1: {
		path: 'gems/',
		mtl: 'gems_opal_1.mtl',
		obj: 'gems_opal_1.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_E2: {
		path: 'gems/',
		mtl: 'gems_opal_2.mtl',
		obj: 'gems_opal_2.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_E3: {
		path: 'gems/',
		mtl: 'gems_opal_3.mtl',
		obj: 'gems_opal_3.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_E4: {
		path: 'gems/',
		mtl: 'gems_opal_4.mtl',
		obj: 'gems_opal_4.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_E5: {
		path: 'gems/',
		mtl: 'gems_opal_5.mtl',
		obj: 'gems_opal_5.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_E6: {
		path: 'gems/',
		mtl: 'gems_opal_6.mtl',
		obj: 'gems_opal_6.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_R1: {
		path: 'gems/',
		mtl: 'gems_ruby_1.mtl',
		obj: 'gems_ruby_1.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_R2: {
		path: 'gems/',
		mtl: 'gems_ruby_2.mtl',
		obj: 'gems_ruby_2.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_R3: {
		path: 'gems/',
		mtl: 'gems_ruby_3.mtl',
		obj: 'gems_ruby_3.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_R4: {
		path: 'gems/',
		mtl: 'gems_ruby_4.mtl',
		obj: 'gems_ruby_4.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_R5: {
		path: 'gems/',
		mtl: 'gems_ruby_5.mtl',
		obj: 'gems_ruby_5.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_R6: {
		path: 'gems/',
		mtl: 'gems_ruby_6.mtl',
		obj: 'gems_ruby_6.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_B1: {
		path: 'gems/',
		mtl: 'gems_sapphire_1.mtl',
		obj: 'gems_sapphire_1.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_B2: {
		path: 'gems/',
		mtl: 'gems_sapphire_2.mtl',
		obj: 'gems_sapphire_2.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_B3: {
		path: 'gems/',
		mtl: 'gems_sapphire_3.mtl',
		obj: 'gems_sapphire_3.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_B4: {
		path: 'gems/',
		mtl: 'gems_sapphire_4.mtl',
		obj: 'gems_sapphire_4.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_B5: {
		path: 'gems/',
		mtl: 'gems_sapphire_5.mtl',
		obj: 'gems_sapphire_5.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_B6: {
		path: 'gems/',
		mtl: 'gems_sapphire_6.mtl',
		obj: 'gems_sapphire_6.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_Y1: {
		path: 'gems/',
		mtl: 'gems_topaz_1.mtl',
		obj: 'gems_topaz_1.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_Y2: {
		path: 'gems/',
		mtl: 'gems_topaz_2.mtl',
		obj: 'gems_topaz_2.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_Y3: {
		path: 'gems/',
		mtl: 'gems_topaz_3.mtl',
		obj: 'gems_topaz_3.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_Y4: {
		path: 'gems/',
		mtl: 'gems_topaz_4.mtl',
		obj: 'gems_topaz_4.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_Y5: {
		path: 'gems/',
		mtl: 'gems_topaz_5.mtl',
		obj: 'gems_topaz_5.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	GEM_Y6: {
		path: 'gems/',
		mtl: 'gems_topaz_6.mtl',
		obj: 'gems_topaz_6.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOOR_YELLOW_WAVES: {
		path: 'floors/',
		mtl: 'floor_yellow_waves.mtl',
		obj: 'floor_yellow_waves.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOOR_YELLOW_STRIPES: {
		path: 'floors/',
		mtl: 'floor_yellow_stripes.mtl',
		obj: 'floor_yellow_stripes.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOOR_GREEN_WAVES: {
		path: 'floors/',
		mtl: 'floor_green_waves.mtl',
		obj: 'floor_green_waves.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOOR_GREEN_STRIPES: {
		path: 'floors/',
		mtl: 'floor_green_stripes.mtl',
		obj: 'floor_green_stripes.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOOR_BLUE_WAVES: {
		path: 'floors/',
		mtl: 'floor_blue_waves.mtl',
		obj: 'floor_blue_waves.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOOR_BLUE_STRIPES: {
		path: 'floors/',
		mtl: 'floor_blue_stripes.mtl',
		obj: 'floor_blue_stripes.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOOR_WHITE_WAVES: {
		path: 'floors/',
		mtl: 'floor_white_waves.mtl',
		obj: 'floor_white_waves.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOOR_WHITE_STRIPES: {
		path: 'floors/',
		mtl: 'floor_white_stripes.mtl',
		obj: 'floor_white_stripes.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOOR_RED_WAVES: {
		path: 'floors/',
		mtl: 'floor_red_waves.mtl',
		obj: 'floor_red_waves.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	FLOOR_RED_STRIPES: {
		path: 'floors/',
		mtl: 'floor_red_stripes.mtl',
		obj: 'floor_red_stripes.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	TOWER_UNKNOWN: {
		path: 'towers/',
		mtl: 'tower_unknown.mtl',
		obj: 'tower_unknown.obj',
		transform: {
			scale: { x: 1.0, y: 1.0, z: 1.0 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 }
		}
	},
	SILVER: {
		path: 'towers/',
		mtl: 'tower_silver.mtl',
		obj: 'tower_silver.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	PINK_DIAMOND: {
		path: 'towers/',
		mtl: 'tower_pink_diamond.mtl',
		obj: 'tower_pink_diamond.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	MALACHITE: {
		path: 'towers/',
		mtl: 'tower_malachite.mtl',
		obj: 'tower_malachite.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	ASTERIATED_RUBY: {
		path: 'towers/',
		mtl: 'tower_asteriated_ruby.mtl',
		obj: 'tower_asteriated_ruby.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	BLOODSTONE: {
		path: 'towers/',
		mtl: 'tower_bloodstone.mtl',
		obj: 'tower_bloodstone.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	QUARTZ: {
		path: 'towers/',
		mtl: 'tower_quartz.mtl',
		obj: 'tower_quartz.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	Jade: {
		path: 'towers/',
		mtl: 'tower_jade.mtl',
		obj: 'tower_jade.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	DARK_EMERALD: {
		path: 'towers/',
		mtl: 'tower_dark_emerald.mtl',
		obj: 'tower_dark_emerald.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	Gold: {
		path: 'towers/',
		mtl: 'tower_gold.mtl',
		obj: 'tower_gold.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	PARAIBA_TOURMALINE: {
		path: 'towers/',
		mtl: 'tower_paraiba_tourmaline.mtl',
		obj: 'tower_paraiba_tourmaline.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	CHRYSOBERYL_CATS_EYE: {
		path: 'towers/',
		mtl: 'tower_chrysoberyl_cats_eye.mtl',
		obj: 'tower_chrysoberyl_cats_eye.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	DEEPSEA_PEARL: {
		path: 'towers/',
		mtl: 'tower_deepsea_pearl.mtl',
		obj: 'tower_deepsea_pearl.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	YELLOW_SAPPHIRE: {
		path: 'towers/',
		mtl: 'tower_yellow_sapphire.mtl',
		obj: 'tower_yellow_sapphire.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	SILVER_KNIGHT: {
		path: 'towers/',
		mtl: 'tower_silver_knight.mtl',
		obj: 'tower_silver_knight.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	VIVID_MALACHITE: {
		path: 'towers/',
		mtl: 'tower_vivid_malachite.mtl',
		obj: 'tower_vivid_malachite.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	URANIUM_238: {
		path: 'towers/',
		mtl: 'tower_uranium_238.mtl',
		obj: 'tower_uranium_238.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	VOLCANO: {
		path: 'towers/',
		mtl: 'tower_volcano.mtl',
		obj: 'tower_volcano.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	CHARMING_LAZURITE: {
		path: 'towers/',
		mtl: 'tower_charming_lazurite.mtl',
		obj: 'tower_charming_lazurite.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	LUCKY_CHINESE_JADE: {
		path: 'towers/',
		mtl: 'tower_lucky_chinese_jade.mtl',
		obj: 'tower_lucky_chinese_jade.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	GREY_JADE: {
		path: 'towers/',
		mtl: 'tower_grey_jade.mtl',
		obj: 'tower_grey_jade.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	EMERALD_GOLEM: {
		path: 'towers/',
		mtl: 'tower_emerald_golem.mtl',
		obj: 'tower_emerald_golem.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	EGYPT_GOLD: {
		path: 'towers/',
		mtl: 'tower_egypt_gold.mtl',
		obj: 'tower_egypt_gold.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	RED_CORAL: {
		path: 'towers/',
		mtl: 'tower_red_coral.mtl',
		obj: 'tower_red_coral.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	ELABORATELY_CARVED_TOURMALINE: {
		path: 'towers/',
		mtl: 'tower_elaborately_carved_tourmaline.mtl',
		obj: 'tower_elaborately_carved_tourmaline.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	HUGE_PINK_DIAMOND: {
		path: 'towers/',
		mtl: 'tower_huge_pink_diamond.mtl',
		obj: 'tower_huge_pink_diamond.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	URANIUM_235: {
		path: 'towers/',
		mtl: 'tower_uranium_235.mtl',
		obj: 'tower_uranium_235.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	MONKEY_KING_JADE: {
		path: 'towers/',
		mtl: 'tower_monkey_king_jade.mtl',
		obj: 'tower_monkey_king_jade.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	ANTIQUE_BLOODSTONE: {
		path: 'towers/',
		mtl: 'tower_antique_bloodstone.mtl',
		obj: 'tower_antique_bloodstone.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	STAR_OF_ADAM: {
		path: 'towers/',
		mtl: 'tower_star_of_adam.mtl',
		obj: 'tower_star_of_adam.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	CARMEN_LUCIA: {
		path: 'towers/',
		mtl: 'tower_carmen_lucia.mtl',
		obj: 'tower_carmen_lucia.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	KOHINOOR_DIAMOND: {
		path: 'towers/',
		mtl: 'tower_kohinoor_diamond.mtl',
		obj: 'tower_kohinoor_diamond.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	THE_CROWN_PRINCE: {
		path: 'towers/',
		mtl: 'tower_the_crown_prince.mtl',
		obj: 'tower_the_crown_prince.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	DEPLEMENTED_KYPARIUM: {
		path: 'towers/',
		mtl: 'tower_depleted_kyparium.mtl',
		obj: 'tower_depleted_kyparium.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	AGATE: {
		path: 'towers/',
		mtl: 'tower_agate.mtl',
		obj: 'tower_agate.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	OBSIDIAN: {
		path: 'towers/',
		mtl: 'tower_obsidian.mtl',
		obj: 'tower_obsidian.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	EUDIALYTE: {
		path: 'towers/',
		mtl: 'tower_eudialyte.mtl',
		obj: 'tower_eudialyte.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	ZIRCON: {
		path: 'towers/',
		mtl: 'tower_zircon.mtl',
		obj: 'tower_zircon.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	THE_BURNING_STONE: {
		path: 'towers/',
		mtl: 'tower_the_burning_stone.mtl',
		obj: 'tower_the_burning_stone.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
	WINGS_STONE: {
		path: 'towers/',
		mtl: 'tower_wings_stone.mtl',
		obj: 'tower_wings_stone.obj',
		transform: {
			scale: { x: 1, y: 1, z: 1 },
			offset: { x: 0, y: 0, z: 0 },
			rotation: { x: 0, y: 0, z: 0 },
		}
	},
};
