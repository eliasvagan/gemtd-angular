import { Component, Input, OnInit } from '@angular/core';
import { UiManager } from '../../engine/entities/ui-manager';
@Component({
	selector: 'app-ui-sidebar-right',
	templateUrl: './ui-sidebar-right.component.html'
})
export class UiSidebarRightComponent implements OnInit {

	@Input()
	public $uiManager: UiManager;

	public constructor() {
	}

	public ngOnInit(): void {
	}

}
