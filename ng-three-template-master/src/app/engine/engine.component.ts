import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
    const assetLoader = new AssetLoader();
    assetLoader.loadAssets(GameObjectMeshMaps).then((assets: ILoadedAssets) => {
      this.$assets = assets;
    });
  }


}
