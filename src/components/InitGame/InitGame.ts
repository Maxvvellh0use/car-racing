import { drawMyCar } from '../MyCar/MyCar';
import { drawRoad } from '../Road/Road';
import { drawBackground } from '../Background/Background';
import { startPosition, startScore } from '../consts';
import { ScoreContainer } from '../ScoreContainer/ScoreContainer';
import { Game } from '../Game/Game';
import { drawLifes } from '../Lifes/Lifes';

export const InitGame = () => {
  const root = document.getElementById('root');
  const startScreen = document.getElementById('startScreenRoot');
  const buttonsMoveRoot = document.getElementById('buttonsMoveRoot');
  localStorage.hiScore = localStorage.hiScore ? localStorage.hiScore : 0;
  startScreen.classList.add('hidden');
  buttonsMoveRoot.innerHTML = '';
  root.insertAdjacentHTML('afterbegin', `<canvas 
                                                     class="canvas"
                                                     id="canvasRoot" 
                                                     width="305" 
                                                     height="630"></canvas>`);
  buttonsMoveRoot.insertAdjacentHTML('beforeend', `
                <button class="button_move button_move__left" id="buttonLeft"></button>
                <button class="button_move button_move__right" id="buttonRight"></button>`);
  ScoreContainer(startScore.score, Number(localStorage.hiScore), startScore.lifes,
    startScore.speed, startScore.speed);
  drawLifes(startScore.lifes);
  drawRoad(-25);
  drawBackground(-25);
  drawMyCar(startPosition.myCarX, startPosition.myCarY);
  const game = new Game();
  document.addEventListener('keydown', (e) => game.keyHandler(e), false);
  game.initUpdate();
};
