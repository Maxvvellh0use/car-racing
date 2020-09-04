import { moveStep } from '../consts';
import { drawCube } from '../Cube/Cube';

export const drawRow = (coordY: number, maxWidth) => {
  let coordX = 5;
  while (coordX < maxWidth) {
    drawCube(coordX, coordY, 0.15);
    coordX += moveStep;
  }
};
