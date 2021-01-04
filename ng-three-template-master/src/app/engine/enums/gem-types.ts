import { ITowerType } from '../data-models/tower-type-model';

let GemTypes: { [ key: string ]: ITowerType };
GemTypes = {
  P1: {
    name: 'Chipped Amethyst',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  P2: {
    name: 'Flawed Amethyst',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  P3: {
    name: 'Normal Amethyst',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  P4: {
    name: 'Polished Amethyst',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  P5: {
    name: 'Perfect Amethyst',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  P6: {
    name: 'Huge Amethyst',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: [ GemTypes.P5, GemTypes.P5 ]
  },

  Q1: {
    name: 'Chipped Aquamarine',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  Q2: {
    name: 'Flawed Aquamarine',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  Q3: {
    name: 'Normal Aquamarine',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  Q4: {
    name: 'Polished Aquamarine',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  Q5: {
    name: 'Perfect Aquamarine',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  Q6: {
    name: 'Huge Aquamarine',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: [ GemTypes.Q5, GemTypes.Q5 ]
  },

  D1: {
    name: 'Chipped Diamond',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  D2: {
    name: 'Flawed Diamond',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  D3: {
    name: 'Normal Diamond',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  D4: {
    name: 'Polished Diamond',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  D5: {
    name: 'Perfect Diamond',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },

  G1: {
    name: 'Chipped Emerald',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  G2: {
    name: 'Flawed Emerald',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  G3: {
    name: 'Normal Emerald',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  G4: {
    name: 'Polished Emerald',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  G5: {
    name: 'Perfect Emerald',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  G6: {
    name: 'Huge Emerald',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: [ GemTypes.G5, GemTypes.G5 ]
  },

  E1: {
    name: 'Chipped Opal',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  E2: {
    name: 'Flawed Opal',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  E3: {
    name: 'Normal Opal',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  E4: {
    name: 'Polished Opal',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  E5: {
    name: 'Perfect Opal',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  E6: {
    name: 'Huge Opal',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },

  R1: {
    name: 'Chipped Ruby',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  R2: {
    name: 'Flawed Ruby',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  R3: {
    name: 'Normal Ruby',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  R4: {
    name: 'Polished Ruby',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  R5: {
    name: 'Perfect Ruby',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  R6: {
    name: 'Huge Ruby',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: [ GemTypes.R5, GemTypes.R5 ]
  },

  B1: {
    name: 'Chipped Sapphire',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  B2: {
    name: 'Flawed Sapphire',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  B3: {
    name: 'Normal Sapphire',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  B4: {
    name: 'Polished Sapphire',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  B5: {
    name: 'Perfect Sapphire',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  B6: {
    name: 'Huge Sapphire',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: [ GemTypes.B5, GemTypes.B5 ]
  },

  Y1: {
    name: 'Chipped Topaz',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  Y2: {
    name: 'Flawed Topaz',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  Y3: {
    name: 'Normal Topaz',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  Y4: {
    name: 'Polished Topaz',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  Y5: {
    name: 'Perfect Topaz',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1
  },
  Y6: {
    name: 'Huge Topaz',
    damage: 100,
    range: 10,
    speed: 4,
    splitShots: 3,
    buildCombination: [ GemTypes.Y5, GemTypes.Y5 ]
  },
};

export { GemTypes };
