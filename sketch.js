var car, wall;

var speed, weight;

var deformation
function setup() {
  var canvas = createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,350,50,50);
  car.shapeColor=(155,155,155);
  wall = createSprite(1000,300,60,height/2);
  wall.shapeColor=(255);
}

function draw() {
  background(0,0,0);
  car.velocityX=speed; 
  
  if(car.x-wall.x<car.width/2+wall.width/2&&
    wall.x-car.x<car.width/2+wall.width){
    deformation=(0.5*weight*speed*speed)/22500;
    if(deformation<100){
      car.shapeColor="green";
      car.velocityX=0;
    }
    if(100<deformation<180){
      car.shapeColor="yellow";
      car.velocityX=0;
    }
    if(deformation>180){
      car.shapeColor="red";
      car.velocityX=0;
    }
  } 
  drawSprites();
}
