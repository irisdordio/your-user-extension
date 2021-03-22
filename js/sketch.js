
var w = window.innerWidth;
var h = window.innerHeight;

let timing = 0;

function setup() {
  canvas = createCanvas(w, h);
  noStroke();
}

function draw() {
  background(255);
  fill(0);

  for (let x = 15; x <= width; x = x + 60) {
    for (let y = 8; y <= height; y = y + 60) {
      const xAngle = map(mouseX, 5, width, -4 * PI, 5 * PI, true);
      const yAngle = map(mouseY, 5, height, -4 * PI, 5 * PI, true);
      const angle = xAngle * (x / width) + yAngle * (y / height);
      const myX = x + 60 * cos(2 * PI * timing + angle);
      const myY = y + 60 * sin(2 * PI * timing + angle);

      rect(myX, myY, 3, 3);

    }
  }
}

window.onresize = function () {
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.size(w, h);
}