import { UpdateGame } from './UpdateGame';

export const keyHandler = (e) => {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    UpdateGame('Right');
  } if (e.key === 'Left' || e.key === 'ArrowLeft') {
    UpdateGame('Left');
  } if (e.key === 'Up' || e.key === 'ArrowUp') {
    UpdateGame('Up');
  } if (e.key === 'Down' || e.key === 'ArrowDown') {
    UpdateGame('Down');
  }
};
