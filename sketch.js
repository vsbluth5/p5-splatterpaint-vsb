function setup() {
  createCanvas(500, 600);
  background(220);
}

function draw() {
  // Background
  // background(220);
  // Additional draw() code
  fill(0);
  text("Hello!", 20, 20);
  
  // ellipse(250, 300, 10);
  // ellipse(mouseX, mouseY, 20);
}

function mousePressed() {
  // Color settings:
  noStroke();
  fill(66, 135, 245);
  // Draw one dot where the mouse is:
  ellipse(mouseX, mouseY, random(8, 17));
  // Draw another dot near the first one:
  ellipse(mouseX + random(-30, 30), mouseY + random(-30, 30), random(8, 17));
  // Smaller dot:
  ellipse(mouseX + random(-30, 30), mouseY + random(-30, 30), random(4, 8));
  // Nearer dot:
  ellipse(mouseX + random(-20, 20), mouseY + random(-20, 20), random(8, 17));
  // Farther dot:
  ellipse(mouseX + random(-50, 50), mouseY + random(-50, 50), random(8, 17));
  // TOTALLY random dot:
  ellipse(random(0, 500), random(0, 600), random(8, 17))
}


