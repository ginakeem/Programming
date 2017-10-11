
var sizes = [4, 9, 10, 5, 112, 95, 40, 38];

function setup() {
  createCanvas(1000, 600);
	colorMode(HSB);
  noStroke();
}

function draw(){
	background(255);
	for (var i = 0; i < sizes.length; i += 1) {
		var h = height/2+random(-2,2);
    fill(sizes[i],100,90);
    ellipse(30+i*80, h, sizes[i], sizes[i]);
	}
}
