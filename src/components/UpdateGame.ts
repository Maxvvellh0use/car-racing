import {
  maxCarDown, maxCarLeft, maxCarRight, maxCarUp, moveStep,
} from './consts';
import { drawRoad } from './Road';
import { drawBackground } from './Background';
import { drawMyCar } from './MyCar';
import {drawOncomingCar} from "./OncomingCar";

const canvas = document.getElementById('canvasRoot') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let myCarX = maxCarLeft;
let myCarY = maxCarDown;

export const UpdateGame = (isPressed) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (isPressed === 'Right' && myCarX < maxCarRight) {
    myCarX += moveStep;
  } else if (isPressed === 'Left' && myCarX > maxCarLeft) {
    myCarX -= moveStep;
  } else if (isPressed === 'Up' && myCarY > maxCarUp) {
    myCarY -= moveStep;
  } else if (isPressed === 'Down' && myCarY < maxCarDown) {
    myCarY += moveStep;
  }
  drawRoad();
  drawBackground();
  drawOncomingCar(65, -25);
  drawMyCar(myCarX, myCarY);
};

// setInterval(UpdateGame, 10);
