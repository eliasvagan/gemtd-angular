import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AssetLoader } from '../../engine/helpers/asset-loader';

@Component({
	selector: 'app-ui-loading',
	templateUrl: './ui-loading.component.html',
	styleUrls: ['./ui-loading.component.scss']
})
export class UiLoadingComponent implements OnInit {

	@Input()
	public assetLoader: AssetLoader;

	@ViewChild('loadingBar', {static: false})
	public loadingBar: ElementRef<HTMLDivElement>;

	public constructor() {
	}

	public ngOnInit(): void {
		console.log(this.assetLoader);
	}

}
