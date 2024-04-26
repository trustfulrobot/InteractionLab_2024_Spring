let data = [];
let maxData;


function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  rectMode(BOTTOM);
  for (let i = 0; i < 40; i = i + 1) {
    let randomNumber = random(20, 80);
    data.push(randomNumber);
  }
  maxData = max(data);
}

function draw() {
  background(256);
  fill('#63DCA5');
  stroke('#328F65');
  strokeWeight(2);

  let angleSeparation = 360 / data.length;
  let padding = 10;

  if (frameCount <= 100) {
    maxValue = constrain(frameCount * 2, 0, 100);
  } else {
    maxValue = 100;
  }
  let offset = 100;
  let dataMultiplier = (height/2 - offset - padding) / maxData;


  for (let i = 0; i < data.length; i = i + 1) {
    push();
    let currentData = data[i];
    let finalHeight = currentData * dataMultiplier;
    let animatedHeight = map(maxValue, 0, 100, 0, finalHeight);
    translate(width / 2, height / 2);
    rotate(angleSeparation * i);
    rect(0, offset, angleSeparation*2, animatedHeight);
    text(Math.floor(currentData), offset-20, 0);
    pop();
  }


}