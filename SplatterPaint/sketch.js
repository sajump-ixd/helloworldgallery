let sliderSize; // slider controls circle size 
let sliderColor; // hue changer
let sliderSat; // saturation
let sliderBri; // brightness
let sliderA; // alpha channel
let buttonSave; // save canvas
let buttonPause; // pause
let sliderSpeed; // changes frame rate
let p = 0; // pause 
let w = 80;


function setup() { // sets up the enviroment. can only be used once
  if (windowWidth >= 1280 ) {
    w = 80
  } else if (windowWidth >= 769 && windowWidth < 1280) {
    w = 140 
  } else if (windowWidth >= 481 && windowWidth < 769){
    w = 180
  } else {
    w = 240
  }

  let c = createCanvas(windowWidth, windowHeight - w ); // window sized canvas
  c.position(0, w); 
  background('white');
  
  labelColor = createDiv('color'); 
  sliderColor = createSlider(0, 320, 204); // starts red, stops at pick
  sliderColor.parent(labelColor);

  labelSize = createDiv('size'); 
  sliderSize = createSlider(5, 80, 15);
  sliderSize.parent(labelSize);

  labelSat = createDiv('saturation'); 
  sliderSat = createSlider(0, 360, 200); 
  sliderSat.parent(labelSat);

  labelBri = createDiv('brightness'); 
  sliderBri = createSlider(0, 360, 200); 
  sliderBri.parent(labelBri);

  labelA = createDiv('opacity'); 
  sliderA = createSlider(0, 360, 360); 
  sliderA.parent(labelA);

  labelSpeed = createDiv('speed'); 
  sliderSpeed = createSlider(6, 300, 40);
  sliderSpeed.parent(labelSpeed);

  labelPause = createDiv(); 
  buttonPause = createButton('pause'); 
  buttonPause.parent(labelPause);
  buttonPause.mousePressed(pause);
  buttonPause.class('button');

  labelSave = createDiv(); 
  buttonSave = createButton('save'); 
  buttonSave.parent(labelSave);
  buttonSave.mousePressed(saveArt);
  buttonSave.class('button');

  backButton = createA('https://sajump-ixd.github.io/helloworldgallery/index.html', ' « gallery'); //back to gallery
  
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight - w);
    background('white');
    c.position(0, w);
    
  } 
   function draw() {
    
    noStroke();
    frameRate(sliderSpeed.value()); // speed slider
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

   function saveArt() {
    saveCanvas( 'Splatter Paint', 'jpg')
  }

  function pause(){
    if (p == 0 ){
     noLoop();
     p = 255;
   } else if (p == 255){
       loop();
       p = 0;
   }

  }