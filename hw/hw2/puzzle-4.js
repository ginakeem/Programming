function color1(){
  getColor();
  var firstColor = getColor();
  down();
  setColor(firstColor);
  right();
  right();
  }

function color2(){
  getColor();
  var secondColor = getColor();
  down();
  setColor(secondColor);
  right();
  right();
}

down();
down();
down();
down();
right();
color1();
up();
right();
color2();
