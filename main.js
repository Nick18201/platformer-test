const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

// console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
