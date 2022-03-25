"use strict";

let cp; //globally accessible color palette instance 

function setup() {
 createCanvas(720, 720);
 noCursor();

 colorMode(HSB, 360, 100, 100); 
 rectMode(CENTER);
 noStroke();
 cp = new ColorPalette(); //make palette
 //cp.findAnalogues(); 
 //cp.findComplement(); 
 cp.findMonochromes();
 console.log(cp.coll); //look in the console to see the extra stuff here
}

function draw() { //whole new draw
 background(cp.baseColor);
 fill(cp.coll);
 rect(width / 2, height / 2, 500,500);
 fill(cp.col2);
 rect(360, 360, 100,100);
}


function keyPressed() {
 if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");
}
