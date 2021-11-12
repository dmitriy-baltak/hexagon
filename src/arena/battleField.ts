import { defineGrid, extendHex } from "honeycomb-grid";

interface WindowDimensionsType {
  width: number;
  height: number;
}

interface SizeType {
  x: number;
  y: number;
}

interface GridParamsType {
  windowDimensions: WindowDimensionsType;
  fieldSize?: SizeType;
}

export default function createBattleField({
  windowDimensions,
  fieldSize = { x: 15, y: 11 }
}: GridParamsType) {
  const Hex = extendHex({
    size: {
      width: windowDimensions.width / fieldSize.x,
      height: windowDimensions.height / fieldSize.y
    }
  });
  const Grid = defineGrid(Hex);

  return Grid.rectangle({ width: fieldSize.x, height: fieldSize.y });
}
