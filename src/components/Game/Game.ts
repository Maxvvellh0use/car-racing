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
//
// const takeOnMe = require('../../assets/audio/take-on-me.mp3');

export class Game {
  canvas: HTMLCanvasElement;

  rootScore: HTMLElement;

  ctx: CanvasRenderingContext2D;

  myCarX: number;

  myCarY: number;

  backgroundY: number;

  isCrash: boolean;

  oncomingCarY: number;

  roadY: number;

  speedCoeff: number;

  goal: number;

  delayTimeout: number;

  takeOnMe: HTMLAudioElement;

  constructor() {
    this.canvas = document.getElementById('canvasRoot') as HTMLCanvasElement;
    this.rootScore = document.getElementById('rootScore');
    this.ctx = this.canvas.getContext('2d');
    this.myCarX = startPosition.myCarX;
    this.myCarY = startPosition.myCarY;
    this.backgroundY = startPosition.backgroundY;
    this.isCrash = false;
    this.oncomingCarY = startPosition.oncomingCarY;
    this.roadY = startPosition.roadY;
    this.speedCoeff = 0;
    this.goal = startScore.goal;
    this.delayTimeout = 300;
    this.takeOnMe = new Audio('src/audio/take-on-me.mp3');
  }

  initUpdate = () => {
    this.takeOnMe.play().then();
    this.timeout();
    this.buttonMove();
  }

  movingRoad = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
    const oncomingCarsPointsCoord = oncomingCars.map((car) => drawOncomingCar(car.oncomingCarX,
      car.oncomingCarY + this.oncomingCarY));
    const myCarPointsCoord = drawMyCar(this.myCarX, this.myCarY);
    this.isCrash = isCrashCheck(oncomingCarsPointsCoord, myCarPointsCoord);
    this.rootScore.innerHTML = '';
    ScoreContainer(this.goal * 100, 0, 0, this.speedCoeff, this.goal);
    if (!this.isCrash) {
      this.myCarX = myCarMoveHandler(isPressed, this.myCarX, this.myCarY).myCarX;
      this.myCarY = myCarMoveHandler(isPressed, this.myCarX, this.myCarY).myCarY;
    }
    this.movingRoad();
  };

  updateBackground = () => {
    this.rootScore.innerHTML = '';
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
    } else {
      this.endGame();
    }
  }

  timeout = () => {
    setTimeout(this.moveBackground, this.delayTimeout);
  }

  isMoveKey = (e): boolean => e.key === 'Right' || e.key === 'ArrowRight'
        || e.key === 'Left' || e.key === 'ArrowLeft'

  buttonMove = () => {
    const moveAudio = new Audio('src/audio/move.mp3');
    moveAudio.volume = 0.1;
    const buttonLeft = document.getElementById('buttonLeft');
    const buttonRight = document.getElementById('buttonRight');
    buttonLeft.addEventListener('click', () => {
      this.updateGame('Left');
      moveAudio.play().then();
    });
    buttonRight.addEventListener('click', () => {
      this.updateGame('Right');
      moveAudio.play().then();
    });
  }

  keyHandler = (e) => {
    const moveAudio = new Audio('src/audio/move.mp3');
    moveAudio.volume = 0.1;
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.updateGame('Right');
    } if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.updateGame('Left');
    } if (!this.isCrash && this.isMoveKey(e)) {
      moveAudio.play().then();
    }
  };

  endGame = () => {
    this.takeOnMe.pause();
  }
}
