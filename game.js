// position variables
let characterX = 400;
let characterY = -200;
let x = 350;
let y = 200;

// game logic variable
let velocityY = 0.5;
let acceleration = 0.3;

// game state variables
let gameState = true;

function setup() {
  createCanvas(700, 600);
}

//  character

function character(x, y, axeUsed) {
  translate(x - 330, 0);
  scale(0.7);

  // Boots

  function leftBoot(x, y) {
    push();
    fill(0, 0, 0);
    arc(x, y, 30, 40, PI, 2 * PI);
    rect(x, y - 20, 40, 20);
    arc(x + 40, y, 10, 40, PI, 2 * PI);
    rect(x + 10, y - 30, 30, 15);
    fill(150, 150, 150);
    rect(x - 18, y, 65, 5);
    rect(x + 12, y - 40, 26, 10);

    function spike(x, y) {
      fill(0, 0, 0);
      triangle(x - 18, y + 5, x - 10, y + 5, x - 14, y + 13);
    }

    spike(x, y);
    spike(x + 10, y);
    spike(x + 20, y);
    spike(x + 30, y);
    spike(x + 40, y);
    spike(x + 50, y);

    pop();
  }

  leftBoot(x - 97, y + 155);

  function rightBoot(x, y) {
    push();
    fill(0, 0, 0);
    arc(x, y, 30, 40, PI, 2 * PI);
    rect(x - 40, y - 20, 40, 20);
    arc(x - 40, y, 10, 40, PI, 2 * PI);
    rect(x - 40, y - 30, 30, 15);
    fill(150, 150, 150);
    rect(x - 48, y, 65, 5);
    rect(x - 38, y - 40, 26, 10);

    function spike(x, y) {
      fill(0, 0, 0);
      triangle(x - 18, y + 5, x - 10, y + 5, x - 14, y + 13);
    }

    spike(x + 5, y);
    spike(x - 5, y);
    spike(x - 15, y);
    spike(x - 25, y);
    spike(x + 15, y);
    spike(x + 25, y);

    pop();
  }

  rightBoot(x + 97, y + 155);

  // Jeans
  function jeans(x, y) {
    push();
    noStroke();
    fill(0, 0, 0);
    rect(x, y, 80, 40);
    pop();

    // Left leg

    push();
    noStroke();
    fill(0, 0, 0);
    rect(x - 50, y, 80, 40, 10);
    pop();

    push();
    noStroke();
    fill(0, 0, 0);
    rect(x - 50, y + 20, 35, 80, 10);
    pop();

    // Right leg

    push();
    noStroke();
    fill(0, 0, 0);
    rect(x + 50, y, 80, 40, 10);
    pop();

    push();
    noStroke();
    fill(0, 0, 0);
    rect(x + 95, y + 20, 35, 80, 10);
    pop();
  }

  jeans(x - 40, y + 20);

  // Hoodie

  function hoodieWithArmsDown(x, y) {
    push();
    stroke(0, 0, 0);
    fill(225, 10, 10);
    rect(x + 70, y, 80, 18, 6);
    rect(x, y, 80, 80, 10);
    arc(x + 40, y + 74, 80, 30, 0, PI);
    rect(x - 70, y, 80, 18, 6);

    noFill();
    rect(x + 50, y + 20, 20, 20, 3);

    fill(255, 255, 255);
    arc(x + 40, y - 1, 20, 10, 0, PI);

    pop();
  }

  // Gloves

  function leftGloveDown(x, y) {
    push();
    stroke(0, 0, 0);
    fill(0, 140, 185);
    ellipse(x, y, 25, 20);
    // ice axe
    fill(155, 80, 100);
    rect(x - 8, y - 50, 5, 70);
    fill(180, 180, 180);
    triangle(x - 55, y - 40, x + 10, y - 50, x + 10, y - 30);

    fill(0, 140, 185);
    ellipse(x - 6, y, 20, 25);
    pop();
  }

  function rightGloveDown(x, y) {
    push();
    stroke(0, 0, 0);
    fill(0, 140, 185);
    ellipse(x, y, 25, 20);
    //ice axe
    fill(155, 80, 100);
    rect(x + 3, y - 50, 5, 70);
    fill(180, 180, 180);
    triangle(x + 55, y - 40, x - 10, y - 50, x - 10, y - 30);

    fill(0, 140, 185);
    ellipse(x + 6, y, 20, 25);
    pop();
  }

  function hoodieWithArmsUp(x, y) {
    push();
    stroke(0, 0, 0);
    fill(225, 10, 10);
    //right arm
    push();
    translate(x + 65, y + 5);
    rotate(-0.8);
    rect(0, 0, 80, 18, 6);
    pop();
    //chest
    rect(x, y, 80, 80, 10);
    arc(x + 40, y + 74, 80, 30, 0, PI);

    push();
    translate(x - 40, y - 50);
    rotate(0.8);
    rect(0, 0, 80, 18, 6);
    pop();

    noFill();
    rect(x + 50, y + 20, 20, 20, 3);

    fill(255, 255, 255);
    arc(x + 40, y - 1, 20, 10, 0, PI);

    pop();
  }

  // Gloves

  function leftGloveUp(x, y) {
    push();
    stroke(0, 0, 0);
    translate(x + 20, y - 55);
    rotate(0.8);

    fill(0, 140, 185);
    ellipse(0, 0, 25, 20);

    // ice axe
    fill(155, 80, 100);
    rect(-2, -50, 5, 70);
    fill(180, 180, 180);

    triangle(-55, -40, 10, -50, 10, -30);

    fill(0, 140, 185);
    ellipse(-6, 0, 20, 25);
    pop();
  }

  function rightGloveUp(x, y) {
    push();
    stroke(0, 0, 0);
    translate(x - 20, y - 55);
    rotate(-0.8);
    fill(0, 140, 185);
    ellipse(0, 0, 25, 20);
    //ice axe
    fill(155, 80, 100);
    rect(3, -50, 5, 70);
    fill(180, 180, 180);
    triangle(55, -40, -10, -50, -10, -30);

    fill(0, 140, 185);
    ellipse(6, 0, 20, 25);
    pop();
  }

  if (axeUsed) {
    rightGloveDown(x + 110, y - 51);
    leftGloveDown(x - 110, y - 51);
    hoodieWithArmsDown(x - 40, y - 60);
  } else {
    rightGloveUp(x + 110, y - 51);
    leftGloveUp(x - 110, y - 51);
    hoodieWithArmsUp(x - 40, y - 60);
  }
  // Neck

  function neck(x, y) {
    push();
    stroke(255, 180, 180);
    fill(255, 225, 190);
    rect(x, y, 20, 45, 8);
    pop();
  }

  neck(x - 10, y - 100);

  // Face

  function face(x, y) {
    push();
    stroke(255, 180, 180);
    fill(255, 225, 190);
    arc(x, y, 45, 70, 0, PI);
    pop();
  }

  face(x, y - 100);

  // Nose

  function nose(x, y) {
    push();
    stroke(225, 100, 100);
    fill(255, 225, 190);
    triangle(x - 10, y - 10, x, y, x + 10, y - 10);
    pop();
  }

  nose(x, y - 77);

  // Mouth

  function mouth(x, y) {
    push();
    stroke(225, 100, 100);
    fill(255, 255, 255);
    arc(x, y, 15, 8, 0, PI, CHORD);
    pop();
  }

  mouth(x, y - 75);

  // eyeglasses

  function eyeglass(x, y) {
    push();
    stroke(0, 0, 0);
    strokeWeight(1.0);
    fill(240, 240, 240);
    rect(x + 15, y, 18, 11);

    fill(240, 240, 240);
    rect(x, y, 22, 15, 5);
    rect(x + 28, y, 22, 15, 5);
    rect(x, y, 50, 2);

    fill(0, 150, 150);
    rect(x + 2, y + 2, 18, 11, 3);
    rect(x + 30, y + 2, 18, 11, 3);
    pop();
  }

  eyeglass(x - 25, y - 95);

  // Helmet
  function helmet(x, y) {
    fill(0, 140, 185);
    ellipse(x, y, 50, 10);
    arc(x, y, 50, 55, PI, 2 * PI);

    fill(50, 170, 215);
    ellipse(x, y - 16, 30, 20);

    fill(150, 210, 230);
    ellipse(x, y - 18, 25, 16);

    fill(255, 255, 255);
    ellipse(x, y - 20, 20, 12);

    fill(0, 0, 0);
    rect(x - 10, y - 8, 3, 10, 2);
    rect(x + 8, y - 8, 3, 10, 2);

    fill(255, 255, 255);
    arc(x, y + 2, 20, 3, 0, PI);
    fill(0, 0, 0);
    arc(x, y, 20, 3, 0, PI);

    push();
    fill(255, 255, 255);
    ellipse(x - 16, y, 8, 4);
    fill(0, 0, 0);
    ellipse(x - 16, y - 1, 8, 3.5);
    pop();

    push();
    fill(255, 255, 255);
    ellipse(x + 16, y, 8, 4);
    fill(0, 0, 0);
    ellipse(x + 16, y - 1, 8, 3.5);
    pop();

    push();
    fill(255, 255, 255);
    ellipse(x - 18, y - 10, 3, 7);
    fill(0, 0, 0);
    ellipse(x - 16.5, y - 10, 4, 7);
    pop();

    push();

    fill(255, 255, 255);
    ellipse(x + 18, y - 10, 3, 7);
    fill(0, 0, 0);
    ellipse(x + 16.5, y - 10, 4, 7);
    pop();

    push();
    fill(0, 0, 0);
    ellipse(x - 5, y - 20, 5, 4);
    ellipse(x + 5, y - 20, 5, 4);
    pop();
  }

  helmet(x, y - 100);
}

// ice walls

function iceWall(x, y){
push();
fill(100, 150, 200);
rect(x - 120, y - y - 15, 80, windowHeight);
rect(x + 40, y - y - 15, 80, windowHeight);
fill(60, 110, 150);
rect(x - 40, y + 310, 80, 42);
triangle(x + 40, y + 310, x + 40, y + 352, x + 105, y + 352);
triangle(x - 105, y + 352, x - 40, y + 310, x - 40, y + 352);

push();
fill(150, 200, 255);
rotate(-0.02);
rect(x - x - 15, y - y, 250, windowHeight);
pop();

push();
fill(150, 200, 255);
rect(x - x, y + 352, windowWidth, windowHeight);
rotate(0.02);
rect(x + 115, y - y - 15, 250, windowHeight);
pop();
pop();
}

function draw() {
  background(0, 30, 65, 240);
  noStroke();

  iceWall(x, y);


  if (mouseIsPressed === true) {
    character(characterX, characterY, true);
  } else {
    character(characterX, characterY, false);
  }

  if (gameState === true) {
    characterY = characterY + velocityY;
    velocityY = velocityY + acceleration;

    if (mouseIsPressed) {
      velocityY = velocityY - 0.5;
    }

    if (characterY > 610 && velocityY > 1.5) {
      gameState = false;
      console.log("Game OVER");
    }
    // (characterY > 800 && velocityY > 5) {
    //     gameState = false;
    //     console.log("NICE");
    // }
  }
}

