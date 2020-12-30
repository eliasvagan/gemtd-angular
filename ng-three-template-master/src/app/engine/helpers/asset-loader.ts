import { ILoadedAssets, IUnloadedAssets } from '../data-models/assets-model';
import * as THREE from 'three';
import { Materials } from '../enums/materials';
import { Geometries } from '../enums/geometries';
import { OBJLoader, MTLLoader } from 'three-full';

const TEST_ASSETS: ILoadedAssets = {
  ASSET1_NAME: {
    normal: new THREE.Mesh(
      Geometries.Cube,
      Materials.WireFrameBlue
    ),
    hovered: new THREE.Mesh(
      Geometries.Cube,
      Materials.WireFrameBlue
    )
  }
};

const MODELS_PATH = '/assets/models/';

export class AssetLoader {
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
            console.log(xhr.loaded / xhr.total * 100 + '%');
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

    const loaded = {};

    for (const [name, meshMap] of meshMapTuples) {
      loaded[name] = {
        normal: await loadAsset(meshMap.normal),
        hovered: await loadAsset(meshMap.hovered),
      };
      loadedCount++;
      console.log(`Loaded ${loadedCount} of ${totalCount}`);
    }
    return loaded;
    // return setTimeout(() => TEST_ASSETS, 400);
  }
}
