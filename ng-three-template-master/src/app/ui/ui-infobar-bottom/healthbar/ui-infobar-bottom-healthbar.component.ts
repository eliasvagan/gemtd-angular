import { Component, Input, OnInit } from '@angular/core';
import { UiManager } from '../../../engine/entities/ui-manager';

@Component({
	selector: 'app-ui-infobar-bottom-healthbar',
	templateUrl: './ui-infobar-bottom-healthbar.component.html',
	styleUrls: ['./ui-infobar-bottom-healthbar.component.scss']
})
export class UiInfobarBottomHealthbarComponent implements OnInit {

	@Input()
	$uiManager: UiManager;

	constructor() { }

	ngOnInit(): void {
	}

}
