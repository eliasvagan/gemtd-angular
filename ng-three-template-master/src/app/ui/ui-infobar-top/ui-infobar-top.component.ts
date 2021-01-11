import { Component, Input, OnInit } from '@angular/core';
import { IGameSession } from '../../engine/data-models/game-session';

@Component({
	selector: 'app-ui-infobar-top',
	templateUrl: './ui-infobar-top.component.html',
	styleUrls: ['./ui-infobar-top.component.scss']
})
export class UiInfobarTopComponent implements OnInit {

	@Input()
	public gameSession: IGameSession;

	public constructor() {
	}

	public ngOnInit(): void {
	}

}
