import { IAnimation } from '../entities/animations/animation';

export interface IUpdateable {
	animation?: IAnimation;
	update: (dt: number) => void;
}
