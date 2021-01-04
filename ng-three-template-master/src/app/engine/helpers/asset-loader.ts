import { OBJLoader, MTLLoader, Object3D, Group } from 'three-full';
import { IAssets, IAssetsLoaded } from '../enums/assets';

const MODELS_PATH = '/assets/models/';

export class AssetLoader {
	private debugging: boolean;

	constructor(debugging: boolean = false) {
		this.debugging = debugging;
	}


	async loadAssets(assets: IAssets): Promise<IAssetsLoaded> {

		async function loadAsset(asset): Promise<Object3D> {
			const loadMTLPromise: Promise<Group> = new Promise(
				(resolve, reject) => {
					async function loadMTLDone(materials) {
						materials.preload();

						const loadOBJPromise = new Promise((resolve, reject) => {
							function loadOBJDone(object) {
								// console.log('Successfully loaded from ', path);
								// object.children[0].material.side = 2;
								resolve(object);
							}

							function loadOBJProgress(xhr) {
								// console.log((xhr.loaded / xhr.total * 100) + '% loaded .obj');

							}

							function loadOBJFailed(error) {
								reject('Failed to load from ' + name);
							}

							const objLoader = new OBJLoader();
							objLoader.setPath(MODELS_PATH);
							objLoader.setMaterials(materials);
							return objLoader.load(asset.obj, loadOBJDone, loadOBJProgress, loadOBJFailed);
						});

						resolve(await loadOBJPromise);
					}
					function loadMTLProgress(xhr){
						// console.log((xhr.loaded / xhr.total * 100) + '% loaded .mtl');
						// console.log(xhr.loaded / xhr.total * 100 + '%');
					}
					function loadMTLFailed(error) {
						// console.log(error);
						reject('Failed to load from ' + error.target.responseURL);
					}
					const mtlLoader = new MTLLoader();
					mtlLoader.setPath(MODELS_PATH);
					return mtlLoader.load(asset.mtl, loadMTLDone, loadMTLProgress, loadMTLFailed);
				},
			);
			const { children } = await loadMTLPromise;
			return children[0];
		}

		const tuples = Object.entries(assets);
		const totalCount = tuples.length;
		let loadedCount = 0;

		const loaded: IAssetsLoaded = {};
		for (const [name, info] of tuples) {
			try {
				loaded[name] = Object.assign({
					model: await loadAsset(info),
				}, info);
			} catch (err) {
				console.error(`Failed to load asset from ${name}`, err);
			}
			// console.log(loaded[name].normal.material);

			loadedCount++;
			console.log(`Loaded ${loadedCount} of ${totalCount}`);
		}
		return loaded;
	}
	/*
	async loadAssetsOld(meshMaps: IUnloadedAssets): Promise<ILoadedAssets> {
    async function loadAsset(name): Promise<Object3D> {
      const loadMTLPromise: Promise<Group> = new Promise(
        (resolve, reject) => {
          async function loadMTLDone(materials) {
            materials.preload();

            const loadOBJPromise = new Promise((resolve, reject) => {
              function loadOBJDone(object) {
                // console.log('Successfully loaded from ', path);
                // object.children[0].material.side = 2;
                resolve(object);
              }

              function loadOBJProgress(xhr) {
                // console.log((xhr.loaded / xhr.total * 100) + '% loaded .obj');

              }

              function loadOBJFailed(error) {
                reject('Failed to load from ' + name);
              }

              const objLoader = new OBJLoader();
              objLoader.setPath(MODELS_PATH);
              objLoader.setMaterials(materials);
              return objLoader.load(name + '.obj', loadOBJDone, loadOBJProgress, loadOBJFailed);
            });

            resolve(await loadOBJPromise);
          }
          function loadMTLProgress(xhr){
            // console.log((xhr.loaded / xhr.total * 100) + '% loaded .mtl');
            // console.log(xhr.loaded / xhr.total * 100 + '%');
          }
          function loadMTLFailed(error) {
            console.log(error);
            reject('Failed to load from ' + error.target.responseURL);
          }
          const mtlLoader = new MTLLoader();
          mtlLoader.setPath(MODELS_PATH);
          return mtlLoader.load(name + '.mtl', loadMTLDone, loadMTLProgress, loadMTLFailed);
        },
      );
      const { children } = await loadMTLPromise;
      return children[0];
    }

    const meshMapTuples = Object.entries(meshMaps);
    const totalCount = meshMapTuples.length;
    let loadedCount = 0;

    const loaded: ILoadedAssets = {};
    for (const [name, meshMap] of meshMapTuples) {
      try {
        loaded[name] = {
          normal: this.debugging ? Meshes.CubeWhite : (await loadAsset(meshMap.normal)),
          hovered: this.debugging ? Meshes.CubeRed : (await loadAsset(meshMap.hovered))
        };
      } catch (err) {
        console.error(`Failed to load asset from ${meshMap.toString()}`, err);
      }
      // console.log(loaded[name].normal.material);

      loadedCount++;
      console.log(`Loaded ${loadedCount} of ${totalCount}`);
    }
    return loaded;
  }
  */

}
