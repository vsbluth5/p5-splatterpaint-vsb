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
  if (mouseIsPressed) {
  // Color settings:
    noStroke();
    fill(66, 135, 245);
    // Draw one dot where the mouse is:
    ellipse(mouseX, mouseY, random(8, 10));
    
    for (let i=0;i<5;i++){
      // Draw another dot near the first one:
      fill(random(0,255), random(130,140),random(240,250));
      ellipse(mouseX + random(-10, 10), mouseY + random(-10, 10), random(2, 8));
    }
}
}




