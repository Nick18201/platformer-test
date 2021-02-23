const floorArrays = [];

class Floor {
  constructor() {
    this.height = (canvas.height * 10) / 100;
    this.color = "hsla(" + hue + ",100%,50%,0.8)";
    this.width = canvas.width / 20;
    this.x = 0;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.x,
      canvas.height - this.height,
      this.width,
      canvas.height
    );
  }
  update() {
    this.draw();
  }
}
function handleFloor() {
  floorArrays.unshift(new Floor());
  for (let i = 0; i < floorArrays.length; i++) {
    floorArrays[i].update();
  }
  floorArrays.map((floor) => (floor.x += floor.width));

  if (floorArrays.length > 25) {
    floorArrays.pop(floorArrays[0]);
  }
}
