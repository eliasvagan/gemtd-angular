import * as THREE from 'three';
import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';
import { GameManager } from './entities/game-manager';

@Injectable({providedIn: 'root'})
export class EngineService implements OnDestroy {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.OrthographicCamera;
  private scene: THREE.Scene;
  private light: THREE.AmbientLight;
  private grid: THREE.GridHelper;
  private gm: GameManager;

  private prevFrame: Date;
  private frameId: number = null;

  public constructor(private ngZone: NgZone) {
  }

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // create the scene
    this.scene = new THREE.Scene();

    // Game Manager
    this.gm = new GameManager(this.scene);

    const cameraZoom = 0.15;

    // this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera = new THREE.OrthographicCamera(
      (window.innerWidth * cameraZoom) / -2,
      (window.innerWidth * cameraZoom) / 2,
      (window.innerHeight * cameraZoom) / 2,
      (window.innerHeight * cameraZoom) / -2,
      1,
      1000
    );

    this.camera.position.set(20, -20, 15);
    this.camera.lookAt(this.scene.position);
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight(0x404040);
    this.light.position.z = 10;
    this.scene.add(this.light);

    this.generateBoard();

  }

  public generateBoard(): void {
    const size = 10;
    const divisions = 10;

    const gridHelper = new THREE.GridHelper( size, divisions );
    gridHelper.scale.set(size, size, size);
    gridHelper.rotateX(Math.PI / 2);
    this.grid = gridHelper;
    this.scene.add( gridHelper );

  }

  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    // Handle game updates with frame time

    if (this.prevFrame === undefined) {
      this.prevFrame = new Date();
    }
    const now: Date = new Date();
    const dt: number = now.valueOf() - this.prevFrame.valueOf();
    this.gm.handleUpdate(dt);


    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
    this.prevFrame = new Date();
  }

  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // this.camera.aspect = width / height;
    // this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }
}
