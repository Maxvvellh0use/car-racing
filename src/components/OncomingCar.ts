import { drawCube } from './Cube';

export const drawOncomingCar = (coordX: number, coordY: number) => {
  drawCube(coordX, coordY + 60);
  drawCube(coordX, coordY + 90);
  drawCube(coordX, coordY + 120);

  drawCube(coordX - 30, coordY + 30);
  drawCube(coordX + 30, coordY + 30);
  drawCube(coordX - 30, coordY + 90);
  drawCube(coordX + 30, coordY + 90);

  return [
    `${coordX},${coordY + 120}`,
    `${coordX - 30},${coordY + 30}`,
    `${coordX + 30},${coordY + 30}`,
    `${coordX - 30},${coordY + 90}`,
    `${coordX + 30},${coordY + 90}`,
    `${coordY + 30}`,
  ];
};
