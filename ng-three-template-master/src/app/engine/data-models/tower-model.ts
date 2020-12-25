export interface ITower {
  name: string;
  damage: number;
  range: number;
  speed: number;
  splitShots: number;
  model3d?: string;
  buildCombination?: ITower[];
}
