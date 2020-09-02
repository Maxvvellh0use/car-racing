import {drawCanvas} from "../helpers/drawCanvas";

export const drawCube = (coordX: number, coordY: number, opacity: number = 0.9) => {
  const canvas = document.getElementById('canvasRoot') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  drawCanvas(ctx, coordX, coordY, opacity);
};
