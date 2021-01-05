import * as THREE from 'three-full';
import { GameObject } from './game-object';
import { Materials } from '../enums/materials';
import { Meshes } from '../enums/meshes';

export class StaticMap extends THREE.Group {
	constructor() {
		super();
		this.generateMap();
	}

	private generateMap() {

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
				'GRASS_LEAFS', 'GRASS_LEAFSLARGE'
			],
			floors: [
				'CLIFF_BLOCK_STONE', 'CLIFF_BLOCK_ROCK',
			]
		};


		{ // Add base floor

			const floorRadius = 40;
			const floorHeight = -0.5;
			const baseFloorTemplate = GameObject.LOADED_ASSETS[assetNames.floors[1]].model;
			const baseFloor = new THREE.Mesh(
				baseFloorTemplate.geometry,
				baseFloorTemplate.material
			);

			baseFloor.receiveShadow = true;
			baseFloor.position.set(5, -1 + floorHeight, 5);
			baseFloor.scale.set(floorRadius, 1, floorRadius);

			this.add(baseFloor);

			// Add randomly spawned floor items

			for (const assetGroup of [
				{
					assets: assetNames.trees,
					spawnParameters: {
						count: 30,
						distanceMin: 11, // outside tiles
						distanceMax: Math.min(18, floorRadius), // within floor edge
						rotationDiff: 0.2,
						scaleMin: 2.3,
						scaleMax: 3.5,
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
						count: 20,
						distanceMin: 9, // outside tiles
						distanceMax: Math.min(13, floorRadius), // within floor edge
						rotationDiff: 0.2,
						scaleMin: 0.8,
						scaleMax: 2.4,
						posYMin: 0,
						posYMax: 0
					}
				}
			]) {
				for (let i = 0; i < assetGroup.spawnParameters.count; i++) {

					let asset: THREE.Mesh;
					const assetIndex = Math.floor(assetGroup.assets.length * Math.random());
					const assetName = assetGroup.assets[assetIndex];
					try {
						const template = GameObject.LOADED_ASSETS[assetName].model;
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
						(Math.random() - 0.5) * rotationDiff,
						(Math.random() - 0.5) * rotationDiff,
					);

					// Scale
					const rs = Math.random() * (scaleMax - scaleMin) + scaleMin;
					asset.scale.set(rs, rs, rs);

					// Shadows
					asset.castShadow = true;

					this.add(asset);
				}
		}


		 { // Add tunnel for spawn
			const blocks = [
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
				}
			];

			blocks.forEach(block => {
				const { model } = GameObject.LOADED_ASSETS[block.assetName];
				const obj3d = model.clone();

				const { x, y, z } = block.position;
				obj3d.scale.multiplyScalar(block.scale);
				obj3d.position.set(x, y, z);
				obj3d.rotation.set(0, block.rotation, 0);

				obj3d.receiveShadow = true;
				obj3d.castShadow = true;

				this.add(obj3d);
			});
		}
		 { // Sunlight
			const dirLight = new THREE.DirectionalLight( 0xf2f2ee, 0.8 );
			dirLight.position.set( -20, 80, 40 );
			dirLight.lookAt(0, 0, 20);
			// dirLight.position.multiplyScalar( 50 );
			dirLight.name = 'dirLight';
			// dirLight.shadowCameraVisible = true;

			dirLight.castShadow = true;

			dirLight.shadow.mapSize.width = 4096;
			dirLight.shadow.mapSize.height = 4096;
			const d = 16;

			dirLight.shadow.camera.left = -d;
			dirLight.shadow.camera.right = d;
			dirLight.shadow.camera.top = d;
			dirLight.shadow.camera.bottom = -d;

		 dirLight.shadow.camera.near = 0.5;
		 dirLight.shadow.camera.far = 1000;
		 dirLight.shadow.radius = 1;
			dirLight.shadow.bias = 0.00004;

			this.add( dirLight );

			const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
			hemiLight.color.set(new THREE.Color('hsl(60%, 75%, 50%)'));
			hemiLight.groundColor.set(new THREE.Color('hsl(9.5%, 50%, 50%)'));
			hemiLight.position.set( 0, 500, 0 );

			this.add(hemiLight);
		}
	}

		/*
		for (let i = 0; i < 20; i++) {
			const asset = GameObject.LOADED_ASSETS[assetNames.trees[( Math.random() * assetNames.trees.length )]].model;
			const tree = new THREE.Mesh(asset.geometry, asset.material);
			tree.position.set(-1, 0, -3);
			tree.scale.set(4, 4, 4);
			tree.rotation.set(0, 0, 0);
			this.add(tree);
		}
		 */

	}

	add(obj: THREE.Object3D) {
		super.add(obj);
	}
}
