import { drawCar } from './MyCar';
import { drawLine } from "./Line";
import { drawRoad } from "./Road";
import {drawBackground} from "./Background";

const canvas = document.getElementById('canvasRoot') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let x = canvas.width / 2;
let y = canvas.height - 30;
let dy = -2;

export const InitGame = () => {
  drawRoad();
  drawBackground();
  drawCar(65, 515)
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // drawCar(x, y);
  // y += dy;
};

// setInterval(InitGame, 10);
