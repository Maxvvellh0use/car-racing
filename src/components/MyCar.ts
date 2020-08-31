import { drawCube } from './Cube';

export const drawCar = (coordX: number, coordY: number) => {
  drawCube(coordX, coordY);
  drawCube(coordX - 30, coordY + 30);
  drawCube(coordX, coordY + 30);
  drawCube(coordX + 30, coordY + 30);
  drawCube(coordX, coordY + 60);
  drawCube(coordX - 30, coordY + 90);
  drawCube(coordX + 30, coordY + 90);
};
