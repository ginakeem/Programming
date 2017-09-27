background(255)
var location = 0;
var direction = 0;


while(direction == 0){
	background(255);
  	fill(255);
	ellipse(100+location,100,20,20);
	location = location + 10;
  	if(location>=240){
  		direction = 1-direction;
 	 }
}


location = 0;
while(direction == 1){
  	background(255);
	fill(255);
 	ellipse(350-location,100,20,20);
 	location = location + 10;
 	if(location>340){
  		direction = 1-direction;
  	}
}

location = 0;
while(direction == 0){
	background(255);
  	fill(255);
	ellipse(location,100,20,20);
	location = location + 10;
  	if(location>=240){
  		direction = 1-direction;
 	}
}
