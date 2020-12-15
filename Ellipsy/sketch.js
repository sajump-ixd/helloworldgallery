let sliderColor; 
let sliderSpeed; 
let sliderW;
let sliderA; 
let sliderM; 
let sliderR; 
let buttonReset;
let buttonSave; 

  
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

  let c = createCanvas(windowWidth, windowHeight - w );
  c.position(0, w); 
  background('white');

  labelColor = createDiv('color'); 
  sliderColor = createSlider(0, 320, 204);
  sliderColor.parent(labelColor);

  labelW = createDiv('thickness'); 
  sliderW = createSlider(1, 15, 2); 
  sliderW.parent(labelW);

  labelA = createDiv('opacity'); 
  sliderA = createSlider(10, 100, 60); 
  sliderA.parent(labelA);
    
  labelSpeed = createDiv('speed'); 
  sliderSpeed = createSlider(6, 300, 80);
  sliderSpeed.parent(labelSpeed);

  labelM = createDiv('size'); 
  sliderM = createSlider(10, 2000, 600); 
  sliderM.parent(labelM);

  labelR = createDiv('rotation'); 
  sliderR = createSlider(0, 100, 59); 
  sliderR.parent(labelR);
  
  labelReset = createDiv(); 
  buttonReset = createButton('restart'); 
  buttonReset.parent(labelReset);
  buttonReset.mousePressed(windowResized);
  buttonReset.class('button');

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
    noFill();
    colorMode (HSL, 360); 
    let hue = (sliderColor.value());
    let a = (sliderA.value());
    stroke(hue, 200, 200, a); 
    strokeWeight(sliderW.value()); 
    frameRate(sliderSpeed.value());
    var t = frameCount;
    var m = (sliderM.value());
    var r = (sliderR.value());
    
    translate(windowWidth / 2, (windowHeight-w) / 2);
		rotate(t / r);
		ellipse(0, 0, sin(t / 270) * m, cos(t / 377) * m);
	};
  

  
  function saveArt() {
    saveCanvas( 'Ellipsy', 'jpg')
  }
