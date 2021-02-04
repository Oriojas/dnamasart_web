var N = 4;
function setup() {
  createCanvas(500, 500, WEBGL);
  frameRate(80);
  noFill();
  strokeWeight(1.2);
  ortho();
  sphere(150);
  bezierDetail(5);
  detailX = createSlider(3, 20, 1);
  detailY = createSlider(3, 20, 1);

}

function draw(){
  background(255);
  
  var t = frameCount * TWO_PI/1800.0;
  var A = map(cos(t), -1, 1, PI/2, PI);
  
  for (i=0; i < N; i++){
    push();   
      rotateX((N - i) * A/N + t);
      rotateY(i * A/N - t);
      sphere((i+1) * 240.0/N, detailX.value(), detailY.value());
    pop();   
  }
}
