import { drawLine } from './Line';

export const drawRoad = () => {
  const yInterval = 120;
  const xInterval = 270;
  const drawLeft = () => {
    drawLine(5, 5 - yInterval);
    drawLine(5, 5);
    drawLine(5, 5 + yInterval);
    drawLine(5, 5 + (2 * yInterval));
    drawLine(5, 5 + (3 * yInterval));
    drawLine(5, 5 + (4 * yInterval));
    drawLine(5, 5 + (5 * yInterval));
  };
  const drawRight = () => {
    drawLine(5 + xInterval, 5 - yInterval);
    drawLine(5 + xInterval, 5);
    drawLine(5 + xInterval, 5 + yInterval);
    drawLine(5 + xInterval, 5 + (2 * yInterval));
    drawLine(5 + xInterval, 5 + (3 * yInterval));
    drawLine(5 + xInterval, 5 + (4 * yInterval));
    drawLine(5 + xInterval, 5 + (5 * yInterval));
  };
  drawLeft();
  drawRight();
};
