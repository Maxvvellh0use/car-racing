import { drawMyCar } from '../MyCar/MyCar';
import { drawRoad } from '../Road/Road';
import { drawBackground } from '../Background/Background';
import {
  canvasFieldWidths, iconsMusic, startPosition, startScore, zero,
} from '../consts';
import { ScoreContainer } from '../ScoreContainer/ScoreContainer';
import { Game } from '../Game/Game';
import { drawLifes } from '../Lifes/Lifes';

const drawGameBlock = (fieldWidth, root, buttonsMoveRoot, musicIcon) => {
  root.insertAdjacentHTML('afterbegin', `<canvas 
                                                     class="canvas"
                                                     id="canvasRoot" 
                                                     width="${canvasFieldWidths[fieldWidth]}" 
                                                     height="630"></canvas>`);
  buttonsMoveRoot.insertAdjacentHTML('beforeend', `
                <button class="button_move button_move__left" id="buttonLeft"></button>
                <button class="button_move button_move__right" id="buttonRight"></button>`);
  drawRoad(startPosition.startRoadCoordY, fieldWidth);
  drawBackground(startPosition.startRoadCoordY, fieldWidth);
  drawMyCar(startPosition.myCarX, startPosition.myCarY);
  ScoreContainer(startScore.score, Number(localStorage.hiScore), startScore.lifes,
    startScore.speed, startScore.speed, musicIcon);
  drawLifes(startScore.lifes);
};

export const InitGame = (fieldWidth: string) => {
  const musicOnOffIcons = {
    on: new Image(50),
    off: new Image(50),
  };
  musicOnOffIcons.on.src = iconsMusic.musicOn;
  musicOnOffIcons.off.src = iconsMusic.musicOff;
  const root = document.getElementById('root');
  const startScreen = document.getElementById('startScreenRoot');
  const buttonsMoveRoot = document.getElementById('buttonsMoveRoot');
  localStorage.hiScore = localStorage.hiScore ? localStorage.hiScore : zero;
  startScreen.classList.add('hidden');
  buttonsMoveRoot.innerHTML = '';
  drawGameBlock(fieldWidth, root, buttonsMoveRoot, musicOnOffIcons.on);
  const game = new Game(fieldWidth, musicOnOffIcons);
  document.addEventListener('keydown', (e) => game.keyHandler(e), false);
  game.initUpdate();
  game.initButtonsListeners();
};
