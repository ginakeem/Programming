var loopCounter=30;

while(loopCounter<=270){
	var x1=loopCounter;
	var y1=170;
	var h=10;
	var w=10;

		while(x1>=loopCounter-15){
			noFill();
			stroke(0);
			rect(x1,y1,h,w);
			x1=x1-5;
			y1=y1-5;
			h=h+10;
			w=w+10;
	}
	loopCounter=loopCounter+60;
}
