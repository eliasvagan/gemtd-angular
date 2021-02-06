import { IHasPosition } from '../data-models/has-position';

export const euclideanDistance = (
	a: IHasPosition | { x: number, y: number },
	b: IHasPosition | { x: number, y: number }
): number => {

	const x0 = 'position' in a ? a.position.x : a.x;
	const y0 = 'position' in a ? a.position.y : a.y;
	const x1 = 'position' in b ? b.position.x : b.x;
	const y1 = 'position' in b ? b.position.y : b.y;

	return Math.sqrt(Math.pow(y1 - y0, 2) + Math.pow(x1 - x0, 2));

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
