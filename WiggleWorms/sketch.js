let t = 0; // define new variable: time
let p = 0; // switch for starting and stopping loop
let sliderSize; // slider controls circle size 
let sliderColor; // color change
let sliderX; // x mouse position
let sliderY; // y mouse position
let sliderT; // t time speed


function setup() { // sets up the enviroment. can only be used once
  if (windowWidth > 480){
    let c = createCanvas(windowWidth, windowHeight - 80); // window sized canvas
    c.position(0, 80); 
   } else {
     let c = createCanvas(windowWidth, windowHeight - 180);
     c.position(0, 180);
   } // positions canvas
  noStroke(); // no outline of wiggle worms
  

  
  labelSize = createDiv('Size'); 
  sliderSize = createSlider(1, 30, 15);
  sliderSize.parent(labelSize);

  labelColor = createDiv('Color'); 
  sliderColor = createSlider(0, 360, 1);
  sliderColor.parent(labelColor);

  labelX = createDiv('X Position'); 
  sliderX = createSlider(0, 360, 1);
  sliderX.parent(labelX);

  labelY = createDiv('Y Position'); 
  sliderY = createSlider(0, 360, 1);
  sliderY.parent(labelY);

  labelT = createDiv('Speed'); 
  sliderT = createSlider(1, 10, 7);
  sliderT.parent(labelT);

  //labelBack = createDiv('')
  backButton = createA('/index.html', ' « Back to Gallery'); //back to gallery
  //backButton.parent(labelBack);

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} // automatically resizes the sketch everytime the window is resized

function draw() { // continous excutes code
  background(0, 10); // background and opacity to create fading effect
 
  // for makes a loop to make a x and y grid of ellipses
  // first part is the initial state; second is what's being check each time
  // if false, loop ends; third excutes after each loop
  for (let x = 0; x <= width; x = x + 55) { // 55 creates the width between each wiggle worm
    for (let y = 0; y <= height; y = y + 18) { // 18 creates height between each wiggle worm
      // starting point of each circle depends on mouse position
      //const declares a variable that cannot be redeclared
      //map re-maps a variable
      //mouseY is the vertical position of the mouse
      // 0 and height are current values, the next two are target values
      const yAngle = map(sliderY.value(), 0, height, 13, 160, true);
      const xAngle = map(sliderX.value(), 0, width, 29, 200);
      // variable that makes each circle vary based on it's position 
      // creates a wave effect
      const angle = yAngle * (y / height) + xAngle * (x / width);
      // each wiggle worm moves in a circle
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);
    
      let size = (sliderSize.value());
      // draws the ellipse: location x, location y, width, height
      ellipse(myX, myY, size); // draw wiggle worm 
    }
  }

  t = t + (sliderT.value()/1000); // controls speed 
  colorMode (HSL, 360); // changes color mode to hue, sat, brightness. 360 is max
  let hue = (sliderColor.value()); // makes the color sliders work
  fill(hue, 220, 200);
  
}



