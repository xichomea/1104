class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(1, 3));
    this.acc = createVector();
    this.w = random(10, 20);
    this.color = [random(50,255), random(50,255), random(50,255)];
  }

  update() {
    // 마우스 방향으로 약간 가속
    let mouse = createVector(mouseX, mouseY);
    let force = p5.Vector.sub(mouse, this.pos);
    force.setMag(0.05);  // 약한 힘
    this.acc = force;

    // 랜덤 가속도 조금 추가
    let randomAcc = p5.Vector.random2D().mult(0.2);
    this.acc.add(randomAcc);

    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
  }

  edges() {
    if (this.pos.x < 0) { this.pos.x = 0; this.vel.x *= -1; }
    if (this.pos.x > width) { this.pos.x = width; this.vel.x *= -1; }
    if (this.pos.y < 0) { this.pos.y = 0; this.vel.y *= -1; }
    if (this.pos.y > height) { this.pos.y = height; this.vel.y *= -1; }
  }

  show() {
    fill(...this.color, 180);
    circle(this.pos.x, this.pos.y, this.w);
  }
}