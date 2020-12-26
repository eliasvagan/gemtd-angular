export interface ITower {
  name: string;
  damage: number;
  range: number;
  speed: number;
  slowWeight?: number;
  slowTime?: number;
  splitShots: number;
  model3d?: string;
  buildCombination?: ITower[];
}
