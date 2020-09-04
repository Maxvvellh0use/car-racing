import { goalPoint } from '../consts';

export const isGoal = (oncomingCarsPointsCoord): boolean => {
  const arrFlat = [].concat(...oncomingCarsPointsCoord);
  return arrFlat.some((point) => point === goalPoint);
};
