let sliderColor; // color change
let sliderSpeed; // changes frame rate
let sliderA; // opacity
let buttonReset; // restart button
let sliderW; // stroke weight
let sliderM; // size
let sliderR; // rotation
let buttonSave; // save canvas
let buttonPause; // pause
let p = 0; // pause 

  
let w = 80;

function setup() { 
  
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
  sliderColor = createSlider(0, 320, 204);
  sliderColor.parent(labelColor);

  labelW = createDiv('thickness'); 
  sliderW = createSlider(1, 15, 1); 
  sliderW.parent(labelW);

  labelA = createDiv('opacity'); 
  sliderA = createSlider(10, 360, 100); 
  sliderA.parent(labelA);
    
  labelSpeed = createDiv('speed'); 
  sliderSpeed = createSlider(6, 300, 40);
  sliderSpeed.parent(labelSpeed);

  labelM = createDiv('size'); 
  sliderM = createSlider(10, 1000, 200); 
  sliderM.parent(labelM);

  labelR = createDiv('rotation'); 
  sliderR = createSlider(0, 100, 11); 
  sliderR.parent(labelR);
  
  // labelReset = createDiv(); 
  // buttonReset = createButton('restart'); 
  // buttonReset.parent(labelReset);
  // buttonReset.mousePressed(windowResized);
  // buttonReset.class('button');

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
  
    
  backButton = createA('https://sajump-ixd.github.io/helloworldgallery/index.html', '« gallery'); //back to gallery
  }
  

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight - w);
    background('white');
    c.position(0, w);
    
  } 
  
  function draw() { 
    colorMode (HSL, 360); // changes color mode to hue, sat, brightness. 360 is max
    let hue = (sliderColor.value());
    let a = (sliderA.value());
    stroke(hue, 200, 200, a); // color and opacity sliders
    strokeWeight(sliderW.value()); // thickness slider
    frameRate(sliderSpeed.value()); // speed slider
    var t = frameCount;
    var m = (sliderM.value());
    var r = (sliderR.value());
    translate(windowWidth / 2, (windowHeight - w) / 2); // centers the drawing
    rotate(t/r);
    line(sin(t / 2) * m, cos(t / 2) * m, atan(t / 2) * m, cos(t / 2) * m);
  
  };
  
  function saveArt() {
    saveCanvas( 'Spirograph', 'jpg')
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