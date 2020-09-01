import { moveStep, roadWidth } from './consts';
import { drawCube } from './Cube';

export const drawRow = (coordY: number) => {
  let i = 5;
  while (i < roadWidth) {
    drawCube(i, coordY, 0.15);
    i += moveStep;
  }
};
