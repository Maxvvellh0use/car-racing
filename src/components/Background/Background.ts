import {
  moveStep, roadHeight, roadNarrowWidth, roadWideWidth,
} from '../consts';
import { drawRow } from '../Row/Row';

export const drawBackground = (startCoordY, fieldWidth: string) => {
  let coordY = startCoordY;
  const roadWidth = fieldWidth === 'narrow' ? roadNarrowWidth : roadWideWidth;
  while (coordY < roadHeight) {
    drawRow(coordY, roadWidth);
    coordY += moveStep;
  }
};
