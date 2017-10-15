function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
	colorMode(HSB);
  background(240, 100, 100);
	noStroke();
	fill(230,100,80);
	rect(0,0,200,400);
	
	strokeWeight(10);
	stroke(200,100,100);
	line(100,110,100,290);
	
	line(300,110,300,290);
	
	strokeWeight(2);
	stroke(250, 100, 100);
	line(100,100,100,300);
	
	line(300,100,300,300);
	
	stroke(150,100,100);
	strokeWeight(5);
	line(100,100,300,100);
	line(100,300,300,300);
	
}
