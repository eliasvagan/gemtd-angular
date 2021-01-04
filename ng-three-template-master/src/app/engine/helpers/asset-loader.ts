import { ILoadedAssets, IUnloadedAssets } from '../data-models/assets-model';
import { OBJLoader, MTLLoader, Object3D, Group } from 'three-full';
import { Meshes } from '../enums/meshes';
import { IAssets } from '../enums/assets';

const MODELS_PATH = '/assets/models/';

export class AssetLoader {
  private debugging: boolean;

  constructor(debugging: boolean = false) {
    this.debugging = debugging;
  }


	async loadAssets(assets: IAssets): Promise<Object3D[]> {

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

		const assetPromises = Object.entries(assets)
				.map(([assetName, asset]) => loadAsset(asset));

		const totalAssets = assetPromises.length;

		return Promise.all(assetPromises);
	}

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

      /* const meshMapLoaded = Object.entries(meshMap)
        .reduce(async (acc, [ state, fileName ]) => {
          console.log(state, fileName);
          const loadedAsset = await loadAsset(fileName);
          return {[state]: loadedAsset, ...acc};
        }, {});
      console.log(meshMapLoaded);

      loaded[name] = meshMapLoaded;
      console.log(loaded);
      */

      /* const repl = Object.entries(meshMap)
        .reduce((acc, [key, val]) => async () => {
          console.log('key: ', key, val);
          return {...acc, [key]: await loadAsset(val)};
        }, {});
      console.log(meshMap);
      console.log(loaded[name]);
      console.log(repl);

      */

      loadedCount++;
      console.log(`Loaded ${loadedCount} of ${totalCount}`);
    }
    return loaded;
  }
}
