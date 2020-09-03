import { drawMyCar } from '../MyCar/MyCar';
import { drawRoad } from '../Road/Road';
import { drawBackground } from '../Background/Background';
import {
  canvasFieldWidths, iconsMusic, startPosition, startScore,
} from '../consts';
import { ScoreContainer } from '../ScoreContainer/ScoreContainer';
import { Game } from '../Game/Game';
import { drawLifes } from '../Lifes/Lifes';

const drawGameBlock = (fieldWidth, root, buttonsMoveRoot) => {
  root.insertAdjacentHTML('afterbegin', `<canvas 
                                                     class="canvas"
                                                     id="canvasRoot" 
                                                     width="${canvasFieldWidths[fieldWidth]}" 
                                                     height="630"></canvas>`);
  buttonsMoveRoot.insertAdjacentHTML('beforeend', `
                <button class="button_move button_move__left" id="buttonLeft"></button>
                <button class="button_move button_move__right" id="buttonRight"></button>`);
  drawRoad(-25, fieldWidth);
  drawBackground(-25, fieldWidth);
  drawMyCar(startPosition.myCarX, startPosition.myCarY);
  ScoreContainer(startScore.score, Number(localStorage.hiScore), startScore.lifes,
    startScore.speed, startScore.speed, iconsMusic.musicOn);
  drawLifes(startScore.lifes);
};

export const InitGame = (fieldWidth: string) => {
  const root = document.getElementById('root');
  const startScreen = document.getElementById('startScreenRoot');
  const buttonsMoveRoot = document.getElementById('buttonsMoveRoot');
  localStorage.hiScore = localStorage.hiScore ? localStorage.hiScore : 0;
  startScreen.classList.add('hidden');
  buttonsMoveRoot.innerHTML = '';
  drawGameBlock(fieldWidth, root, buttonsMoveRoot);
  const game = new Game(fieldWidth);
  document.addEventListener('keydown', (e) => game.keyHandler(e), false);
  game.initUpdate();
};
