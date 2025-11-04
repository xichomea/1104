let balls = [];
let numBalls = 10;

function setup() {
  createCanvas(600, 400);
  noStroke();
  for (let i = 0; i < numBalls; i++) {
    balls.push(new Walker(random(width), random(height)));
  }
}

function draw() {
  background(0, 30);
  for (let b of balls) {
    b.update();
    b.edges();
    b.show();
  }
}
