import {
  maxCarDown , maxCarLeft , maxCarRight , maxCarUp , maxOncomingCarsY , moveStep , startPosition ,
} from './consts';
import { drawRoad } from './Road';
import { drawBackground } from './Background';
import { drawMyCar } from './MyCar';
import { drawOncomingCar } from './OncomingCar';
import { oncomingCars } from '../data/oncomingCars';
import { myCarMoveHandler } from './helpers/myCarMoveHandler';
import { isCrashCheck } from './helpers/isCrushCheck';

const canvas = document.getElementById('canvasRoot') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let { myCarX } = startPosition;
let { myCarY } = startPosition;
const { backgroundY } = startPosition;
let isCrash = false;

let { oncomingCarY } = startPosition;

let { roadY } = startPosition;

const movingRoad = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground(backgroundY);
  drawRoad(roadY);
  oncomingCarY = oncomingCarY > maxOncomingCarsY ? startPosition.oncomingCarY : oncomingCarY;
  const oncomingCarsPointsCoord = oncomingCars.map((car) => drawOncomingCar(car.oncomingCarX,
    car.oncomingCarY + oncomingCarY));
  const myCarPointsCoord = drawMyCar(myCarX, myCarY);
  isCrash = isCrashCheck(oncomingCarsPointsCoord, myCarPointsCoord);
};

export const UpdateGame = (isPressed) => {
  myCarX = myCarMoveHandler(isPressed, myCarX, myCarY).myCarX;
  myCarY = myCarMoveHandler(isPressed, myCarX, myCarY).myCarY;
  movingRoad();
};

const updateBackground = () => {
  roadY = roadY > 50 ? roadY = -25 : roadY;
  roadY += moveStep;
  oncomingCarY += moveStep;
  movingRoad();
};

const gameProcess = setInterval(() => {
  updateBackground();
  if (isCrash) {
    clearInterval(gameProcess);
  }
}, 200);
