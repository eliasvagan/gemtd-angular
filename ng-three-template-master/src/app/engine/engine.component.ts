import { Component, OnInit } from '@angular/core';
import { AssetLoader } from './helpers/asset-loader';
import { Assets, IAssetsLoaded } from './enums/assets';

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
			this.$assets = assets;
		});
	}


}
