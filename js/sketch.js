
let canvassSize = [400,400];
function setup() {
  createCanvas(canvassSize[0], canvassSize[1]);
  //frameRate(5);
}

let x = [canvassSize[0]/2];
let y = [canvassSize[0]/2];
let y_inc = 0.005;
let x_inc = 0.005;
let x_start =0;
let y_start =0;
let y_value = 0;
let x_value = 0;
let s = [5, 5];
let loop_inc = 0.08;




function draw() {
  noiseDetail(3,.7);
  //background(255/2);
  //noLoop();
  loadPixels();
  x_value=x_start;
  y_value=y_start;


  for (y=0; y<canvassSize[0]; y++){
    y_value +=y_inc;
    x_value = x_start;

    for (x=0;x<canvassSize[1]; x++){
        x_value +=x_inc;
        pixels[(x+y*canvassSize[1])*4+0]=noise(y_value,x_value)*255;
        pixels[(x+y*canvassSize[1])*4+1]=noise(y_value,x_value)*255;
        pixels[(x+y*canvassSize[1])*4+2]=noise(y_value,x_value)*255;
        pixels[(x+y*canvassSize[1])*4+3]=255;
      //console.log(noise(y_value,x_value)*255);

    }


  }
  updatePixels();
  y_start +=loop_inc*5;
  x_start +=loop_inc*3;
  //
}
