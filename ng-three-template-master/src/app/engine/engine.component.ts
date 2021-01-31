import { Component, OnInit } from '@angular/core';
import { AssetLoader } from './helpers/asset-loader';
import { Assets, IAssetsLoaded } from './data/assets';
import { Statics } from './services/statics.service';

@Component({
	selector: 'app-engine',
	templateUrl: './engine.component.html'
})
export class EngineComponent implements OnInit {

	$assets: IAssetsLoaded;
	$assetLoader: AssetLoader;

	public constructor() {
		this.$assetLoader = new AssetLoader(Assets, false);
	}

	public ngOnInit(): void {

		this.$assetLoader.loadAssets().then((assets: IAssetsLoaded) => {
			Statics.LOADED_ASSETS = assets; // IMPORTANT

			this.$assets = Statics.LOADED_ASSETS;
		});
	}
}
