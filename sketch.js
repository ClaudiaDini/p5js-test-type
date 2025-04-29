let columns = 40;
let rows = 40;

//

let font;

function preload() {
  font = loadFont("./assets/InputMonoCondensed-Light.ttf");
}

//

let cam;

function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");
  angleMode(DEGREES);

  textFont(font);
  textSize(height / rows);

  cam = createCamera();
  cam.setPosition(-50, -4, 10);
  cam.lookAt(0, -200, 0);
}

//

function draw() {
  background("black");
  orbitControl();

  let angle = 360 / columns;
  let diameter = textSize();

  fill("white");

  rotateY(-frameCount);
  for (let i = 0; i < columns; i++) {
    push();
    rotateY(angle * i);
    translate(diameter, 0, 0);
    for (let j = 0; j < rows; j++) {
      const a = cos(frameCount * 5 + j * 20);
      const m = map(a, -1, 1, 0, textSize());
      push();
      translate(m, textSize() * (j - rows / 2), 0);
      text("°°°°°", 0, 0);
      pop();
    }
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  textSize(height / rows);
}
