import { drawCube } from '../Cube/Cube';

export const drawLine = (coordX: number, coordY: number) => {
  drawCube(coordX, coordY);
  drawCube(coordX, coordY + 30);
  drawCube(coordX, coordY + 60);
};
