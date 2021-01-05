import * as THREE from 'three-full';
import { GameObject } from './game-object';
import { of } from 'rxjs';

export class StaticMap extends THREE.Group {
	constructor() {
		super();
		this.generateMap();
	}

	private generateMap() {

		// TODO: Complete map generation

		const assetNames = {
			trees: [
				'TREE_PLATEAU', 'TREE_PLATEAU_DARK', 'TREE_SIMPLE_FALL', 'TREE_SMALL', 'TREE_SMALL_DARK',
				'TREE_SMALL_FALL', 'TREE_TALL', 'TREE_TALL_DARK', 'TREE_TALL_FALL', 'TREE_THIN',
				'TREE_THIN_DARK', 'TREE_THIN_FALL',
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
			const template = GameObject.LOADED_ASSETS[assetNames.floors[0]].model;
			const baseFloor = new THREE.Mesh(
				template.geometry,
				template.material
			);

			baseFloor.receiveShadow = true;
			baseFloor.position.set(5, -1, 5);
			baseFloor.scale.set(floorRadius, 1, floorRadius);

			this.add(baseFloor);

			// Add randomly spawned floor items

			for (const assetGroup of [
				{
					assets: assetNames.trees,
					spawnParameters: {
						count: 20,
						distanceMin: 11, // outside tiles
						distanceMax: 18, // within floor edge
						rotationDiff: 0.2,
						scaleMin: 2.3,
						scaleMax: 3.5
					}
				}, {
					assets: assetNames.vegetation,
					spawnParameters: {
						count: 40,
						distanceMin: 9, // outside tiles
						distanceMax: Math.min(13, floorRadius), // within floor edge
						rotationDiff: 0.2,
						scaleMin: 0.8,
						scaleMax: 2.4
					}
				}
			]) {
				for (let i = 0; i < assetGroup.spawnParameters.count; i++) {
					const ri = Math.floor(assetGroup.assets.length * Math.random());
					const template = GameObject.LOADED_ASSETS[assetGroup.assets[ri]].model;
					const asset = new THREE.Mesh(template.geometry, template.material);

					const { distanceMin, distanceMax, rotationDiff, scaleMin, scaleMax } = assetGroup.spawnParameters;

					// Position

					const rand1 =  (Math.random() < 0.5 ? 1 : -1) * ((Math.random() - 0.5) * (distanceMax - distanceMin) + distanceMin);
					const rand2 =  (Math.random() - 0.5) * distanceMax;
					const coinFlip = Math.random() < 0.5;
					const posx = coinFlip ? rand1 : rand2;
					const posy = coinFlip ? rand2 : rand1;

					asset.position.set(
						posx + 6,
						0,
						posy + 6,
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
			const { model } = GameObject.LOADED_ASSETS.CLIFF_BLOCKCAVE_STONE;

			const s = 5;
			const tunnel = model.clone();
			tunnel.receiveShadows = true;
			tunnel.scale.set(s, s, s);
			tunnel.position.set(1, 0, -3.5);

			this.add(tunnel);
		}
		 /* { TODO: FIx this one!
			const blocks = [
				{
					assetName: 'CLIFF_BLOCKCAVE_STONE',
					rotation: 0,
					position: { x: 1, y: 0, z: -3.5 },
				},
				{
					assetName: 'CLIFF_BLOCKCAVE_STONE',
					rotation: 0,
					position: { x: 2, y: 0, z: -3.5 },
				}
			];

			blocks.forEach(block => {
				const { model } = GameObject.LOADED_ASSETS[block.assetName];
				const obj3d = model.clone();
				obj3d.scale.set(5);
				const { x, y, z } = block.position;
				obj3d.position.set(x, y, z);
				obj3d.receiveShadows = true;
				obj3d.castShadow = true;
				this.add(obj3d);
			});
		} */

		{ // Sunlight
			const dirLight = new THREE.DirectionalLight( 0xffffff, 1.2 );
			dirLight.position.set( -20, 80, 40 );
			dirLight.lookAt(0, 0, 20);
			// dirLight.position.multiplyScalar( 50 );
			dirLight.name = 'dirLight';
			// dirLight.shadowCameraVisible = true;

			dirLight.castShadow = true;

			dirLight.shadow.mapSize.width = 4096;
			dirLight.shadow.mapSize.height = 4096;
			const d = 300;

			dirLight.shadow.camera.left = -d;
			dirLight.shadow.camera.right = d;
			dirLight.shadow.camera.top = d;
			dirLight.shadow.camera.bottom = -d;

		 	dirLight.shadow.camera.near = 0.5;
		 	dirLight.shadow.camera.far = 1000;

	 		dirLight.shadowBias = -0.0001;
			dirLight.shadowDarkness = 0.15;
			this.add( dirLight );
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
