import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { EngineService } from '../engine.service';
@Component({
	selector: 'app-game-instance',
	templateUrl: './game-instance.component.html',
	styleUrls: ['./game-instance.component.scss']
})
export class GameInstanceComponent implements OnInit {

	@ViewChild('rendererCanvas', {static: true})
	public rendererCanvas: ElementRef<HTMLCanvasElement>;

	constructor(
		private engServ: EngineService
	) { }

	ngOnInit(): void {
		this.engServ.createScene(this.rendererCanvas);
		this.engServ.animate();
	}
}


