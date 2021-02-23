const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

let hue = 0;
// let gameSpeed = 0;
// let frame = 0;

// console.log(ctx);
canvas.width = 900;
canvas.height = 900;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // floor.draw();
  handleFloor();
  requestAnimationFrame(animate);
  hue++;
}
animate();

window.addEventListener("resize", function () {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
