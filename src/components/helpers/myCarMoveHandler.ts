import {
  maxCarDown, maxCarLeft, maxCarRightWide, maxCarRightNarrow, maxCarUp, moveStep,
} from '../consts';

export const myCarMoveHandler = (isPressed, myCarX, myCarY, fieldWidth): { myCarX: number,
  myCarY: number } => {
  const maxCarRight = fieldWidth === 'narrow' ? maxCarRightNarrow : maxCarRightWide;
  if (isPressed === 'Right' && myCarX < maxCarRight) {
    return { myCarX: myCarX + (moveStep * 3), myCarY };
  } if (isPressed === 'Left' && myCarX > maxCarLeft) {
    return { myCarX: myCarX - (moveStep * 3), myCarY };
  } if (isPressed === 'Up' && myCarY > maxCarUp) {
    return { myCarX, myCarY: myCarY - moveStep };
  } if (isPressed === 'Down' && myCarY < maxCarDown) {
    return { myCarX, myCarY: myCarY + moveStep };
  }
  return { myCarX, myCarY };
};
