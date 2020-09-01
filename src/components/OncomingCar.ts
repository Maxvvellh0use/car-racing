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
    `${coordX}, ${coordY + 120}`,
    `${coordX - 30}, ${coordY + 30}`,
    `${coordX + 30}, ${coordY + 30}`,
    `${coordX - 30}, ${coordY + 90}`,
    `${coordX + 30}, ${coordY + 90}`,
  ];

  // front: {
  //   coordX, coordY: coordY + 120,
  // },
  // leftFrontWheel: {
  //   coordX: coordX - 30,
  //   coordY: coordY + 30,
  // },
  // rightFrontWheel: {
  //   coordX: coordX + 30,
  //   coordY: coordY + 30,
  // },
  // leftBackWheel: {
  //   coordX: coordX - 30,
  //   coordY: coordY + 90,
  // },
  // rightBacktWheel: {
  //   coordX: coordX + 30,
  //   coordY: coordY + 90,
  // },
  // };
};
