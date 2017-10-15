function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
	colorMode(HSB);
  background(240, 100, 100);
	stroke(0);
	fill(250,100,100);
	rect(120,100,150,200);
	stroke(320, 82, 100);
	line(100,100,100,300);
	line(300,100,300,300);
	stroke(255);
	strokeWeight(5);
	line(100,100,300,100);
	line(100,300,300,300);
	
}
