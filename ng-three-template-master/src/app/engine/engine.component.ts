import { Component, OnInit } from '@angular/core';
import { AssetLoader } from './helpers/asset-loader';
import { Assets, IAssetsLoaded } from './enums/assets';

@Component({
	selector: 'app-engine',
	templateUrl: './engine.component.html'
})
export class EngineComponent implements OnInit {

	$assets: IAssetsLoaded;

	public constructor() {
	}

	public ngOnInit(): void {

		const debugging = false;

		const assetLoader = new AssetLoader(debugging);

		assetLoader.loadAssets(Assets).then((assets: IAssetsLoaded) => {
			this.$assets = assets;
		});
	}


}
