var shade=[10,20,45,25,60];


function setup() {
  createCanvas(400, 400);

}

function draw() {
  colorMode(HSB);
  noStroke();
	var x = 0;
	
	for(var i = 0; i < 5; i++){
		fill(shade[i],100,100);
		rect(i*width/5, 0, width/5, height);
	}
}