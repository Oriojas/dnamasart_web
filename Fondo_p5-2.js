let w = 400;
let h = 400;

function setup() {
  createCanvas(w, h);
  background(255);
  frameRate(26);
  i = 0;
}

function xT(alpha, t){
  let x = alpha * sqrt(2) * cos(t) / (pow(sin(t), 2) + 1); 
  x = x + (w / 2);
  return x;
}

function yT(alpha, t){
  let y = alpha * sqrt(2) * cos(t) * sin(t) / (pow(sin(t), 2) + 1);
  y = y + (h / 2);
  return y;
}

function draw() {
  
  //console.log(i);
  let alpha = 120; 
  
  let x = xT(alpha, i);
  let y = yT(alpha, i);
  
  //console.log(x);
  //console.log(y);
  
  stroke("rgba(10%,10%,10%,0.5)");
  strokeWeight(1);
  line(0, 0, x, y);
  line(0, height, x, y);
  line(width, 0, x, y);
  line(width, height, x, y);
  stroke("rgba(95%,95%,95%,0.8)");
  strokeWeight(6);  
  point(x, y);
  i++;
  
  if (i > w) {
    i = 0;
    textSize(32);
    textAlign(CENTER, CENTER);
    strokeWeight(1); 
    fill("rgba(95%,95%,95%,0.8)");
    text('[DNA+Art]:', w / 2, h / 2);
  }  
}