import { oncomingCarsNarrow, oncomingCarsWide } from '../../data/oncomingCars';
import { drawOncomingCar } from '../OncomingCar/OncomingCar';

export const getOncomingCars = (fieldWidth: string, oncomingCarY: number) => {
  return fieldWidth === 'narrow'
    ? oncomingCarsNarrow.map((car) => drawOncomingCar(car.oncomingCarX,
      car.oncomingCarY + oncomingCarY))
    : oncomingCarsWide.map((car) => drawOncomingCar(car.oncomingCarX,
      car.oncomingCarY + oncomingCarY));
};
