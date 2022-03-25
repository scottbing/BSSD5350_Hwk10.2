//Lesson 1.1
//Code taken from Daniel Shiffman's video below and modified with comments
// https://www.voutube.com/watch?v=o8dffr286os&list=PL6Uak5uKONDGXWAL99560YA D78 fM&index=9

//setup is run one time when the program first starts
function setup() {
  //size(1024, 768, PDF, "color.pdf");  //size of canvas
  createCanvas(500, 500); //set the size of the screen.
  //strokeWeight(0);
  noStroke();
  frameRate(24);
  smooth(); //smoots animation from transition
  //Screen size must be set before the program is run!
  noLoop();  //only calls draw() once
}

//draw is called repeatedly and automatically for the life of the program after setup is called function draw() {
function draw() {
  cp = new ColorPalette(); //make palette
  swatchColor(cp); //call to custom helper function below 
  //]/hf.save("img", "["+String.valueOf(randomC.getBaseColor())+"]");
  //exit();
}

function swatchColor(cp) {  
  //fill(cp.getBaseColor());
  rect(0, 0, width, height/3);
  cp.findAnalogues();
  fill(cp.analogues1);
  rect(0, height*1/3, width/4, height/3); 
  cp.findAnalogues();
  fill(cp.analogues2);
  rect(0, height*2/3, width/4, height/3);
  cp.findComplements();
  fill(cp.complements1);
  rect(width/4, height/3, width/2, height*2/3);
  cp.findMonochromes();
  fill(cp.monochromes1)
  rect(width*3/4, height*1/3, width/4, height/3);
  cp.findMonochromes();
  fill(cp.monochromes2)
  rect(width*3/4, height*2/3, width/4, height/3);
}

function keyPressed() {
   if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");
  }
