import createBattleField from "./battleField";
import render from "./render";

export default function createArena() {
  const grid = createBattleField({
    windowDimensions: {
      width: 800,
      height: 600
    }
  });

  render(grid);
}
