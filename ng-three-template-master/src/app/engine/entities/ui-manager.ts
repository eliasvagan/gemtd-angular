import { IGameSession } from './game-session';
import { NgZone } from '@angular/core';


export class UiManager {
	updateCounter: number;  // For debugging
	rootZone: NgZone;

	constructor(
		public gameSession: IGameSession
	) {
		this.updateCounter = 0;
	}

	bindZone(zone: NgZone): void {
		this.rootZone = zone;
	}

	forceUpdateZones(): void {
		this.rootZone.run(() => {
			this.updateCounter += 1;
		});
	}
}
