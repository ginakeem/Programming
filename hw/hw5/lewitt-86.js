//86

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);
	var x = 0;
	while(x<20){
		line(random(height),random(width),random(height),random(width));
		x+=1;
	}
}
