/*function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}*/


//var x = prompt("which class is this")

var car,wall,car1,wall1,speed1,weight1;
var deformation;

function setup() {
  createCanvas(1400,800);
  speed = random(40,60);
  weight = random(1500,3000);
  car = createSprite(90,400,30,30);
  wall = createSprite(1200,400,10,200);
  car.velocityX=20

  deformation=(Math.round(weight*speed*speed)/45000)
  x=createg
  console.log(deformation)
}

function draw() {
  background(0,0,0); 
  
function newcar(){
  speed1 = random(40,60);
  weight1 = random(1500,3000);
  car1 = createSprite(90,400,30,30);
  wall1 = createSprite(1200,400,10,200);
  car1.velocityX=20

  deformation=(Math.round(weight*speed*speed)/45000)}
  if(car.x-wall.x > -21&&deformation>180){
    car.velocityX=0
    car.shapeColor="red"
  }
  if(car.x-wall.x > -21&&deformation>80&&deformation<180){
    car.velocityX=0
    car.shapeColor="yellow"
  }
  if(car.x-wall.x > -21&&deformation<80){
    car.velocityX=0
    car.shapeColor="green"
  }
 
  drawSprites();
}
