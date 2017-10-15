function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
	colorMode(HSB);
	background(255);
	var x=0;
	var y=0;
	var w=400;
	var h=400;
	var color=0;
	
	while(x<400){
		strokeWeight(10);
		stroke(color,100,100);
		noFill();
		rect(x,y,w,h);
		x+=20;
		y+=20;
		w-=40;
		h-=40;
		color+=15;
	}
}
