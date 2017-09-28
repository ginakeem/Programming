var x1=165;
var y1=5;
var x2=175;
var y2=5;

while(x2<=340){
	line(x1,y1,x2,y2);
	x1=x1-5;
	y1=y1+5;
	x2=x2+5;
	y2=y2+5;
  if(x2==340){
  	break;
  }
}

while(x2>175){
  line(x1,y1,x2,y2)
  x1=x1+5;
	y1=y1+5;
	x2=x2-5;
  y2=y2+5;
}
