import { drawCube } from './Cube';
import { moveStep, roadHeight, roadWidth } from './consts';

export const drawBackground = () => {
  const drawRow = (coordY) => {
    let i = 5;
    while (i < roadWidth) {
      drawCube(i, coordY, 0.2);
      i += moveStep;
    }
  };
  const drawFullBackground = () => {
    let coordY = 5;
    while (coordY < roadHeight) {
      drawRow(coordY);
      coordY += moveStep;
    }
  };
  drawFullBackground();
};
