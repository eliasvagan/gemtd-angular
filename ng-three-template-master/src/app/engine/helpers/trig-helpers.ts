import { IHasPosition } from '../data-models/has-position';

export const EuclideanDistance = (a: IHasPosition, b: IHasPosition): number => {
  return Math.sqrt(
    Math.pow(b.position.x - a.position.x, 2) +
      Math.pow(b.position.y - a.position.y, 2)
  );
};
