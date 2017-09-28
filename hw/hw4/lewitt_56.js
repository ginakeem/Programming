
//wall drawing 56

background(255);


//horizontal
var y = 10;
while(y<height){
	line(0,y,width,y);
  y=y+10;
}

fill(255);
noStroke();
rect(0,0,170,170);


//vertical
var x1=10;
var x2=10;

while(x1<340){
  stroke(0);
  line(x1,0,x2,height);
  x1=x1+10;
  x2=x2+10;
}

//right diagonal

var y2=180;
var x3=160;
while(y2<700){
  stroke(0);
	line(170,y2,x3,170);
	y2=y2+10;
	x3=x3-10;
}


//left diagonal

var y3=180;
var x4=180;
while(y3<510){
  stroke(0);
	line(170,y3,x4,170);
  y3=y3+10;
  x4=x4+10;
}
