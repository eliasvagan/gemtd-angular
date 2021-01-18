import { IHasPosition } from '../data-models/has-position';

export const euclideanDistance = (a: IHasPosition, b: IHasPosition): number => {
	return Math.sqrt(
		Math.pow(b.position.y - a.position.y, 2) + Math.pow(b.position.x - a.position.x, 2)
	);
};

export const ordinalNumber = (cardinal: number): string  => {
	const ns = cardinal.toString();
	switch (ns[ns.length - 1]) {
		case '1': return ns + 'st';
		case '2': return ns + 'nd';
		case '3': return ns + 'rd';
		default: return ns + 'th';
	}
};
