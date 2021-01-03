import { ILoadedAssets, IUnloadedAssets } from '../data-models/assets-model';
import { OBJLoader, MTLLoader } from 'three-full';
import { Meshes } from '../enums/meshes';

const MODELS_PATH = '/assets/models/';

export class AssetLoader {
  private debugging: boolean;

  constructor(debugging: boolean = false) {
    this.debugging = debugging;
  }

  async loadAssets(meshMaps: IUnloadedAssets): Promise<ILoadedAssets> {
    async function loadAsset(name) {
      const loadMTLPromise = new Promise(
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
      return await loadMTLPromise;
    }

    const meshMapTuples = Object.entries(meshMaps);
    const totalCount = meshMapTuples.length;
    let loadedCount = 0;

    const loaded: ILoadedAssets = {};
    for (const [name, meshMap] of meshMapTuples) {
      loaded[name] = {
        normal: this.debugging ? Meshes.CubeWhite : (await loadAsset(meshMap.normal)).children[0],
        hovered: this.debugging ? Meshes.CubeRed : (await loadAsset(meshMap.hovered)).children[0],
      };
      console.log(loaded[name].normal.material);

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
