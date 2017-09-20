function ginaPatch(x, y) {
  noFill();
  stroke(238);
  rect(x, y, 100, 100);
  

// background circle  
  stroke(0);
  fill(200);
  ellipse(x+50,y+50,90,90);
  
// top left lines  
	strokeWeight(1);
  stroke(0);
  var lines = 3;
  while (lines < 100) {
    line(x+lines, y, x, y+lines);
    lines = lines + 5;
  }
  
// bottom right lines  
	var lines2 = 0;
  stroke(0, 64, 127);
  while (lines2 < 100) {
    line(x+100, y+lines2, x+lines2, y+100);
    lines2 = lines2 + 4;
  }

// outer circle
  fill(0);
  ellipse(x+50,y+50,70,70);
  
// inner circle  
  fill(255);
  ellipse(x+50,y+50,50,50);
  

}

background(255);

ginaPatch((width-100)/2, (height-100)/2);

ginaPatch(0,0);
