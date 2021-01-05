import { Component, Input, OnInit } from '@angular/core';
import { IGameSession } from '../../../engine/data-models/game-session';

@Component({
	selector: 'app-ui-infobar-bottom-healthbar',
	templateUrl: './ui-infobar-bottom-healthbar.component.html',
	styleUrls: ['./ui-infobar-bottom-healthbar.component.scss']
})
export class UiInfobarBottomHealthbarComponent implements OnInit {

	@Input()
	gameSession: IGameSession;

	constructor() { }

	ngOnInit(): void {
	}

}
