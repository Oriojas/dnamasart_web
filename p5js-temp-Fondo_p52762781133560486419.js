var N = 4;
function setup() {
  createCanvas(700, 700, WEBGL);
  frameRate(60);
  noFill();
  strokeWeight(1);
  ortho();
  sphere(300);
  console.log(N);
}

function draw(){
  background(255);
  //translate(width/2, height/2, 0);
  
  var t = frameCount * TWO_PI/1800.0;
  var A = map(cos(t), -1, 1, PI/2, PI);
  
  for (i=0; i < N; i++){
    push();
      rotateX((N - i) * A/N + t);
      rotateY(i * A/N - t);
      sphere((i+1) * 240.0/N);
    pop();   
  }
}
