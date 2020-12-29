import * as THREE from 'three';
import {ElementRef, Injectable, NgZone, OnDestroy} from '@angular/core';
import {GameManager} from './entities/game-manager';
import {MouseEventType} from './enums/mouse-events';

@Injectable({providedIn: 'root'})
export class EngineService implements OnDestroy {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.OrthographicCamera;
  private scene: THREE.Scene;
  private light: THREE.AmbientLight;
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

    /* const cameraZoom = 0.25;

    // this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera = new THREE.OrthographicCamera(
      (window.innerWidth * cameraZoom) / -2,
      (window.innerWidth * cameraZoom) / 2,
      (window.innerHeight * cameraZoom) / 2,
      (window.innerHeight * cameraZoom) / -2,
      1,
      1000
    );

    */

    this.camera = new THREE.OrthographicCamera(-10, 10, 10, -20, 1, 1000);

    this.camera.position.set(100, 150, 100);
    this.camera.lookAt(5, 0, 5);
    this.scene.add(this.camera);
    this.updateCamera();

    // soft white light
    this.light = new THREE.AmbientLight(0x404040);
    this.light.position.z = 10;
    this.scene.add(this.light);

    /* GRID
    const size = 10;
    const divisions = 11;

    const gridHelper = new THREE.GridHelper( size, divisions );
    gridHelper.scale.set(size, size, size);

    this.grid = gridHelper;
    this.scene.add( gridHelper );
    */

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

      this.canvas.addEventListener('click', evt => this.handleMouseEvent(evt, MouseEventType.Click));
      this.canvas.addEventListener('mousemove', evt => this.handleMouseEvent(evt, MouseEventType.Move));
    });
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {

      // Handle game updates with frame time

      if (this.prevFrame === undefined) {
        this.prevFrame = new Date();
      }
      const now: Date = new Date();
      const dt: number = now.valueOf() - this.prevFrame.valueOf();
      this.gm.handleUpdate(dt);

      this.renderer.render(this.scene, this.camera);
      this.prevFrame = new Date();

      this.render();
    });
  }

  private handleMouseEvent(evt: MouseEvent, type: MouseEventType): void {
    const hit = this.raycastFromMouseEvent(evt);
    if (hit !== null) {
      hit.object.handleMouseEvent(evt, type);
    }
  }


  private raycastFromMouseEvent(evt: MouseEvent): any {
    const raycaster = new THREE.Raycaster(); // create once
    const mouse = new THREE.Vector2(); // create once

    mouse.x = ( evt.clientX / this.canvas.clientWidth ) * 2 - 1;
    mouse.y = - ( evt.clientY / this.canvas.clientHeight ) * 2 + 1;

    raycaster.setFromCamera( mouse, this.camera );

    const intersects = raycaster.intersectObjects( this.scene.children );
    return intersects.length > 0 ? intersects.slice(-1)[0] : null;
  }

  private updateCamera() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const portrait = width / height < 1;

    const nw = !portrait ? width / height : 1;
    const nh = portrait ? height / width : 1;

    const camSize = 8;

    this.camera.top = -nh * camSize;
    this.camera.bottom = nh * camSize;
    this.camera.left = -nw * camSize;
    this.camera.right = nw * camSize;
    this.camera.updateProjectionMatrix();
  }

  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.updateCamera();
    this.renderer.setSize(width, height);
  }
}
