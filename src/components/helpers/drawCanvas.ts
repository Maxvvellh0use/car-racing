export const drawCanvas = (ctx, coordX, coordY, opacity) => {
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
