import * as THREE from 'three-full';
import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';
import { GameManager } from '../entities/game-manager';
import { MouseEventType } from '../enums/mouse-events';
import { Statics } from '../services/statics.service';
import * as GAMECONFIG from '../../json/gameconfig.json';
import { GameSession } from '../entities/game-session';
import { UiManager } from '../entities/ui-manager';
import { GameObject } from '../entities/game-object';

@Injectable({providedIn: 'root'})
export class EngineService implements OnDestroy {
	private canvas: HTMLCanvasElement;
	private renderer: THREE.WebGLRenderer;
	private camera: THREE.OrthographicCamera;
	private scene: THREE.Scene;
	private gm: GameManager;

	private prevFrame: Date;
	private frameId: number = null;
	private gameSession: GameSession;

	public constructor(
		private ngZone: NgZone
	) {
	}

	public ngOnDestroy(): void {
		if (this.frameId != null) {
			cancelAnimationFrame(this.frameId);
		}
	}

	public getUiManager(): UiManager {
		return Statics.UI_MANAGER;
	}

	getSession(): GameSession {
		return this.gameSession;
	}


	public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
		// Save loaded 3D assets
		console.log('Created scene with ', Object.keys(Statics.LOADED_ASSETS).length, ' loaded assets.');

		// The first step is to get the reference of the canvas element from our HTML document
		this.canvas = canvas.nativeElement;

		this.renderer = new THREE.WebGLRenderer({
			canvas: this.canvas,
			alpha: true,    // transparent background
			antialias: true // smooth edges
		});
		this.renderer.shadowMap.enabled = true;

		this.renderer.setSize(window.innerWidth, window.innerHeight);

		// create the scene
		this.scene = new THREE.Scene();
		this.gameSession = new GameSession(this.scene);
		Statics.CURRENT_SESSION = this.gameSession;

		// Game Manager
		this.gm = new GameManager(this.scene);

		this.camera = new THREE.OrthographicCamera(-10, 10, 10, -20, 1, 1000);
		this.scene.add(this.camera);
		this.updateCamera();
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
			this.gm.update(dt);

			this.renderer.render(this.scene, this.camera);
			this.prevFrame = new Date();

			this.render();
		});
	}

	private handleMouseEvent(evt: MouseEvent, type: MouseEventType): void {
		const hit = this.rayCastFromMouseEvent(evt);
		try {
			if (hit !== null && hit.object?.userData) {
				hit.object.userData.handleMouseEvent(evt, type);
			} else if (type === MouseEventType.Click) {
				Statics.CURRENT_SESSION.setActiveObject(null);
			} else if (type === MouseEventType.Move) {
				GameObject.setHovered(null);
			}
		} catch (err) {
			console.error('Could not handle mouse event on ', hit, err);
		}
	}


	private rayCastFromMouseEvent(evt: MouseEvent): THREE.Object3D {
		const rayCaster = new THREE.Raycaster(); // create once
		const mouse = new THREE.Vector2(); // create once

		mouse.x = ( evt.clientX / this.canvas.clientWidth ) * 2 - 1;
		mouse.y = - ( evt.clientY / this.canvas.clientHeight ) * 2 + 1;

		rayCaster.setFromCamera( mouse, this.camera );

		const intersects = rayCaster.intersectObjects( this.scene.children );
		return intersects.length > 0 ? intersects.slice(-1)[0] : null;
	}

	private updateCamera() {
		const width = window.innerWidth;
		const height = window.innerHeight;
		const portrait = width / height < 1;

		const nw = !portrait ? width / height : 1;
		const nh = portrait ? height / width : 1;

		const camSize = GAMECONFIG.rendering.cameraSize; // 8 is default

		this.camera.position.set(100, 150, 100);
		this.camera.lookAt(5, 0, 5);

		this.camera.top = nh * camSize;
		this.camera.bottom = -nh * camSize;
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
