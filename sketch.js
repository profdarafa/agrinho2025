// Projeto p5.js: Campo e Cidade Realistas e Atraentes

let cloudOffset = 0;
let car1X = 460;
let car2X = 700;

function setup() {
  createCanvas(1000, 500);
  frameRate(60);
  cloudOffset = 0;
  car1X = 460;
  car2X = 700;
}

function draw() {
  background(135, 206, 235); // Céu azul
  drawSun();
  drawClouds();
  drawField();
  drawCity();
  animateElements();
}

function animateElements() {
  cloudOffset += 0.3;
  car1X += 2;
  if (car1X > width) car1X = 400;
  car2X -= 1.5;
  if (car2X < 400) car2X = width;
}

function drawSun() {
  noStroke();
  fill(255, 204, 0);
  ellipse(100, 80, 100, 100);
}

function drawClouds() {
  for (let i = 0; i < 4; i++) {
    drawCloud((150 + i * 200 + cloudOffset) % width, 60 + sin(frameCount * 0.01 + i) * 5);
  }
}

function drawCloud(x, y) {
  fill(255);
  noStroke();
  ellipse(x, y, 60, 50);
  ellipse(x + 30, y + 10, 50, 40);
  ellipse(x - 30, y + 10, 50, 40);
}

function drawField() {
  fill(46, 139, 87);
  rect(0, 300, 500, 200);

  fill(184, 134, 11);
  rect(0, 400, 500, 30);

  for (let i = 40; i < 480; i += 90) {
    drawModernTree(i, 270);
  }

  drawHouse(60, 330);
  drawHouse(200, 330);
  drawHouse(340, 330);

  for (let i = 0; i < 500; i += 15) {
    fill(255, 255, 0);
    rect(i, 290, 5, 10);
  }
}

function drawModernTree(x, y) {
  fill(101, 67, 33);
  rect(x + 10, y + 40, 12, 40);
  fill(50, 205, 50);
  ellipse(x + 16, y + 30, 45, 45);
  fill(34, 139, 34, 150);
  ellipse(x + 8, y + 40, 40, 30);
}

function drawHouse(x, y) {
  fill(220);
  rect(x, y, 70, 50);
  fill(150);
  triangle(x, y, x + 35, y - 30, x + 70, y);
  fill(80);
  rect(x + 25, y + 20, 20, 30);
}

function drawCity() {
  fill(40);
  rect(500, 400, 500, 30);

  stroke(255, 255, 0);
  strokeWeight(2);
  for (let i = 510; i < width; i += 40) {
    line(i, 415, i + 20, 415);
  }
  noStroke();

  for (let i = 540; i < width; i += 100) {
    drawBuilding(i, 180);
  }

  fill(144, 238, 144);
  rect(520, 320, 120, 70);
  fill(0);
  textSize(14);
  text("Praça Central", 540, 360);

  drawCar(car1X, 405, color(255, 0, 0));
  drawCar(car2X, 410, color(0, 200, 255));
}

function drawBuilding(x, h) {
  fill(169, 169, 169);
  rect(x, h, 80, 220);
  fill(255);
  for (let y = h + 10; y < 400; y += 25) {
    rect(x + 10, y, 15, 15);
    rect(x + 55, y, 15, 15);
  }
}

function drawCar(x, y, col) {
  fill(col);
  rect(x, y, 60, 25, 5);
  fill(0);
  ellipse(x + 15, y + 25, 15);
  ellipse(x + 45, y + 25, 15);
}
