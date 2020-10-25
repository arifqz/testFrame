function setup() {
 
  // Sets the screen to be 720 pixels wide and 400 pixels high
  let cnv = createCanvas(720, 400);
  background(0);
  noSmooth();


}

function draw(){
   const params = getURL();
 console.log(params);
  if(params.includes('?frame')) {
  save(cnv, 'myCanvas.jpg');
}

}

