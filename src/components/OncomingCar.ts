import { drawCube } from './Cube';
import { drawLine } from './Line';

export const drawOncomingCar = (coordX: number, coordY: number) => {
  drawLine(coordX, coordY + 60);
  drawCube(coordX - 30, coordY + 30);
  drawCube(coordX + 30, coordY + 30);
  drawCube(coordX - 30, coordY + 90);
  drawCube(coordX + 30, coordY + 90);
};
