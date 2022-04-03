var penwidth = 1; //default
var pen = 1; //defalut:line
var r = 0,
  g = 0,
  b = 0; //color default:black

var lolol = true;
//button
class Button {
  constructor() {
    this.shape = 1;
    this.x = 725;
    this.y = 900;
    this.colour = color(255);
    this.hovercolour = color(25);
    this.X = 500;
    this.Y = 100;
    this.size = 50;
    this.hover = 0;
    this.triggered = 0;
  }

  display() {
    noStroke();
    if (this.hover) {
      fill(this.hovercolour);
    } else {
      fill(this.colour);
    }
    if (this.shape == 1) {
      rect(this.x, this.y, this.X, this.Y);
    } //button
  }
  checkTrigger() {
    this.hover = 0;
    this.triggered = 0;

    if (this.shape == 1) {
      // rectangle

      if (mouseX > this.x && mouseX < this.x + this.X) {
        if (mouseY > this.y && mouseY < this.y + this.Y) {
          this.hover = 1;
          if (mouseIsPressed) {
            this.triggered = 1;
          }
        }
      }
    }
  }
}//button function

var button;
var col;
var canvas;
let img;
function preload() {//set image
  img = loadImage("2333.png");
  img2 = loadImage("2334.png");
}
function setup() {
  createCanvas(1920, 1080);
  canvas = createGraphics(1920, 1080);//make the drwings on a extra canvas to keep the drawing
  imageMode(CORNER);//set image
  stroke(220);
  fill(220);
  button = new Button();//set button
  col = color(220);
}

function draw() {//make 2 stages seperately for main menu and drawing tool and use if function to switch it
  if (lolol == true) {
    if (button.triggered) {
      lolol = !lolol;
    }
    draw1();
  } else {
    draw2();
  }
}

function draw1() {
  background(col);
  textSize(40);
  noStroke();
  fill(0, 102, 153);
  text("CLICK THE BOTTON DOWN TO START", 10, 60);//text on the main menu

  fill(100, 140, 163);
  text("CLICK ICON TO SWITCH COLOUR & PEN", 10, 110);
  fill(110, 150, 173);
  text("PRESS C TO CLEAR YOUR SCREEN", 10, 160);
  fill(120, 160, 183);
  text("PRESS B TO GO BACK TO MAIN MENU", 10, 210);
  fill(130, 170, 193);
  text("PRESS SPACE FOR FULL SCREEN", 10, 260);
  text("PRESS S TO SAVE YOUR DRAWING", 10, 310);
  textSize(55);
  text("↓ START YOUR DRAWING ↓", 635, 850);
  textSize(20);
  fill(90, 100, 123);
  text("Assignment 1: Interactive Drawing Tool", 1500, 60);
  text("Junhao Du s3825855", 1570, 100);
  button.checkTrigger();
  button.display();

  strokeWeight(2);//the clock on the main menu, and use the translate function to keep the clock on the middle of the screen
  translate(width / 2, height / 2);

  var radius = 300;
  var numPoints = 60;
  var angle = TWO_PI / numPoints;
  var secondsRadius = radius * 0.72;
  var minutesRadius = radius * 0.6;
  var hoursRadius = radius * 0.5;

  strokeWeight(10);
  point(width / 2, height / 2);

  strokeWeight(2);
  noFill();
  circle(0, 0, 600);

  strokeWeight(2);
  stroke(20);
  beginShape(POINTS);//begin shape & end hsape to create the num points
  var i = 0;
  while (i < 60) {
    x = cos(angle * i) * secondsRadius;
    y = sin(angle * i) * secondsRadius;
    vertex(x, y);
    i++;
  }
  endShape();
  var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  strokeWeight(1);
  line(0, 0, cos(s) * secondsRadius, sin(s) * secondsRadius);
  strokeWeight(2);
  line(0, 0, cos(m) * minutesRadius, sin(m) * minutesRadius);
  strokeWeight(4); 
  line(0, 0, cos(h) * hoursRadius, sin(h) * hoursRadius);
}

function draw2() {//drawing tool stage
  background(col);
  fill(0);
  stroke(0);
  strokeWeight(1);
  textSize(20);
  //area to select shapes
  noFill();
  rect(0, 20, 40, 40);
  rect(0, 60, 40, 40);
  rect(0, 100, 40, 40);
  rect(0, 140, 40, 40);

  fill(255, 0, 0); //red
  rect(0, 200, 40, 20);
  fill(255, 128, 0); //orange
  rect(0, 220, 40, 20);
  fill(255, 255, 0); //yellow
  rect(0, 240, 40, 20);
  fill(0, 255, 0); //green
  rect(0, 260, 40, 20);
  fill(0, 255, 255); //blue
  rect(0, 280, 40, 20);
  fill(0, 64, 128); //indigo
  rect(0, 300, 40, 20);
  fill(128, 0, 128); //purple
  rect(0, 320, 40, 20);
  fill(0); //purple
  rect(0, 340, 40, 20);

  noFill();
  rect(0, 400, 40, 40);
  rect(0, 440, 40, 40);
  rect(0, 480, 40, 40);
  rect(0, 580, 40, 40);
  rect(0, 630, 40, 40);
  rect(0, 680, 40, 40);

  stroke(r, g, b);
  fill(r, g, b);
  //shapes
  line(4, 24, 36, 56);
  ellipse(20, 80, 36, 22);
  rect(3, 104, 34, 32);
  fill(228, 160, 140);
  stroke(0);
  ellipse(20, 160, 30, 30);

  strokeWeight(1);
  //eara to select penwidth
  fill(0);
  stroke(0);
  ellipse(20, 420, 15, 15);
  ellipse(20, 460, 17.5, 17.5);
  ellipse(20, 500, 20, 20);
  image(img, 0, 630, 50, 50);
  image(img2, -10, 680, 50, 50);
  fill(200, 200, 255);
  circle(20, 600, 30);
  fill(100, 200, 155);
  circle(20, 600, 20);
  fill(255);
  circle(20, 600, 10);

  if (mouseIsPressed) {
    var px = pmouseX,
      py = pmouseY,
      x = mouseX,
      y = mouseY;
    if (x < 40) {
      if (y > 400 && y < 440) penwidth = 1;
      else if (y > 440 && y < 480) penwidth = 3;
      else if (y > 480 && y < 520) penwidth = 5;
      else if (y > 20 && y < 60) pen = 1;
      else if (y > 60 && y < 100) pen = 2;
      else if (y > 100 && y < 140) pen = 3;
      else if (y > 140 && y < 180) pen = 4;
      else if (y > 580 && y < 620) pen = 5;
      else if (y > 630 && y < 670) pen = 6;
      else if (y > 680 && y < 720) pen = 7;
      //select color
      else if (y > 200 && y < 220) {
        r = 255;
        g = 0;
        b = 0; //red
      } else if (y > 220 && y < 240) {
        r = 255;
        g = 128;
        b = 0; //orange
      } else if (y > 240 && y < 260) {
        r = 255;
        g = 255;
        b = 0; //yellow
      } else if (y > 260 && y < 280) {
        r = 0;
        g = 255;
        b = 0; //green
      } else if (y > 280 && y < 300) {
        r = 0;
        g = 255;
        b = 255; //blue
      } else if (y > 300 && y < 320) {
        r = 0;
        g = 64;
        b = 128;
      } //indigo
      else if (y > 320 && y < 340) {
        r = 128;
        g = 0;
        b = 128;
      } //purple
      else if (y > 340 && y < 360) {
        r = 0;
        g = 0;
        b = 0;
      } //BLACK
    } else {
      //paint
      if (pen == 1) {//use different areas to seperate pens
        canvas.strokeWeight(penwidth);
        canvas.stroke(r, g, b);
        canvas.line(px, py, x, y);
      } else if (pen == 2) {
        canvas.strokeWeight(penwidth);
        canvas.stroke(r, g, b);
        canvas.fill(r, g, b);
        canvas.ellipse(x, y, 3 * penwidth, 3 * penwidth);
      } else if (pen == 3) {
        canvas.strokeWeight(penwidth);
        canvas.stroke(r, g, b);
        canvas.fill(r, g, b);
        canvas.rect(x, y, 3 * penwidth, 3 * penwidth);
      } else if (pen == 4) {
        canvas.strokeWeight(penwidth * 5);
        canvas.stroke(220);
        canvas.line(px, py, x, y);
      } else if (pen == 5) {
        canvas.strokeWeight(0);
        canvas.fill(r + 100, g - 100, b - 50);
        canvas.noStroke;
        canvas.circle(x, y, 25 * penwidth);
        canvas.fill(r - 50, g + 100, b + 100);
        canvas.circle(x, y, 20 * penwidth);
        canvas.fill(255);
        canvas.circle(x, y, 15 * penwidth);
      } else if (pen == 6) {//use png image to create customized pens
        canvas.push();
        canvas.translate(mouseX, mouseY);
        canvas.rotate(random(0, 360));
        canvas.image(img, 0, 0, 30 * penwidth, 30 * penwidth);
        canvas.pop();
      } else if (pen == 7) {
        canvas.image(
          img2,
          mouseX - 300,
          mouseY - 300,
          300 * penwidth,
          450 * penwidth
        );
      }
    }
  }
//Key interact
  if (keyIsPressed)
    if (keyCode == 67) {
      canvas.noStroke;
      canvas.stroke(220);
      canvas.fill(220);
      canvas.rect(45, 0, 1920, 1080);
    } else if (keyCode == 66) {
      lolol = true;
    } else if (keyCode == 83) {
      saveCanvas(canvas, "myCanvas", "jpg");
    }
  image(canvas, 0, 0);
}

function keyPressed() {
  if (key == " ") {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
