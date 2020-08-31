import { drawCar } from './MyCar';
import { drawRoad } from './Road';
import { drawBackground } from './Background';
import { keyHandler } from './EventHandlers';
import { startPosition } from './consts';

document.addEventListener('keydown', (e) => keyHandler(e), false);

export const InitGame = () => {
  drawRoad();
  drawBackground();
  drawCar(startPosition.myCarX, startPosition.myCarY);
};


