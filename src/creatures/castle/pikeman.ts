import CreatureInterface, { HexSize, AttributesType } from "../types";
import { Fractions } from "../../fractions";

export default class Pikeman implements CreatureInterface {
  public fraction = Fractions.CASTLE;

  public size = HexSize.normal;

  public attributes: AttributesType = {
    attack: 10,
    defence: 10,
    damage: [0, 15],
    health: 10,
    speed: 10
  };
}
