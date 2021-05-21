function setup() {
  createCanvas(500, 600);
  background(220);
}

function draw() {
  // Background
  background(220);
  // Additional draw() code
  fill(0);
  text("Hello!", 20, 20);
  
  // ellipse(250, 300, 10);
  ellipse(mouseX, mouseY, 20);
}

function mousePressed() {
  console.log("You clicked the mouse!");
}
