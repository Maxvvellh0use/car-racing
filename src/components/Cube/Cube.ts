export const drawCube = (coordX: number, coordY: number, opacity: number = 0.9) => {
  const canvas = document.getElementById('canvasRoot') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.rect(coordX, coordY, 25, 25);
  ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.rect(coordX + 5, coordY + 5, 15, 15);
  ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
  ctx.fill();
  ctx.closePath();
};
