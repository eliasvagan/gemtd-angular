import { Component, Input, OnInit } from '@angular/core';
import { GameObject } from '../../../engine/entities/game-object';

@Component({
	selector: 'app-statusbar',
	templateUrl: './statusbar.component.html',
	styleUrls: ['./statusbar.component.scss']
})
export class StatusbarComponent implements OnInit {

	@Input()
	activeObject: GameObject;

	constructor() { }

	ngOnInit(): void {
	}

}
