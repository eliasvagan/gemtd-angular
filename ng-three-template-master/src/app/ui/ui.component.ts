import {Component, Input, NgZone, OnInit} from '@angular/core';
import { UiManager } from '../engine/entities/ui-manager';

@Component({
	selector: 'app-ui',
	templateUrl: './ui.component.html',
	styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

	@Input()
	$uiManager: UiManager;

	public constructor(
		private ngZone: NgZone,
	) { }

	public ngOnInit(): void {
		console.log('Initialized UI with manager: ', this.$uiManager);
		this.$uiManager.bindZone(this.ngZone);
	}
}
