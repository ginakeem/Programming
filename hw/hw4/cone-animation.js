function setup() { 
  createCanvas(400, 400);
	background(255);
} 

function draw() { 
	var x1 = 170;
	var y1 = 0;
	var x2 = 0;
	
	while(x2<=340){
		line(x1,y1,x2,height);
		x2=x2+10;
		x1=mouseX;
		y1=mouseY;
	}
	
}


//correct answer

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
	
	var x=10;
	while(x<width){
		line(mouseX,mouseY,x,10);
		x=x+10;
	}
}
