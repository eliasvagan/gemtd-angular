import { Component, Input, OnInit } from '@angular/core';
import { IGameSession } from '../../engine/data-models/game-session';

@Component({
	selector: 'app-ui-infobar-bottom',
	templateUrl: './ui-infobar-bottom.component.html',
	styleUrls: ['./ui-infobar-bottom.component.scss']
})
export class UiInfobarBottomComponent implements OnInit {

	@Input()
	public gameSession: IGameSession;

	public constructor() {
	}

	public ngOnInit(): void {
	}

}
