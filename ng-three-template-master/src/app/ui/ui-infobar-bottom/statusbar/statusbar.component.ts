import { Component, Input, OnInit } from '@angular/core';
import { GameObject } from '../../../engine/entities/game-object';
import { Inspectable } from '../../../engine/data-models/inspectable-model';

@Component({
	selector: 'app-statusbar',
	templateUrl: './statusbar.component.html',
	styleUrls: ['./statusbar.component.scss']
})
export class StatusbarComponent implements OnInit {

	@Input()
	activeObject: GameObject & Inspectable;

	constructor() { }

	ngOnInit(): void {
	}

}
