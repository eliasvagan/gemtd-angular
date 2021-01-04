import { Component, OnInit } from '@angular/core';
import { GameObjectMeshMaps } from './enums/game-object-mesh-maps';
import { AssetLoader } from './helpers/asset-loader';
import { ILoadedAssets } from './data-models/assets-model';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html'
})
export class EngineComponent implements OnInit {

  $assets: ILoadedAssets;

  public constructor() {
  }

  public ngOnInit(): void {

    const debugging = false;

    const assetLoader = new AssetLoader(debugging);

    assetLoader.loadAssetsOld(GameObjectMeshMaps).then((assets: ILoadedAssets) => {
      this.$assets = assets;
    });
  }


}
