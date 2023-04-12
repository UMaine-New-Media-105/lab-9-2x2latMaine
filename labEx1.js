let ball1, ball2;

let speedX, speedY;

let listOfBalls = [];
let listOfColors = [];

function setup() {
  createCanvas(400, 400);

  listOfBalls = [];
  listOfColors = ['red', 'orangered', 'orange', 'yellow'];
  
  for(let ballsCreated = 0; ballsCreated < 10; ballsCreated++){
    listOfBalls.push({
      x: random(50, 350),
      y: random(50, 350),
      speedX: random(7, 10),
      speedY: random(7, 10),
      color: random(listOfColors)
  });
  }
}

function draw() {
  background('midnightblue');

  for (let ballsDrawn = 0; ballsDrawn < listOfBalls.length; ballsDrawn++) {
    let randomBall = listOfBalls[ballsDrawn];

    drawSprite(randomBall.x, randomBall.y, randomBall.color);

    if (randomBall.x > width - 50 || randomBall.x < 50) {
      randomBall.speedX *= -1;
    }
    if (randomBall.y > height - 50 || randomBall.y < 50) {
      randomBall.speedY *= -1;
    }

    randomBall.x += randomBall.speedX;
    randomBall.y += randomBall.speedY;
  }
}

function drawSprite(x, y, color) {
  fill(color);
  ellipse(x, y, 100);
}
