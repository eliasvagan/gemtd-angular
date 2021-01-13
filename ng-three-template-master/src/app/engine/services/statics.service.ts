
import { IAssetsLoaded } from '../enums/assets';
import { UiManager } from '../entities/ui-manager';
import { IGameSession } from '../entities/game-session';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class Statics {
	public static LOADED_ASSETS: IAssetsLoaded;
	public static CURRENT_SESSION: IGameSession;
	public static UI_MANAGER: UiManager;
}
