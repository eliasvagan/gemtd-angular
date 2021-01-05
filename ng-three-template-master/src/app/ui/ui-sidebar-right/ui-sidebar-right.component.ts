import { Component, Input, OnInit } from '@angular/core';
import { IGameSession } from '../../engine/data-models/game-session';

@Component({
	selector: 'app-ui-sidebar-right',
	templateUrl: './ui-sidebar-right.component.html'
})
export class UiSidebarRightComponent implements OnInit {

	@Input()
	public gameSession: IGameSession;

	public constructor() {
	}

	public ngOnInit(): void {
	}

}
