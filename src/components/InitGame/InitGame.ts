import { drawMyCar } from '../MyCar/MyCar';
import { drawRoad } from '../Road/Road';
import { drawBackground } from '../Background/Background';
import { startPosition, startScore } from '../consts';
import { ScoreContainer } from '../ScoreContainer/ScoreContainer';
import { Game } from '../Game/Game';

export const InitGame = () => {
  ScoreContainer(startScore.score, startScore.hiScore, startScore.lifes,
    startScore.speed, startScore.speed);
  drawRoad(-25);
  drawBackground(-25);
  drawMyCar(startPosition.myCarX, startPosition.myCarY);
  const game = new Game();
  document.addEventListener('keydown', (e) => game.keyHandler(e), false);
  game.initUpdate();
};
