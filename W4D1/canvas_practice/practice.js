document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('mycanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 0, 500, 500);
  ctx.beginPath();
  ctx.arc(400, 400, 55, 0, Math.PI * 2, false);
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'red';
  ctx.lineWidth = 2.0;
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(50, 50, 50, 0, Math.PI * 2);
  ctx.moveTo(50, 50);
  ctx.lineTo(400, 200);
  ctx.lineTo(300, 250);
  ctx.lineTo(55, 55);
  ctx.strokeStyle = 'red';
  ctx.fillStyle = 'black';
  ctx.lineWidth = 10;
  ctx.stroke();
  ctx.fill();
});
