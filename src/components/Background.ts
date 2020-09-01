import { drawCube } from './Cube';
import { moveStep, roadHeight, roadWidth } from './consts';
import { drawRow } from "./Row";

export const drawBackground = (startCoordY) => {
  const drawFullBackground = () => {
    let coordY = startCoordY;
    while (coordY < roadHeight) {
      drawRow(coordY);
      coordY += moveStep;
    }
  };
  drawFullBackground();
};
