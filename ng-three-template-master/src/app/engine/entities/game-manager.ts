import * as THREE from 'three-full';
import { IGameSession } from '../data-models/game-session';
import { StaticMap } from './static-map';
import { IUpdateable } from '../data-models/updatable';
import { GameSession } from './game-session';
import { Statics } from './statics';

export class GameManager implements IUpdateable {

	private session: IGameSession;
	private readonly scene: THREE.Scene;

	constructor(scene: THREE.Scene) {
		this.scene = scene;
		this.scene.add(new StaticMap());

		this.session = new GameSession(this.scene);
		Statics.CURRENT_SESSION = this.session;
	}

	update(dt: number): void {
		this.session.update(dt);
	}


}
