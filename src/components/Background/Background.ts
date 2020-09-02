import { drawCube } from '../Cube/Cube';
import { moveStep, roadHeight, roadWidth } from '../consts';
import { drawRow } from '../Row/Row';

export const drawBackground = (startCoordY) => {
  let coordY = startCoordY;
  while (coordY < roadHeight) {
    drawRow(coordY, roadWidth);
    coordY += moveStep;
  }
};
