import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineService } from './engine.service';
import { GameObjectMeshMaps } from './enums/game-object-mesh-maps';
import { AssetLoader } from './helpers/asset-loader';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html'
})
export class EngineComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  $loading = false;

  public constructor(private engServ: EngineService) {
  }

  public ngOnInit(): void {
    this.$loading = true;
    const assetLoader = new AssetLoader();
    assetLoader.loadAssets(GameObjectMeshMaps).then((res) => {
      this.$loading = false;
      this.engServ.createScene(this.rendererCanvas, res);
      this.engServ.animate();
    });
  }

}
