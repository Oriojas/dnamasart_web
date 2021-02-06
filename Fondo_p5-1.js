var x = 0;
var y = 0;

function setup() {
    createCanvas(500, 500, WEBGL);
    frameRate(20);
    noFill();
    strokeWeight(1);
    ortho();
    rad_1 = createSlider(0.05, 20, 10);
  
  }


  function draw(){
    for (var theta = 1; theta < 720; theta++) {
        var r = (-rad_1.value() / 50) * theta; // Controla el radio de la función
        stroke(random(0, 255)); // Controla el color de la función
        strokeWeight(random(1, 6)); // Controla en ancho de la animación
        x = (r * cos(theta)); // Dibuja las coordenadas en X
        y = (r * sin(theta)); // Dibuja las coordenadas en Y
        point(x, y); // Grafica los puntos
        
    }
    
       
};
