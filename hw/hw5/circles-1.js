var sizes = [40, 70, 90, 30, 60,10,50,20];

function setup() {
  createCanvas(600, 600);

  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    fill(sizes[i]);
    ellipse(50+i*75, height/2, sizes[i], sizes[i]);
  }
}
