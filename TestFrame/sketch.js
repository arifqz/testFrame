function setup() {
 
  // Sets the screen to be 720 pixels wide and 400 pixels high
  let cnv = createCanvas(720, 400);
  background(0);
  noSmooth();

  let params = getURLParams();
 console.log(params);
 text(params);
}

function draw(){

}
}
