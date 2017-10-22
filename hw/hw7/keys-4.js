var x=1;
var keys = {
  17: 0, // G    - control
  Q: 1, // Ab
  A: 2, // A
  W: 3, // Bb
  S: 4, // B
  D: 5, // C
  R: 6, // Db
  F: 7, // D
  T: 8, // Eb
  G: 9, // E
  H: 10, // F
  U: 11, // Gb
  J: 12, // G
  I: 13, // Ab
  K: 14, // A
  O: 15, // Bb
  L: 16, // B
  186: 17, // C  - ;
  219: 18, // Db - [
  222: 19, // D  - '
  221: 20, // Eb - ]
  13: 21 // E    - return
};

var frequencies = [196, 207.7, 220, 233.1, 246.9, 261.6, 277.2, 293.7, 311.1, 329.6, 349.2, 370, 392, 415.3, 440, 466.2, 493.9, 523.3, 554.4, 587.3, 622.3, 659.3];
var oscillators = [];
var playing = [];
var drops = [];

function setup() {
	colorMode(HSB);
  createCanvas(400, 400);
  backgroundColor = color(0, 0, 0);
  textAlign(CENTER);
  
  for (var i = 0; i < frequencies.length; i++) {
    var osc = new p5.Oscillator();
    osc.setType('triangle');
    osc.freq(frequencies[i]);
    osc.amp(0);
    osc.start();
    oscillators[i] = osc;
    playing[i] = false;
  }
}

function draw() {
  background(backgroundColor);
 	noStroke();
  for (var i = 0; i < playing.length; i++) {
    if (playing[i]) {
      fill(frequencies[i]/3,100,100);
    } else {
      fill(0);
    }
    ellipse((i+0.3) * width/playing.length, height/4, width/playing.length*0.6, height/10);
  }
  drops.forEach(processDrop);
  drops = drops.filter(isVisible);
}

function processDrop(drop) {
  drop.y += 5;
  drop.opacity -= 6;
	x+=5;
  fill(drop.shade+x, drop.opacity,100);
  ellipse(drop.x, drop.y, width/playing.length*0.6, height/(10+x));
}

function isVisible(drop) {
  return drop.opacity > 0;
}

function currentIndex() {
  return key in keys ? keys[key] : keys[keyCode];
}
function keyPressed() {
  print("got key press for ", key, keyCode);
  var index = currentIndex();
  var osc = oscillators[index];
  if (osc) {
    osc.amp(0.5, 0.1);
    playing[index] = true;
		x=1;
		backgroundColor = color(key[index],100,20);
  }
}

function keyReleased() {
  print("got key release for ", key, keyCode);
  var index = currentIndex();
  var osc = oscillators[index];
  if (osc) {
    osc.amp(0, 0.5);
    playing[index] = false;
    backgroundColor = color(0,0,0);
    drops.push({
      shade: frequencies[index]/3,
      x: (index+0.3) * width/playing.length,
      y: height/4,
      opacity: 255
    });
  }
}
