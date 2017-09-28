
//cycling hue
function setup() {
  background(255);
  noStroke();
  colorMode(HSB);
}

function draw() {
	var h = 0;
	while(h<500){
  	fill(h, 100, 100);
  	ellipse(width/2, height/2, 100, 100);
  	h = h + 10;
	} 
}


//random circles
function setup() {
  background(255);
  strokeWeight(3);
  colorMode(HSB);
}

function draw() {
  var h = random(360)
  stroke(h, 50, 90);
  fill(h, 50, 100);

  var r = random(30, 60);
  ellipse(random(width), random(height), r, r);
}
