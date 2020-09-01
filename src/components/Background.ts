import { drawCube } from './Cube';
import { moveStep, roadHeight, roadWidth } from './consts';
import { drawRow } from "./Row";

export const drawBackground = (startCoordY, rowCoordY) => {
  const drawFullBackground = () => {
    let coordY = startCoordY - rowCoordY;
    while (coordY < roadHeight) {
      drawRow(coordY);
      coordY += moveStep;
    }
  };
  drawFullBackground();
};
