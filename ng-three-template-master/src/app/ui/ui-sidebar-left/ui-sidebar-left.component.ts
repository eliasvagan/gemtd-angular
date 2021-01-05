import { Component, Input, OnInit } from '@angular/core';
import { IGameSession } from '../../engine/data-models/game-session';

@Component({
	selector: 'app-ui-sidebar-left',
	templateUrl: './ui-sidebar-left.component.html'
})
export class UiSidebarLeftComponent implements OnInit {

	@Input()
	public gameSession: IGameSession;


	public constructor() {
	}

	public ngOnInit(): void {
	}

}
