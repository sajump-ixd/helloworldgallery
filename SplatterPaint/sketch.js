let sliderSize; // slider controls circle size 
let sliderColor; // hue changer
let sliderSat; // saturation
let sliderBri; // brightness
let sliderA; // alpha channel


function setup() { // sets up the enviroment. can only be used once
  if (windowWidth > 1020){
    let c = createCanvas(windowWidth, windowHeight - 80); // window sized canvas
    c.position(0, 80); 
   } else {
     let c = createCanvas(windowWidth, windowHeight - 180);
     c.position(0, 180);
   }
  
  background(255);
  
  labelSize = createDiv('Size'); 
  sliderSize = createSlider(5, 80, 15);
  sliderSize.parent(labelSize);

  labelColor = createDiv('Color'); 
  sliderColor = createSlider(0, 320, 200); // starts red, stops at pick
  sliderColor.parent(labelColor);

  labelSat = createDiv('Saturation'); 
  sliderSat = createSlider(0, 360, 360); 
  sliderSat.parent(labelSat);

  labelBri = createDiv('Brightness'); 
  sliderBri = createSlider(0, 360, 180); 
  sliderBri.parent(labelBri);

  labelA = createDiv('Opacity'); 
  sliderA = createSlider(0, 360, 360); 
  sliderA.parent(labelA);

  backButton = createA('https://sajump-ixd.github.io/helloworldgallery/index.html', ' « Gallery'); //back to gallery
  
  }

   function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
   } 
   function draw() {
    
    noStroke();
    colorMode (HSL, 360); // changes color mode to hue, sat, brightness. 360 is max
    let hue = (sliderColor.value()); 
    let sat = (sliderSat.value());
    let bri = (sliderBri.value());
    let a = (sliderA.value());
    fill(hue, sat, bri, a);

    let starX = random(width);
    let starY = random(height);
    ellipse(starX, starY, sliderSize.value(), sliderSize.value());

    
    
   }