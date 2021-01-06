import * as THREE from 'three-full';
import { IGameSession } from '../data-models/game-session';
import { GameObject } from './game-object';
import { IAssetsLoaded } from '../enums/assets';
import { StaticMap } from './static-map';
import { IUpdateable } from '../data-models/updatable';
import { GameSession } from './game-session';

export class GameManager implements IUpdateable {

	public static ACTIVE_SESSION: IGameSession;
	private session: IGameSession;
	private readonly scene: THREE.Scene;

	constructor(scene: THREE.Scene, assets: IAssetsLoaded) {
		GameObject.LOADED_ASSETS = assets;
		this.scene = scene;
		this.scene.add(new StaticMap());

		this.session = new GameSession(this.scene);

		GameManager.ACTIVE_SESSION = this.session;
	}

	update(dt: number): void {
		this.session.update(dt);
	}


}
