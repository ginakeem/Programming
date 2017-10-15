function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
	background(255);
	
	var x1=1;
	var y1=400;
	var x2=100;
	var y2=200;
	
	var x3=100;
	var y3=200;
	var x4=200;
	var y4=400;
	
		var x5=110;
		var y5=200;
		var x6=210;
		var y6=400;
		
		var x7=210;
		var y7=400;
		var x8=310;
		var y8=200;
	
	while(x1<70){
		line(x1,y1,x2,y2);
		line(x3,y3,x4,y4);
		
		x1+=10;
		y2+=15;
		y3+=15;
		x4-=5;
		y4+=15;

		
		line(x5,y5,x6,y6);
		line(x7,y7,x8,y8);

		
		x5+=10;
		y6-=10;
		y7-=10;
		x8-=10;
		
	}
	
}
