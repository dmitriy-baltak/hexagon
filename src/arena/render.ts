import * as PIXI from "pixi.js";

export default function render(grid: Array<any>) {
  const app = new PIXI.Application({ transparent: true, antialias: true });
  const graphics = new PIXI.Graphics();

  document.body.appendChild(app.view);

  graphics.lineStyle(1, 0x999999);

  grid.forEach(hex => {
    const point = hex.toPoint();
    // add the hex's position to each of its corner points
    const corners = hex.corners().map(corner => corner.add(point));
    // separate the first from the other corners
    const [firstCorner, ...otherCorners] = corners;

    // move the "pencil" to the first corner
    graphics.moveTo(firstCorner.x, firstCorner.y);
    // draw lines to the other corners
    otherCorners.forEach(({ x, y }) => graphics.lineTo(x, y));
    // finish at the first corner
    graphics.lineTo(firstCorner.x, firstCorner.y);

    app.stage.addChild(graphics);
  });
}
