
//wall drawing 138


var x1=10;
var x2=10;

while(x1<340){
  line(x1,0,x2,height);
  x1=x1+10;
  x2=x2+10;
}


var y = 10;
while(y<height){
	line(0,y,width,y);
  y=y+10;
}


var x = 10;
var y = 10;
while(x<=500){
	noFill();
	stroke(0);
	ellipse(height/2,width/2,x,y);
	x=x+10;
	y=y+10;
}
