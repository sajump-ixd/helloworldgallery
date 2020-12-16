let sliderA; 
let sliderB; 
let sliderC;
let sliderD; 
let sliderE; 
let sliderF; 
let buttonSave; // save button
let buttonPause; // pause button
let p = 0; // pause variable
  
let w = 80; // variable used in responsiveness if-else
function setup() { 
  
  // responsiveness if-else
  if (windowWidth >= 1280 ) {
    w = 80
  } else if (windowWidth >= 769 && windowWidth < 1280) {
    w = 140 
  } else if (windowWidth >= 481 && windowWidth < 769){
    w = 180
  } else {
    w = 240
  }

  // creates a full screen canvas
  let c = createCanvas(windowWidth, windowHeight - w );
  c.position(0, w); 
  background('white');

  // slider A
  // labelA = createDiv('A'); 
  // sliderA = createSlider(min, max, start);
  // sliderA.parent(labelA);

  // slider B
  // labelB = createDiv('B'); 
  // sliderB = createSlider(min, max, start);
  // sliderB.parent(labelB);

  // slider C
  // labelC = createDiv('C'); 
  // sliderC = createSlider(min, max, start);
  // sliderC.parent(labelC);
    
  //slider D
  // labelD = createDiv('D'); 
  // sliderD = createSlider(min, max, start);
  // sliderD.parent(labelD);

  // slider E
  // labelE = createDiv('E'); 
  // sliderE = createSlider(min, max, start);
  // sliderE.parent(labelE);

  // slider F
  // labelF = createDiv('F'); 
  // sliderF = createSlider(min, max, start);
  // sliderF.parent(labelF);

  // pause button
  labelPause = createDiv(); 
  buttonPause = createButton('pause'); 
  buttonPause.parent(labelPause);
  buttonPause.mousePressed(pause);
  buttonPause.class('button');

  // save button
  labelSave = createDiv(); 
  buttonSave = createButton('save'); 
  buttonSave.parent(labelSave);
  buttonSave.mousePressed(saveArt);
  buttonSave.class('button');
  
  // back to gallery link  
  backButton = createA('https://sajump-ixd.github.io/helloworldgallery/index.html', '« gallery'); //back to gallery
  }
  
  // resizes canvas if window is resized
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight - w);
    background('white');
    c.position(0, w);
  } 
  
  // draw! sample drawing below
  function draw() { 
    ellipse(width/2, (height-w)/2,(height-w)/2);
    colorMode (HSL, 360);
    fill(204, 200, 200);
    noStroke();
	};
  

  // save function
  function saveArt() {
    saveCanvas( 'Filename', 'jpg')
  }

  // pause function
  function pause(){
    if (p == 0 ){
     noLoop();
     p = 255;
   } else if (p == 255){
       loop();
       p = 0;
   }
  }