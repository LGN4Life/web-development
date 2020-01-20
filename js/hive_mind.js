canvass_size = {
  x: 300,
  y: 300
};

c = {
  x: canvass_size.x / 2,
  y: canvass_size.y / 2
};
var x_dot = [0];
var y_dot = [0];



const hive_mind_action = document.querySelector('#hive_mind')
numDots = 2000;

function setup() {
  var canvass = createCanvas(canvass_size.x, canvass_size.y);

  canvass.parent('hive_mind');
  // frameRate(10);
  for (index = 1; index <= numDots; index++) {
    x_dot.push(random(-canvass_size.x/8,canvass_size.x/8));
    y_dot.push(random(-canvass_size.y/8,canvass_size.y/8));
  }

}







z_rest = 50;
z_activate = 300;

z = z_rest;
z_relax = .1;
r = 0;
g = 0;
b = 0;
s = 1;

function draw() {
  // background('#35495e');
  // background('rgba(100%,0%,100%,1)');
  clear();
  stroke(r, g, b); // Change the color
  strokeWeight(s);

  //noLoop();
  for (index = 1; index <= numDots; index++) {
    // x = x_dot[index] ;

    point(x_dot[index]+ c.x, y_dot[index]+ c.y);
    x_dot[index] = x_dot[index]+random(-5,5);
    y_dot[index] = y_dot[index]+random(-5,5);
    if (z > z_rest) {
      z = z - z_relax;
    };
    z_current =  sqrt(pow(x_dot[index],2)+pow(y_dot[index],2));
    if (z_current > z_rest){
      x_dot[index]=0+random(10);
      y_dot[index]=0+random(10);
    };
     // console.log(x_dot[index]);
  }



}
console.log(hive_mind_action);
hive_mind_action.addEventListener('click', e => {
  console.log("click");
  z = 300;
  b = b - 25;
  if (b < 0) {
    b = 0;

  };
  g = g - 25;
  if (g < 0) {
    g = 0;

  };

  r = r + 25;
  if (r > 255) {
    r = 255;

  };
  s = s + .5;


});
