import {
  maxOncomingCarsY,
  maxRoadY,
  minRoadY,
  moveStep,
  scoreIncreaseCoeff,
  startPosition,
  startScore, timeout,
} from '../consts';
import { drawRoad } from '../Road/Road';
import { drawBackground } from '../Background/Background';
import { drawMyCar } from '../MyCar/MyCar';
import { drawOncomingCar } from '../OncomingCar/OncomingCar';
import { oncomingCars } from '../../data/oncomingCars';
import { myCarMoveHandler } from '../helpers/myCarMoveHandler';
import { isCrashCheck } from '../helpers/isCrushCheck';
import { ScoreContainer } from '../ScoreContainer/ScoreContainer';
import { drawLifes } from '../Lifes/Lifes';
import { GameOverScreen } from '../GameOverScreen/GameOverScreen';

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
  score: number;
  hiScore: number;
  lifes: number;
  speedCoeff: number;
  goal: number;
  delayTimeout: number;
  takeOnMe: HTMLAudioElement;
  setTimeout: NodeJS.Timeout;

  constructor() {
    this.canvas = document.getElementById('canvasRoot') as HTMLCanvasElement;
    this.rootScore = document.getElementById('rootScore');
    this.ctx = this.canvas.getContext('2d');
    this.myCarX = null;
    this.myCarY = null;
    this.backgroundY = null;
    this.isCrash = false;
    this.oncomingCarY = null;
    this.roadY = null;
    this.speedCoeff = null;
    this.goal = startScore.goal;
    this.score = null;
    this.delayTimeout = null;
    this.hiScore = Number(localStorage.hiScore);
    this.lifes = startScore.lifes;
    this.takeOnMe = new Audio('src/audio/take-on-me.mp3');
    this.setTimeout = null;
  }

  initStartPosition = () => {
    this.myCarX = startPosition.myCarX;
    this.myCarY = startPosition.myCarY;
    this.backgroundY = startPosition.backgroundY;
    this.isCrash = false;
    this.oncomingCarY = startPosition.oncomingCarY;
    this.roadY = startPosition.roadY;
    this.speedCoeff = startScore.speed;
    this.delayTimeout = timeout.startTimeout;
  }

  initUpdate = () => {
    this.takeOnMe.addEventListener('ended', () => this.takeOnMe.play().then());
    this.initStartPosition();
    this.takeOnMe.play().then();
    this.timeout();
    this.buttonMove();
  }

  movingRoad = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    drawBackground(this.backgroundY);
    drawLifes(this.lifes);
    drawRoad(this.roadY);
    this.oncomingCarY = this.oncomingCarY > maxOncomingCarsY ? startPosition.oncomingCarY
      : this.oncomingCarY;
    const oncomingCarsPointsCoord = oncomingCars.map((car) => drawOncomingCar(car.oncomingCarX,
      car.oncomingCarY + this.oncomingCarY));
    const myCarPointsCoord = drawMyCar(this.myCarX, this.myCarY);
    this.isCrash = isCrashCheck(oncomingCarsPointsCoord, myCarPointsCoord);
    if (this.isCrash) {
      clearTimeout(this.setTimeout);
    }
  };

  updateGame = (isPressed: string) => {
    const oncomingCarsPointsCoord = oncomingCars.map((car) => drawOncomingCar(car.oncomingCarX,
      car.oncomingCarY + this.oncomingCarY));
    const myCarPointsCoord = drawMyCar(this.myCarX, this.myCarY);
    this.isCrash = isCrashCheck(oncomingCarsPointsCoord, myCarPointsCoord);
    this.rootScore.innerHTML = '';
    ScoreContainer(this.score, this.hiScore, startScore.lifes, this.speedCoeff, this.goal);
    if (!this.isCrash) {
      this.myCarX = myCarMoveHandler(isPressed, this.myCarX, this.myCarY).myCarX;
      this.myCarY = myCarMoveHandler(isPressed, this.myCarX, this.myCarY).myCarY;
      this.movingRoad();
    }
  };

  updateBackground = () => {
    this.rootScore.innerHTML = '';
    this.score = this.goal * scoreIncreaseCoeff;
    const oncomingCarsPointsCoord = oncomingCars.map((car) => drawOncomingCar(car.oncomingCarX,
      car.oncomingCarY + this.oncomingCarY));
    if (oncomingCarsPointsCoord.flat().some((point) => point === '635')) {
      this.goal += 1;
    }
    ScoreContainer(this.score, this.hiScore, 0, this.speedCoeff, this.goal);
    this.roadY = this.roadY > maxRoadY ? this.roadY = minRoadY : this.roadY;
    this.roadY += moveStep;
    this.oncomingCarY += moveStep;
    this.movingRoad();
  };

  moveBackground = () => {
    if (!this.isCrash) {
      this.updateBackground();
    }
    if (this.delayTimeout !== timeout.minTimeout) {
      this.delayTimeout -= timeout.changeTimeout;
    }
    if (this.delayTimeout % timeout.speedIncreaseThreshold === 0) {
      this.speedCoeff += timeout.increaseSpeedCoeff;
    }
    if (!this.isCrash) {
      setTimeout(this.moveBackground, this.delayTimeout);
    } else {
      this.crashEvent();
    }
  }

  timeout = () => {
    this.setTimeout = setTimeout(this.moveBackground, this.delayTimeout);
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

  crashEvent = () => {
    const crashAudio = new Audio('src/audio/crash.mp3');
    crashAudio.play().then();
    if (this.lifes === 1) {
      this.endGameEvent();
    } else {
      this.initStartPosition();
      this.isCrash = false;
      this.lifes -= 1;
      this.initUpdate();
    }
  }

  endGameEvent = () => {
    GameOverScreen(this.score);
    this.takeOnMe.pause();
    if (Number(localStorage.hiScore) < this.score) {
      localStorage.hiScore = this.score;
    }
  }
}
