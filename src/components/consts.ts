const canvas = document.getElementById('canvasRoot') as HTMLCanvasElement;
export const roadWidth = canvas.width;
export const roadHeight = canvas.height;

export const startPosition = {
  myCarY: 515,
  myCarX: 95,
  backgroundY: -145,
  roadY: -25,
  oncomingCarX: 95,
  oncomingCarY: -145,
};

export const moveStep = 30;

export const maxCarLeft = 95;
export const maxCarRight = 185;
export const maxCarUp = 5;
export const maxCarDown = 515;

export const maxCarsInterval = 720;
export const minCarsIntreval = 270;

export const maxOncomingCarsY = 4450;

export const startScore = {
  score: 0,
  hiScore: 0,
  lifes: 0,
  speed: 0,
  goal: 0,
}
