const canvas = document.getElementById('canvasRoot') as HTMLCanvasElement;
export const roadWidth = canvas.width - 270;
export const roadHeight = canvas.height - 30;

export const startPosition = {
    myCarY: 515,
    myCarX: 65,
}

export const moveStep = 30;

export const maxCarLeft = 65;
export const maxCarRight = 215;
export const maxCarUp = 5;
export const maxCarDown = 515;


