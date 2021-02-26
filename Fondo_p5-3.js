let w = 400;
let h = 400;
let c = 8;
let j = 1;

function setup() {
  createCanvas(w, h);
  background(200);
  lin = createSlider(0.2, 3, 1, 0.1)

}


function draw() {

strokeWeight(lin.value());

for(let i=1; i<h; i++){
  line(0, i*c, h, i*c);
  line(i*c, 0, i*c, w);
}

line(0, j*c, j*c, w);
line(j*c, 0, h, j*c);
j++;

if (j == h/c){
  j = 1;
  background(200);
  }
}