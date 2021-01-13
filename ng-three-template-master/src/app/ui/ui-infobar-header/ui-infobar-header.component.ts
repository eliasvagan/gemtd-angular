import { Component, Input, OnInit } from '@angular/core';
import { UiManager } from '../../engine/entities/ui-manager';

@Component({
	selector: 'app-ui-infobar-header',
	templateUrl: './ui-infobar-header.component.html',
	styleUrls: ['./ui-infobar-header.component.scss']
})
export class UiInfobarHeaderComponent implements OnInit {

	@Input()
	public $uiManager: UiManager;

	public constructor() {
	}

	public ngOnInit(): void {
	}

}
