import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { EngineService } from '../engine.service';
import { UiManager } from '../entities/ui-manager';
import { Statics } from '../entities/statics';

@Component({
	selector: 'app-game-instance',
	templateUrl: './game-instance.component.html',
	styleUrls: ['./game-instance.component.scss']
})

export class GameInstanceComponent implements OnInit {

	public $uiManager: UiManager;

	@ViewChild('rendererCanvas', {static: true})
	public rendererCanvas: ElementRef<HTMLCanvasElement>;

	constructor(
		private engServ: EngineService
	) { }

	ngOnInit(): void {
		this.engServ.createScene(this.rendererCanvas);
		this.engServ.animate();
		this.$uiManager = Statics.UI_MANAGER;
	}
}


