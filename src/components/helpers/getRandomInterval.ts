import { maxCarsInterval, minCarsIntreval } from '../consts';

export const getRandomNumber = () => {
  const rand = minCarsIntreval - 0.5 + Math.random() * (maxCarsInterval - minCarsIntreval + 1);
  return Math.round(rand);
};
