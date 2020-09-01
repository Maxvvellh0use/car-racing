import { drawMyCar } from './MyCar';
import { drawRoad } from './Road';
import { drawBackground } from './Background';
import { keyHandler } from './EventHandlers';
import { startPosition } from './consts';
import {drawOncomingCar} from "./OncomingCar";

document.addEventListener('keydown', (e) => keyHandler(e), false);

export const InitGame = () => {
  drawRoad(-25);
  drawBackground(-25);
  drawMyCar(startPosition.myCarX, startPosition.myCarY);
};


