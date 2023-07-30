const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#bada55'
ctx.lineWidth = 1

let isDrawing = false;
let lineWidth = 5;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  ctx.beginPath()
  ctx.moveTo(lastX, lastY)
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
  lastX = e.offsetX;
  lastY = e.offsetY;
  hue++
  if (ctx.lineWidth > 100 || ctx.lineWidth <= 1) {
    direction = !direction
  }
  direction ? ctx.lineWidth++ : ctx.lineWidth--
}

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})



window.addEventListener('mousedown', function (e) {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
})

window.addEventListener('mouseup', () => isDrawing = false)

window.addEventListener('mouesout', () => isDrawing = false)

window.addEventListener('mousemove', draw)

document.querySelector('button').addEventListener('click', function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})
