const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

// set the canvas size
canvas.width = 1280;
canvas.height = 720;

const keys = [];

const playerSprite = new Image();
playerSprite.src = "Cuphead.png";

const background = new Image();
background.src = "background.png";
let backgroundPositionX = 0;

const player = {
  x: 0,
  y: canvas.height - playerSprite.height / 8 - 150,
  width: playerSprite.width / 16,
  height: playerSprite.height / 8,
  frameX: 0,
  frameY: 5,
  speed: 9,
  moving: false,
  facingLeft: false,
  facingRight: false,
};

function drawCuphead(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

// function animateCanvas() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(
//     background,
//     backgroundPositionX,
//     0,
//     canvas.width,
//     canvas.height
//   );
//   drawCuphead(
//     playerSprite,
//     player.width * player.frameX,
//     player.height * player.frameY,
//     player.width,
//     player.height,
//     player.x,
//     player.y,
//     player.width,
//     player.height
//   );
//   // backgroundPositionX++; this could move the background
//   movePlayer();
//   handleMove();
//   requestAnimationFrame(animateCanvas);
// }
// animateCanvas();

// add event listener on keyboard
window.addEventListener("keydown", function (e) {
  keys[e.key] = true;
  player.moving = true;
  // console.log(e);
});
window.addEventListener("keyup", function (e) {
  delete keys[e.key];
  player.moving = false;
});

function movePlayer() {
  if (keys["ArrowLeft"] && player.x > 0) {
    player.x -= player.speed;
    player.moving = true;
    player.facingLeft = true;
    player.facingRight = false;
    player.frameY = 4;
  }
  if (keys["ArrowRight"] && player.x < canvas.width - player.width) {
    player.x += player.speed;
    player.moving = true;
    player.facingRight = true;
    player.facingLeft = false;
    player.frameY = 3;
  }
  // if (!player.moving) player.frameY = 5;
}

function handlePlayerFrame() {
  if (player.facingRight) {
    if (player.frameX < 13 && player.moving) player.frameX++;
    else player.frameX = 3;
  } else if (player.facingLeft) {
    if (player.frameX > 0 && player.moving) player.frameX--;
    else player.frameX = 10;
  } //else if (!player.moving && player.frameX > 13) player.frameX++;
}

let fps, fpsInterval, now, then, elapsed;

function startAnimating(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  animateCanvas();
}

function animateCanvas() {
  requestAnimationFrame(animateCanvas);
  now = Date.now();
  elapsed = now - then;
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      background,
      backgroundPositionX,
      0,
      canvas.width,
      canvas.height
    );
    drawCuphead(
      playerSprite,
      player.width * player.frameX,
      player.height * player.frameY,
      player.width,
      player.height,
      player.x,
      player.y,
      player.width,
      player.height
    );
    movePlayer();
    handlePlayerFrame();
  }
}
startAnimating(30);
