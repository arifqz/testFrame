function setup() {
 
  // Sets the screen to be 720 pixels wide and 400 pixels high
  let cnv = createCanvas(720, 400);
  background(0);
  noSmooth();


}

function draw(){

pauseSketch();
}

function pausesketch() {
  if (location.hash === '?frame') {
    noLoop();
   console.log('pause sketch has run');
  }
