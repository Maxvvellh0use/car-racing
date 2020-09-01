import { drawLine } from '../Line/Line';

export const drawRoad = (startRoadCoordY) => {
  const coordY = startRoadCoordY;
  const yInterval = 120;
  const xInterval = 270;
  const drawLeft = () => {
    drawLine(5, coordY - yInterval);
    drawLine(5, coordY);
    drawLine(5, coordY + yInterval);
    drawLine(5, coordY + (2 * yInterval));
    drawLine(5, coordY + (3 * yInterval));
    drawLine(5, coordY + (4 * yInterval));
    drawLine(5, coordY + (5 * yInterval));
  };
  const drawRight = () => {
    drawLine(5 + xInterval, coordY - yInterval);
    drawLine(5 + xInterval, coordY);
    drawLine(5 + xInterval, coordY + yInterval);
    drawLine(5 + xInterval, coordY + (2 * yInterval));
    drawLine(5 + xInterval, coordY + (3 * yInterval));
    drawLine(5 + xInterval, coordY + (4 * yInterval));
    drawLine(5 + xInterval, coordY + (5 * yInterval));
  };
  drawLeft();
  drawRight();
};
