import { drawCanvas } from '../helpers/drawCanvas';
import { moveStep } from '../consts';

const drawRowBackground = (coordY, ctx, canvasLifes) => {
  let coordX = 2.5;
  while (coordX < canvasLifes.width) {
    drawCanvas(ctx, coordX, coordY, 0.15);
    coordX += moveStep;
  }
};

export const drawLifes = (lifes: number) => {
  const canvasLifes = document.getElementById('canvasLifes') as HTMLCanvasElement;
  const ctx = canvasLifes.getContext('2d');
  const drawFullLifesBackground = () => {
    let coordY = 2.5;
    while (coordY < canvasLifes.height) {
      drawRowBackground(coordY, ctx, canvasLifes);
      coordY += moveStep;
    }
  };
  const drawLifesRow = () => {
    let coordX = 2.5;
    while (coordX < lifes * moveStep) {
      drawCanvas(ctx, coordX, 62.5, 1);
      coordX += moveStep;
    }
  };
  drawLifesRow();
  drawFullLifesBackground();
};
