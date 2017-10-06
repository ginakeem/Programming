var sizes = [4, 9, 10, 5, 112, 95, 40, 38];

function setup() {
  createCanvas(600, 600);
	colorMode(HSB);

  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    fill(sizes[i],100,90);
    ellipse(30+i*80, height/2, sizes[i], sizes[i]);
  }
	
}
