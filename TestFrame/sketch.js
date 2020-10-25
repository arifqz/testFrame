function setup() {
 
  // Sets the screen to be 720 pixels wide and 400 pixels high
  let cnv = createCanvas(720, 400);
  background(0);
  noSmooth();

  const params = getURL();
 console.log(params);
  if(params.contains("?frame")> 0) {
  save(cnv, 'myCanvas.jpg');
}
}

function draw(){

}

