function colorDown(){
var steps=0
while(steps<7){
	down();
  steps=steps+1;
}
if(steps==7){
	right();
  right();
}
}

function colorUp(){
var steps=0
while(steps<7){
	up();
  steps=steps+1
}
  if(steps==7){
	right();
  right();
}
}


down();
colorDown();
colorUp();
colorDown();
colorUp();
colorDown();
