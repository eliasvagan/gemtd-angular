import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { EngineService } from '../engine.service';
import { IAssetsLoaded } from '../enums/assets';

@Component({
	selector: 'app-game-instance',
	templateUrl: './game-instance.component.html',
	styleUrls: ['./game-instance.component.scss']
})
export class GameInstanceComponent implements OnInit {

	@Input()
	assets: IAssetsLoaded;

	@ViewChild('rendererCanvas', {static: true})
	public rendererCanvas: ElementRef<HTMLCanvasElement>;

	constructor(
		private engServ: EngineService
	) { }

	ngOnInit(): void {
		this.engServ.createScene(this.rendererCanvas, this.assets);
		this.engServ.animate();
	}
}


