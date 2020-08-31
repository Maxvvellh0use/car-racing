import { drawCube } from './Cube';
import { roadHeight, roadWidth } from './consts';

export const drawBackground = () => {
  const drawRow = (coordY) => {
    let i = 5;
    while (i < roadWidth) {
      drawCube(i, coordY, 0.2);
      i += 30;
    }
  };
  const drawFullBackground = () => {
    let i = 5;
    while (i < roadHeight) {
      drawRow(i);
      i += 30;
    }
  };
  drawFullBackground();
};
