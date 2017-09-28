var loopCounter=20;
background(0);

while(loopCounter<=340){
	var x1=20;
  var y1=loopCounter;
	while(x1<=320){
    stroke(0);
    fill(255);
		ellipse(x1,y1,10,10);
		x1=x1+20;
	}
  loopCounter=loopCounter+20
}
