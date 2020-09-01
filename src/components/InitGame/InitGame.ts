import { drawMyCar } from '../MyCar/MyCar';
import { drawRoad } from '../Road/Road';
import { drawBackground } from '../Background/Background';
import { startPosition, startScore } from '../consts';
import { ScoreContainer } from '../ScoreContainer/ScoreContainer';
import { Game } from '../Game/Game';

export const InitGame = () => {
  const root = document.getElementById('root');
  const startScreen = document.getElementById('startScreen');
  const buttonsMoveRoot = document.getElementById('buttonsMoveRoot');
  startScreen.classList.add('hidden');
  root.insertAdjacentHTML('afterbegin', `<canvas 
                                                     class="canvas"
                                                     id="canvasRoot" 
                                                     width="305" 
                                                     height="630"></canvas>`);
  buttonsMoveRoot.insertAdjacentHTML('beforeend', `
                <button class="button_move button_move__left" id="buttonLeft"></button>
                <button class="button_move button_move__right" id="buttonRight"></button>`);
  ScoreContainer(startScore.score, startScore.hiScore, startScore.lifes,
    startScore.speed, startScore.speed);
  drawRoad(-25);
  drawBackground(-25);
  drawMyCar(startPosition.myCarX, startPosition.myCarY);
  const game = new Game();
  document.addEventListener('keydown', (e) => game.keyHandler(e), false);

  game.initUpdate();
};
