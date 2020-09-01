import {
  maxCarDown, maxCarLeft, maxCarRight, maxCarUp, moveStep,
} from '../consts';

export const myCarMoveHandler = (isPressed, myCarX, myCarY): { myCarX: number, myCarY: number } => {
  if (isPressed === 'Right' && myCarX < maxCarRight) {
    return { myCarX: myCarX + moveStep, myCarY };
  } if (isPressed === 'Left' && myCarX > maxCarLeft) {
    return { myCarX: myCarX - moveStep, myCarY };
  } if (isPressed === 'Up' && myCarY > maxCarUp) {
    return { myCarX, myCarY: myCarY - moveStep };
  } if (isPressed === 'Down' && myCarY < maxCarDown) {
    return { myCarX, myCarY: myCarY + moveStep };
  }
  return { myCarX, myCarY };
};
