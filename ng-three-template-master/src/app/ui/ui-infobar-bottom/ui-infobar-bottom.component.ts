import { Component, Input, OnInit } from '@angular/core';
import { UiManager } from '../../engine/entities/ui-manager';

@Component({
	selector: 'app-ui-infobar-bottom',
	templateUrl: './ui-infobar-bottom.component.html',
	styleUrls: ['./ui-infobar-bottom.component.scss']
})
export class UiInfobarBottomComponent implements OnInit {

	@Input()
	public $uiManager: UiManager;

	public constructor() {
	}

	public ngOnInit(): void {
	}

}
