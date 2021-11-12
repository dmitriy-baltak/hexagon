import { Fractions } from "../fractions";

export enum HexSize {
  normal = 1,
  big = 2
}

export type AttributesType = {
  attack: number;
  defence: number;
  damage: Array<number>;
  health: number;
  speed: number;
};

export default interface CreatureInterface {
  fraction: Fractions;
  size: HexSize;
  attributes: AttributesType;
}
