import { drawMyCar } from './MyCar';
import { drawRoad } from './Road';
import { drawBackground } from './Background';
import { keyHandler } from './EventHandlers';
import { startPosition, startScore } from './consts';
import { ScoreContainer } from './ScoreContainer/ScoreContainer';

document.addEventListener('keydown', (e) => keyHandler(e), false);

export const InitGame = () => {
  ScoreContainer(startScore.score, startScore.hiScore, startScore.lifes,
    startScore.speed, startScore.speed);
  drawRoad(-25);
  drawBackground(-25);
  drawMyCar(startPosition.myCarX, startPosition.myCarY);
};
