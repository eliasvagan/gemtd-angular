import { Component, Input, OnInit } from '@angular/core';
import {UiManager} from '../../engine/entities/ui-manager';

@Component({
	selector: 'app-ui-sidebar-left',
	templateUrl: './ui-sidebar-left.component.html'
})
export class UiSidebarLeftComponent implements OnInit {

	@Input()
	public $uiManager: UiManager;


	public constructor() {
	}

	public ngOnInit(): void {
	}

}
