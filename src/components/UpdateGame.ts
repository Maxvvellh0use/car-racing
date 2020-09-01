import {
  maxOncomingCarsY, moveStep, startPosition, startScore,
} from './consts';
import { drawRoad } from './Road';
import { drawBackground } from './Background';
import { drawMyCar } from './MyCar';
import { drawOncomingCar } from './OncomingCar';
import { oncomingCars } from '../data/oncomingCars';
import { myCarMoveHandler } from './helpers/myCarMoveHandler';
import { isCrashCheck } from './helpers/isCrushCheck';
import { ScoreContainer } from './ScoreContainer/ScoreContainer';

const canvas = document.getElementById('canvasRoot') as HTMLCanvasElement;
const rootScore = document.getElementById('rootScore');
const ctx = canvas.getContext('2d');

let { myCarX } = startPosition;
let { myCarY } = startPosition;
const { backgroundY } = startPosition;
let isCrash = false;

let { oncomingCarY } = startPosition;

let { roadY } = startPosition;

let speedCoeff = 0;
let { goal } = startScore;

let delayTimeout = 300;

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
  rootScore.innerHTML = '';
  ScoreContainer(goal * 100, 0, 0, speedCoeff, goal);
  if (!isCrash) {
    myCarX = myCarMoveHandler(isPressed, myCarX, myCarY).myCarX;
    myCarY = myCarMoveHandler(isPressed, myCarX, myCarY).myCarY;
  }
  movingRoad();
};

const updateBackground = () => {
  rootScore.innerHTML = '';
  const oncomingCarsPointsCoord = oncomingCars.map((car) => drawOncomingCar(car.oncomingCarX,
    car.oncomingCarY + oncomingCarY));
  if (oncomingCarsPointsCoord.flat().some((point) => point === '635')) {
    goal += 1;
  }
  ScoreContainer(goal * 100, 0, 0, speedCoeff, goal);
  roadY = roadY > 50 ? roadY = -25 : roadY;
  roadY += moveStep;
  oncomingCarY += moveStep;
  movingRoad();
};

let updateGameTimer = setTimeout(function request() {
  updateBackground();
  if (delayTimeout !== 50) {
    delayTimeout -= 0.5;
  } if (delayTimeout % 30 === 0) {
    speedCoeff += 1;
  } if (!isCrash) {
    updateGameTimer = setTimeout(request, delayTimeout);
  }
}, delayTimeout);
