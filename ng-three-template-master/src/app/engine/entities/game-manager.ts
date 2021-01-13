import * as THREE from 'three-full';
import { StaticMap } from './static-map';
import { IUpdateable } from '../data-models/updatable';
import { GameSession, IGameSession } from './game-session';
import { Statics } from './statics';
import { UiManager } from './ui-manager';

export class GameManager implements IUpdateable {

	private session: IGameSession;
	private readonly scene: THREE.Scene;

	constructor(scene: THREE.Scene) {
		this.scene = scene;
		this.scene.add(new StaticMap());

		this.session = new GameSession(this.scene);
		Statics.CURRENT_SESSION = this.session;
		Statics.UI_MANAGER = new UiManager(this.session);
	}

	update(dt: number): void {
		this.session.update(dt);
	}


}
