function setup() {
 
  // Sets the screen to be 720 pixels wide and 400 pixels high
  let cnv = createCanvas(720, 400);
  background(0);
  noSmooth();

  let params = getURLParams();
}

function draw(){

if (params.frame){
save(cnv, 'myCanvas.jpg');
}
}
