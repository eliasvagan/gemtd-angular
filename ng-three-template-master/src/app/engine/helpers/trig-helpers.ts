import { HasPosition } from '../entities/has-position';

export const EuclideanDistance = (a: HasPosition, b: HasPosition): number => {
  return Math.sqrt(
    Math.pow(b.position.x - a.position.x, 2) +
      Math.pow(b.position.y - a.position.y, 2)
  );
};
