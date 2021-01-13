import { Component, Input, OnInit } from '@angular/core';
import { UiManager } from '../../engine/entities/ui-manager';

@Component({
	selector: 'app-ui-infobar-top',
	templateUrl: './ui-infobar-top.component.html',
	styleUrls: ['./ui-infobar-top.component.scss']
})
export class UiInfobarTopComponent implements OnInit {

	@Input()
	public $uiManager: UiManager;

	public constructor() {
	}

	public ngOnInit(): void {
	}

}
