const canvas = document.getElementById('canvasRoot') as HTMLCanvasElement;
export const roadWidth = canvas.width - 270;
export const roadHeight = canvas.height;

export const startPosition = {
  myCarY: 515,
  myCarX: 65,
  backgroundY: -145,
  roadY: -25,
  oncomingCarX: 95,
  oncomingCarY: -145,
};

export const moveStep = 30;

export const maxCarLeft = 65;
export const maxCarRight = 215;
export const maxCarUp = 5;
export const maxCarDown = 515;
