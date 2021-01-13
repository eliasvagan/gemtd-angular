import * as THREE from 'three-full';
import { GameObject } from './game-object';
import { Materials } from '../enums/materials';
import { Meshes } from '../enums/meshes';
import * as GAMECONFIG from '../../json/gameconfig.json';
import {Statics} from '../services/statics.service';


export class IStaticMapTemplate {
	name: string;
	floor: THREE.Object3D;
	blocks: {
		assetName: string;
		rotation: number;
		position: {
			x: number, y: number, z: number
		};
		scale: number;
	}[];
	protectedAreas: {
		x0: number; x1: number;
		y0: number; y1: number;
	}[];
	assetGroups: {
		assets: string[];
		spawnParameters: {
			count: number;
			distanceMin: number;
			distanceMax: number;
			rotationDiff: number;
			scaleMin: number;
			scaleMax: number;
			posYMin: number;
			posYMax: number;
		}
	}[];
}

export class StaticMap extends THREE.Group {


	constructor() {
		super();
		this.generateMap(1);
	}

	private generateMap(mapIndex: number) {
		const assetNames = {
			trees: [
				'TREE_PINEDEFAULTA', 'TREE_PINEDEFAULTB', 'TREE_PINEGROUNDA',
				'TREE_PINEGROUNDB', 'TREE_PINEROUNDA', 'TREE_PINEROUNDB',
				'TREE_PINEROUNDC', 'TREE_PINEROUNDD', 'TREE_PINEROUNDE',
				'TREE_PINEROUNDF', 'TREE_PINESMALLA', 'TREE_PINESMALLB',
				'TREE_PINESMALLC', 'TREE_PINESMALLD', 'TREE_PINETALLA',
				'TREE_PINETALLA_DETAILED', 'TREE_PINETALLB', 'TREE_PINETALLB_DETAILED',
				'TREE_PINETALLC', 'TREE_PINETALLC_DETAILED', 'TREE_PINETALLD',
				'TREE_PINETALLD_DETAILED',
			],
			rocks: [
				'STONE_LARGEA', 'STONE_LARGEB', 'STONE_LARGEC', 'STONE_LARGED', 'STONE_LARGEE', 'STONE_LARGEF',
				'STONE_SMALLA', 'STONE_SMALLB', 'STONE_SMALLC', 'STONE_SMALLD', 'STONE_SMALLE', 'STONE_SMALLF',
				'STONE_SMALLFLATA', 'STONE_SMALLFLATB', 'STONE_SMALLFLATC', 'STONE_SMALLG', 'STONE_SMALLH',
				'STONE_SMALLI', 'STONE_SMALLTOPA', 'STONE_SMALLTOPB', 'STONE_TALLA', 'STONE_TALLB',
				'STONE_TALLC', 'STONE_TALLD', 'STONE_TALLE', 'STONE_TALLF', 'STONE_TALLG', 'STONE_TALLH',
				'STONE_TALLI', 'STONE_TALLJ', 'ROCK_LARGEA', 'ROCK_LARGEB', 'ROCK_LARGEC', 'ROCK_LARGED',
				'ROCK_LARGEE', 'ROCK_LARGEF', 'ROCK_SMALLA', 'ROCK_SMALLB', 'ROCK_SMALLC', 'ROCK_SMALLD',
				'ROCK_SMALLE', 'ROCK_SMALLF', 'ROCK_SMALLFLATA', 'ROCK_SMALLFLATB', 'ROCK_SMALLFLATC',
				'ROCK_SMALLG', 'ROCK_SMALLH', 'ROCK_SMALLI', 'ROCK_SMALLTOPA', 'ROCK_SMALLTOPB', 'ROCK_TALLA',
				'ROCK_TALLB', 'ROCK_TALLC', 'ROCK_TALLD', 'ROCK_TALLE', 'ROCK_TALLF', 'ROCK_TALLG', 'ROCK_TALLH',
				'ROCK_TALLI', 'ROCK_TALLJ'
			],
			vegetation: [
				'GRASS_LARGE', 'GRASS_LEAFS', 'GRASS_LEAFSLARGE', 'STUMP_OLD', 'LOG',
				'FLOWER_REDA', 'FLOWER_REDB', 'FLOWER_REDC',
				'FLOWER_PURPLEA', 'FLOWER_PURPLEB', 'FLOWER_PURPLEC',
			],
			floors: [
				'CLIFF_BLOCK_STONE', 'CLIFF_BLOCK_ROCK', 'FLOOR_YELLOW_WAVES'
			]
		};
		const floorRadius = 40;
		const floorHeight = -0.5;

		const maps: IStaticMapTemplate[] = [
			{
				name: 'Arena 1',
				floor: assetNames.floors[0],
				blocks: [
					{
						assetName: 'CLIFF_BLOCKCAVE_STONE',
						rotation: 0,
						position: { x: 1, y: floorHeight, z: -3.5 },
						scale: 10,
					}, {
						assetName: 'CLIFF_BLOCKSLOPE_STONE',
						rotation: Math.PI / 2,
						position: { x: 6, y: floorHeight, z: -3.5 },
						scale: 10,
					}, {
						assetName: 'CLIFF_TOP_STONE',
						rotation: -Math.PI / 2,
						position: { x: -4, y: floorHeight, z: -3.5 },
						scale: 10,
					}, {
						assetName: assetNames.floors[0], // Floor directly underneath game board
						rotation: 0,
						position: { x: 5, y: -12, z: 5 },
						scale: 24,
					}, {
						assetName: assetNames.floors[0], // Enemy entrance
						rotation: 0,
						position: { x: 1, y: -4, z: -3 },
						scale: 8,
					}, {
						assetName: assetNames.floors[0], // Enemy finish line
						rotation: 0,
						position: { x: 13, y: -4, z: 9 },
						scale: 8,
					}, {
						assetName: 'TENT_DETAILEDCLOSED', // Enemy finish line
						rotation: Math.PI / 2,
						position: { x: 13, y: 0, z: 9 },
						scale: 8,
					}
				],
				protectedAreas: [
					{ x0: -2, x1: 8, y0: -8, y1: 0 }, // Hills around spawn
					{ x0: 10, x1: 18, y0: 7, y1: 12 } // Finish area
				],
				assetGroups: [
					{
						assets: assetNames.trees,
						spawnParameters: {
							count: 40,
							distanceMin: 12, // outside tiles
							distanceMax: Math.min(18, floorRadius), // within floor edge
							rotationDiff: 0.2,
							scaleMin: 2.3,
							scaleMax: 4.5,
							posYMin: 0,
							posYMax: 0
						}
					}, {
						assets: assetNames.rocks,
						spawnParameters: {
							count: 20,
							distanceMin: 9, // outside tiles
							distanceMax: Math.min(13, floorRadius), // within floor edge
							rotationDiff: 0.2,
							scaleMin: 0.8,
							scaleMax: 2.4,
							posYMin: -1.0,
							posYMax: -0.6
						}
					}, {
						assets: assetNames.vegetation,
						spawnParameters: {
							count: 30,
							distanceMin: 7, // outside tiles
							distanceMax: Math.min(12, floorRadius), // within floor edge
							rotationDiff: 0.1,
							scaleMin: 0.8,
							scaleMax: 2.4,
							posYMin: 0,
							posYMax: 0
						}
					}
				]
			},
			{
				name: 'Arena 2',
				floor: assetNames.floors[2],
				blocks: [
					{
						assetName: 'ARENA_TEMPLE_A',
						rotation: Math.PI,
						position: { x: 5.0, y: 0.15, z: 5.0 },
						scale: 1,
					}
				],
				protectedAreas: [],
				assetGroups: [],
			}
		];

		const chosenMap = maps[mapIndex];

		// Add big floor
		{
			const baseFloorTemplate = Statics.LOADED_ASSETS[chosenMap.floor].model;
			const baseFloor = new THREE.Mesh(
				baseFloorTemplate.geometry,
				baseFloorTemplate.material
			);

			baseFloor.receiveShadow = true;
			baseFloor.position.set(5, -1 + floorHeight, 5);
			baseFloor.scale.set(floorRadius, 1, floorRadius);

			this.add(baseFloor);
		}

		// Add randomly spawned floor items
		for (const assetGroup of chosenMap.assetGroups) {
			for (let i = 0; i < assetGroup.spawnParameters.count; i++) {

				let asset: THREE.Mesh;
				const assetIndex = Math.floor(assetGroup.assets.length * Math.random());
				const assetName = assetGroup.assets[assetIndex];
				try {
					const template = Statics.LOADED_ASSETS[assetName].model;
					asset = new THREE.Mesh(template.geometry, template.material);
				} catch (err) {
					asset = new THREE.Mesh(
						Meshes.CubeRed,
						Materials.WireFrameRed,
					);
					console.error(`Failed to load asset: ${assetName}`, err);
				}

				const {
					distanceMin, distanceMax, rotationDiff,
					scaleMin, scaleMax, posYMin, posYMax
				} = assetGroup.spawnParameters;

				// Position

				const rand1 =  (Math.random() < 0.5 ? 1 : -1) * ((Math.random() - 0.5) * (distanceMax - distanceMin) + distanceMin);
				const rand2 =  (Math.random() - 0.5) * distanceMax;
				const coinFlip = Math.random() < 0.5;
				const posX = coinFlip ? rand1 : rand2;
				const posZ = coinFlip ? rand2 : rand1;
				const posY = Math.random() * (posYMax - posYMin) + posYMin;

				asset.position.set(
					posX + 6,
					posY + floorHeight,
					posZ + 6,
				);

				// Rotation
				asset.rotation.set(
					(Math.random() - 0.5) * rotationDiff,
					(Math.random() - 0.5) * 5,
					(Math.random() - 0.5) * rotationDiff,
				);

				// Scale
				const rs = Math.random() * (scaleMax - scaleMin) + scaleMin;
				asset.scale.set(rs, rs, rs);

				// Shadows
				asset.castShadow = true;

				// Handle no-spawn zones
				const legalPosition = chosenMap.protectedAreas.reduce((legal, area) => {
					const { x0, x1, y0, y1 } = area;
					const { x, z } = asset.position;
					return !legal ? false : (
						x <= x0 || x > x1 || z <= y0 || z > y1
					);
				}, true);

				if (legalPosition) {
					this.add(asset);
				}
			}
	}

		// Add tunnel for spawn
		chosenMap.blocks.forEach(block => {
			const { model } = Statics.LOADED_ASSETS[block.assetName];
			const obj3d = model.clone();

			const { x, y, z } = block.position;
			obj3d.scale.multiplyScalar(block.scale);
			obj3d.position.set(x, y, z);
			obj3d.rotation.set(0, block.rotation, 0);

			obj3d.receiveShadow = true;
			obj3d.castShadow = true;

			this.add(obj3d);
		});


		// TODO: Add lights to maps array
		// Sunlight
	 {
	 		const dirLight = new THREE.DirectionalLight( 0xf2f2ee, 0.8 );
			 dirLight.position.set( -20, 80, 40 );
			 dirLight.lookAt(0, 0, 20);
			 dirLight.name = 'dirLight';
			 dirLight.castShadow = true;
			 dirLight.shadow.mapSize.width = 4096;
			 dirLight.shadow.mapSize.height = 4096;

			 const d = GAMECONFIG.rendering.cameraSize * 2 + 4;
			 dirLight.shadow.camera.left = -d;
			 dirLight.shadow.camera.right = d;
			 dirLight.shadow.camera.top = d;
			 dirLight.shadow.camera.bottom = -d;
			 dirLight.shadow.camera.near = 0.5;
			 dirLight.shadow.camera.far = 1000;
			 dirLight.shadow.radius = 1;
			 dirLight.shadow.bias = 0.000001;

			 this.add( dirLight );

			 const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.5 );
			 hemiLight.color.set(new THREE.Color('hsl(60%, 75%, 50%)'));
			 hemiLight.groundColor.set(new THREE.Color('hsl(9.5%, 50%, 50%)'));
			 hemiLight.position.set( 1, 500, 1 );

			 this.add(hemiLight);
		}
	}

	add(obj: THREE.Object3D) {
		super.add(obj);
	}
}
