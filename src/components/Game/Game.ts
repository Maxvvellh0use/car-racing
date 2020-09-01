import {
  maxOncomingCarsY, moveStep, startPosition, startScore,
} from '../consts';
import { drawRoad } from '../Road/Road';
import { drawBackground } from '../Background/Background';
import { drawMyCar } from '../MyCar/MyCar';
import { drawOncomingCar } from '../OncomingCar/OncomingCar';
import { oncomingCars } from '../../data/oncomingCars';
import { myCarMoveHandler } from '../helpers/myCarMoveHandler';
import { isCrashCheck } from '../helpers/isCrushCheck';
import { ScoreContainer } from '../ScoreContainer/ScoreContainer';

const canvas = document.getElementById('canvasRoot') as HTMLCanvasElement;
const rootScore = document.getElementById('rootScore');
const ctx = canvas.getContext('2d');

export class Game {
  myCarX: number;

  myCarY: number;

  backgroundY: number;

  isCrash: boolean;

  oncomingCarY: number;

  roadY: number;

  speedCoeff: number;

  goal: number;

  delayTimeout: number;

  constructor() {
    this.myCarX = startPosition.myCarX;
    this.myCarY = startPosition.myCarY;
    this.backgroundY = startPosition.backgroundY;
    this.isCrash = false;
    this.oncomingCarY = startPosition.oncomingCarY;
    this.roadY = startPosition.roadY;
    this.speedCoeff = 0;
    this.goal = startScore.goal;
    this.delayTimeout = 300;
  }

  initUpdate = () => {
    this.timeout();
  }

  movingRoad = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground(this.backgroundY);
    drawRoad(this.roadY);
    this.oncomingCarY = this.oncomingCarY > maxOncomingCarsY ? startPosition.oncomingCarY
      : this.oncomingCarY;
    const oncomingCarsPointsCoord = oncomingCars.map((car) => drawOncomingCar(car.oncomingCarX,
      car.oncomingCarY + this.oncomingCarY));
    const myCarPointsCoord = drawMyCar(this.myCarX, this.myCarY);
    this.isCrash = isCrashCheck(oncomingCarsPointsCoord, myCarPointsCoord);
  };

  updateGame = (isPressed: string) => {
    rootScore.innerHTML = '';
    ScoreContainer(this.goal * 100, 0, 0, this.speedCoeff, this.goal);
    if (!this.isCrash) {
      this.myCarX = myCarMoveHandler(isPressed, this.myCarX, this.myCarY).myCarX;
      this.myCarY = myCarMoveHandler(isPressed, this.myCarX, this.myCarY).myCarY;
    }
    this.movingRoad();
  };

  updateBackground = () => {
    rootScore.innerHTML = '';
    const oncomingCarsPointsCoord = oncomingCars.map((car) => drawOncomingCar(car.oncomingCarX,
      car.oncomingCarY + this.oncomingCarY));
    if (oncomingCarsPointsCoord.flat().some((point) => point === '635')) {
      this.goal += 1;
    }
    ScoreContainer(this.goal * 100, 0, 0, this.speedCoeff, this.goal);
    this.roadY = this.roadY > 50 ? this.roadY = -25 : this.roadY;
    this.roadY += moveStep;
    this.oncomingCarY += moveStep;
    this.movingRoad();
  };

  moveBackground = () => {
    this.updateBackground();
    if (this.delayTimeout !== 50) {
      this.delayTimeout -= 0.5;
    }
    if (this.delayTimeout % 30 === 0) {
      this.speedCoeff += 1;
    }
    if (!this.isCrash) {
      setTimeout(this.moveBackground, this.delayTimeout);
    }
  }

  timeout = () => {
    setTimeout(this.moveBackground, this.delayTimeout);
  }

  keyHandler = (e) => {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.updateGame('Right');
    } if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.updateGame('Left');
    } if (e.key === 'Up' || e.key === 'ArrowUp') {
      this.updateGame('Up');
    } if (e.key === 'Down' || e.key === 'ArrowDown') {
      this.updateGame('Down');
    }
  };
}
