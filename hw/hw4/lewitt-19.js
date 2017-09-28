//wall drawing 19


//vertical
var x1=10;
var x2=10;

while(x1<=110){
  line(x1,0,x2,height);
  x1=x1+10;
  x2=x2+10;
}

//horizontal
var y = 10;

while(y<height){
	line(110,y,width,y);
  y=y+10;
}

//right diagonal
var x3=100;
var y1=10;
while(y1<460){
	line(x3,0,110,y1);
	x3=x3-10;
	y1=y1+10;
	}

//line(100,0,110,10);
//line(90,0,110,20);

//left diagonal
var y2=10;
var x4=120;
while(y2<580){
	line(110,y2,x4,0);
	y2=y2+10;
	x4=x4+10;
}

//line(110,10,120,0);
//line(110,20,130,0);
