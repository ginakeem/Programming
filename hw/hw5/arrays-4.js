var shade=[10,20,45,25,60,70,80,90,100];


function setup() {
  createCanvas(400, 400);

}

function draw() {
  colorMode(HSB);
  noStroke();
	var x = 0;
	
	for(var i = 0; i < shade.length; i++){
		fill(shade[i],100,100);
		rect(i*width/shade.length, 0, width/shade.length, height);
	}
}
