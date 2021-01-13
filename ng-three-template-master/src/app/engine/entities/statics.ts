
import { IAssetsLoaded } from '../enums/assets';
import { UiManager } from './ui-manager';
import { IGameSession } from './game-session';

export class Statics {
	public static LOADED_ASSETS: IAssetsLoaded;
	public static CURRENT_SESSION: IGameSession;
	public static UI_MANAGER: UiManager;
}
