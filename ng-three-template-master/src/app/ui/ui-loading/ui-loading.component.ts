import { Component, Input, OnInit } from '@angular/core';
import { AssetLoader } from '../../engine/helpers/asset-loader';

@Component({
	selector: 'app-ui-loading',
	templateUrl: './ui-loading.component.html',
	styleUrls: ['./ui-loading.component.scss']
})
export class UiLoadingComponent implements OnInit {

	@Input()
	public assetLoader: AssetLoader;

	public constructor() {
	}

	public ngOnInit(): void {
		console.log('Loading bar initialized with asset loader: ', this.assetLoader);
	}

}
