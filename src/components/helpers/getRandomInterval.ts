import { maxCarsInterval, minCarsInterval } from '../consts';

export const getRandomNumber = () => {
  const rand = minCarsInterval - 0.5 + Math.random() * (maxCarsInterval - minCarsInterval + 1);
  return Math.round(rand);
};
