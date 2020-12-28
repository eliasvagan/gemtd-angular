import { ITowerType } from '../data-models/tower-type-model';
import { GemTypes } from './gem-types';

let TowerTypes: { [ key: string ]: ITowerType };
TowerTypes  = {
  Silver: {
    name: 'Silver',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: [ GemTypes.D1, GemTypes.B1, GemTypes.Y1 ]
  },
  SilverKnight: {
    name: 'Silver Knight',
    damage: 50,
    range: 6,
    speed: 2,
    splitShots: 1,
    buildCombination: [ GemTypes.Q2, GemTypes.R3, TowerTypes.Silver ]
  },
  PinkDiamond: {
    name: 'Pink Diamond',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: [ GemTypes.D3, GemTypes.Y3, GemTypes.D5 ]
  },
  HugePinkDiamond: {
    name: 'Huge Pink Diamond',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: [ TowerTypes.PinkDiamond, TowerTypes.Silver, TowerTypes.SilverKnight ]
  },
  KohinoorDiamond: {
    name: 'Koh-i-noor Diamond',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: [ TowerTypes.HugePinkDiamond, GemTypes.D6, GemTypes.P6 ]
  },
  Malachite: {
    name: 'Malachite',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: [ GemTypes.Y1, GemTypes.G1, GemTypes.Q1 ]
  },
  VividMalachite: {
    name: 'Vivid Malachite',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: [ GemTypes.Y3, GemTypes.D2, TowerTypes.Malachite ]
  },
  Uranium238: {
    name: 'Uranium-238',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  Uranium235: {
    name: 'Uranium-235',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  DeplementedKyparium: {
    name: 'Deplemented Kyparium',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: [ TowerTypes.Uranium235, GemTypes.Y6, GemTypes.Q6 ]
  },
  AsteriatedRuby: {
    name: 'Asteriated Ruby',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: [ GemTypes.R2, GemTypes.R1, GemTypes.P1 ]
  },
  Volcano: {
    name: 'Volcano',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: [ TowerTypes.AsteriatedRuby, GemTypes.P3, GemTypes.R4 ]
  },
  Bloodstone: {
    name: 'Bloodstone',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  AntiqueBloodstone: {
    name: 'Antique Bloodstone',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  TheCrownPrince: {
    name: 'The Crown Prince',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  Quartz: {
    name: 'Quartz',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  CharmingLazurite: {
    name: 'Charming Lazurite',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  Jade: {
    name: 'Jade',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  LuckyChineseJade: {
    name: 'Lucky Chinese Jade',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  GreyJade: {
    name: 'Grey Jade',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  MonkeyKingJade: {
    name: 'Monkey King Jade',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  MonkeyKingBar: {
    name: 'Monkey King Bar',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  DarkEmerald: {
    name: 'Dark Emerald',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  EmeraldGolem: {
    name: 'Emerald Golem',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  StoneGaze: {
    name: 'Stone Gaze',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  YellowSaphire: {
    name: 'Yellow Saphire',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  Gold: {
    name: 'Gold',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  EgyptGold: {
    name: 'Egypt Gold',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  ChrysoberylCatsEye: {
    name: `Chrysoberyl Cat's Eye`,
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  RedCoral: {
    name: 'Red Coral',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  ParaibaTourmaline: {
    name: 'Paraiba Tourmaline',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  ElaboratelyCarvedTourmaline: {
    name: 'Elaborately Carved Tourmaline',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  SapphireStarOfAdam: {
    name: 'Sapphire Star of Adam',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  DeepseaPearl: {
    name: 'Deepsea Pearl',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  CarmenLucia: {
    name: 'Carmen-Lucia',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  Agate: {
    name: 'Agate',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  Ehome: {
    name: 'Ehome',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  Obsidian: {
    name: 'Obsidian',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  FantasticMissShrimp: {
    name: 'Fantastic Miss Shrimp',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  Melancholy: {
    name: 'Melancholy',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  Geluanshi: {
    name: 'Geluanshi',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  TheBurningStone: {
    name: 'The Burning Stone',
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
  WingsStone: {
    name: 'Wings Stone' ,
    damage: 10,
    range: 4,
    speed: 1,
    splitShots: 1,
    buildCombination: []
  },
};

export { TowerTypes };
