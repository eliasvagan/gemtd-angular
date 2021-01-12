import { Component, OnInit } from '@angular/core';
import { IGameSession } from '../engine/data-models/game-session';
import { GameManager } from '../engine/entities/game-manager';
import {Statics} from '../engine/entities/statics';

@Component({
	selector: 'app-ui',
	templateUrl: './ui.component.html',
	styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

	public $gameSession: IGameSession;

	public constructor() {
	}

	public ngOnInit(): void {
		this.$gameSession = Statics.CURRENT_SESSION;
	}

}
