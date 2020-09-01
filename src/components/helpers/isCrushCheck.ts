export const isCrashCheck = (oncomingCarsPointsCoord, myCarPointsCoord): boolean => {
  let isCrash = false;
  oncomingCarsPointsCoord.map((pontsArray) => {
    pontsArray.map((pointsCoord) => {
      if (myCarPointsCoord.find((myCarPoint) => pointsCoord === myCarPoint)) {
        isCrash = true;
      }
      return false;
    });
    return false;
  });
  return isCrash;
};
