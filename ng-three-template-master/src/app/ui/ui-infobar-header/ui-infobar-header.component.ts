import { Component, Input, OnInit } from '@angular/core';
import { IGameSession } from '../../engine/data-models/game-session';

@Component({
	selector: 'app-ui-infobar-header',
	templateUrl: './ui-infobar-header.component.html',
	styleUrls: ['./ui-infobar-header.component.scss']
})
export class UiInfobarHeaderComponent implements OnInit {

	@Input()
	public gameSession: IGameSession;

	public constructor() {
	}

	public ngOnInit(): void {
	}

}
