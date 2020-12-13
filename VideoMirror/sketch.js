
let webcam; 
let c; // canvas size for saving
let sliderSize; // slider controls circle size 
let sliderSpace; // slider controls space between circles
let sliderBackground; // slider controls background color
let sliderA; // slider controls A value of RGBA

function preload(){
  webcam = createCapture(VIDEO);
  webcam.hide();
} // loads video and hides feed so you only see the circle displays


function setup() {
    if (windowWidth > 1020){
      let c = createCanvas(windowWidth, windowHeight - 80); // window sized canvas
      c.position(0, 80); 
     } else {
       let c = createCanvas(windowWidth, windowHeight - 180);
       c.position(0, 180);
     }
  pixelDensity(1);
  // turns off default of matching display density

  labelSize = createDiv('Size'); 
  sliderSize = createSlider(1, 50, 8);
  sliderSize.parent(labelSize);
  // size of the circle from 1 to 50 px, starting value 20
  // label & div styling in css

  labelSpace = createDiv('Space');
  sliderSpace = createSlider(8, 40, 8);
  sliderSpace.parent(labelSpace);
  // space between circles from 8 to 40 px, starting value 10
  
  labelBg = createDiv('Background');
  sliderBackground = createSlider( 0, 255, 0);
  sliderBackground.parent(labelBg);
  // background color from black to white
  
  labelA = createDiv('Opacity')
  sliderA = createSlider(30, 255, 255);
  sliderA.parent(labelA);
  // opacity slider 
  
  backButton = createA('https://sajump-ixd.github.io/helloworldgallery/index.html', ' « Gallery'); //back to gallery
  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} // automatically resizes the sketch everytime the window is resized

function draw() {
  background(sliderBackground.value()); 
  // uses the slider value to shade background from black to white
  noStroke(); // no stroke around circles
  webcam.loadPixels(); // loads the pixels from webcam!

  // for loop draws each cirle, grabs color from pixel array
  // and adjusts space between circles with slider
  for (let y=0; y<webcam.height; y+= sliderSpace.value()) {
    for (let x=0; x<webcam.width; x+= sliderSpace.value()) {
      let index = (x + y * webcam.width) * 4;
      let r = webcam.pixels[index + 0];
      let g = webcam.pixels[index + 1];
      let b = webcam.pixels[index + 2];
      let a = sliderA.value(); // slider controls opacity
      fill(r, g, b, a);
      ellipse(
        map(x, 0, webcam.width, 0, width), 
        map(y, 0, webcam.height, 0, height),
          );
         let size = (sliderSize.value()); // slider controls size
          ellipse(
         map(x, 0, webcam.width, 0, width), 
         map(y, 0, webcam.height, 0, height), size);
    }
  } 
}

    
function takePic() {
  saveCanvas(c, fileName.value(), 'jpg');
} // captures canvas and saves as JPG with your filename 
