/*function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  drawSprites();
}*/


//var x = prompt("which class is this")

/*var car,wall,car1,wall1,speed1,weight1;
var deformation;

function setup() {
  createCanvas(windowWidth,windowHeight-150);
  speed = random(40,60);
  weight = random(1500,3000);

  wall = createSprite(windowWidth-200,windowHeight/2.6,10,200);
  car = createSprite(90,wall.y,30,30);
  car.velocityX=20

  deformation=(Math.round(weight*speed*speed)/45000)

  console.log(deformation)
var xy="orange"
  var xyz="green"
}

function draw() {
  background(0,0,0)
wall.shapeColor="white"
  if(keyDown("space")&&car.x-wall.x > -21){
    newcar();
  }
function newcar(){
  speed = random(40,60);
  weight = random(1500,3000);
  car.x=90;
  car.y=wall.y;
  wall.x=windowWidth-200;
  wall.y=windowHeight/2.6;
  car.velocityX=20;
  deformation=(Math.round(weight*speed*speed)/45000)
  }

console.log(car.x-wall.x)

 if(car.x-wall.x > -13&&deformation>180){
    car.velocityX=0
    car.velocityX=0
    car.velocityY=0
    car.shapeColor="red"
    alert("The vehicle is unsafe to use.......Reload the page and click OK to test another vehicle")
  }*/

 /*if(wall.x-car.x<car.width/2+wall.width/2){
  if(deformation>180){
    car.velocityX=0
    car.velocityX=0
    car.velocityY=0
    car.shapeColor="red"
    alert("The vehicle is unsafe to use.......Reload the page and click OK to test another vehicle")
  }
  if(deformation<80){
    car.velocityX=0
    car.velocityY=0

    car.shapeColor="green"
    alert("The vehicle is safe to use........Reload the page and click OK to test another vehicle")
  }
  if(deformation>80&&deformation<180){
    car.velocityX=0
    car.velocityY=0

    car.shapeColor="yellow"
    alert("The vehicle is mid--safe to use........Reload the page and click OK to test another vehicle")
  }
 }

  /*if(car.x-wall.x > -13&&deformation>80&&deformation<180){
    car.velocityX=0
    car.velocityY=0

    car.shapeColor="yellow"
    alert("The vehicle is mid--safe to use........Reload the page and click OK to test another vehicle")
  }


  if(car.x-wall.x > -13&&deformation<80){
    car.velocityX=0
    car.velocityX=0
    car.velocityY=0
    car.shapeColor="green"
    alert("The vehicle is safe to use.........Reload the page and click OK to test another vehicle")
  }

  drawSprites();
}*/



/*var wall;
var thickness;
var bullet,speed,weight;
var deformation;
var rightedge;
var leftedge;
function setup(){
createCanvas(1600,400)
background("black")
thickness=random(22,83)
speed=random(223,321)
weight=random(30,52)
wall=createSprite(1200,200,thickness,200)
wall.shapeColor=color(80,80,80)
bullet=createSprite(400,wall.y,40,10)
bullet.velocityX=10;


deformation=Math.round((0.5*weight*speed*speed)/thickness*thickness*thickness)
}
function draw(){
  bullet.width=40;
  

  console.log(deformation)

  if(collide(bullet,wall)===true){
    /**
     * 
   
    bullet.velocityX=0
  /*
    if(deformation>10){
      wall.shapeColor="red"
    }
  /* 
    if(deformation<10){
      wall.shapeColor="green"
    }
   if(deformation===10){
     wall.shapeColor="yellow"
   }
    /** 
    
}



  drawSprites();
}


function collide(x,y){
rightedge=x.x+x.width
leftedge=y.x
if(rightedge>=leftedge){
  return true
}else{
  return false
}
}*/


var wall,bullet;

var speed,weight,thickness,deformation;


function setup(){



/*thickness=random(22,83)

speed=random(10,25)

weight=random(30,52)

console.log(10*15*10/((22)^2))

wall=createSprite(1200,200,thickness,200)

wall.shapeColor=color(80,80,80)

bullet=createSprite(400,200,40,10);

bullet.velocityX=speed;



console.log(deformation)*/
createCanvas(1600,400);
 speed = random(223,321);
 thickness = random(22,83);
 weight = random(30,52);
 bullet = createSprite(50,200,50,30);
 wall=createSprite(1200,200,thickness,height/2);
 /*deformation=Math.round((0.5*weight*speed*speed)/(thickness*thickness*thickness))
 console.log(deformation)*/
}
function draw(){

 /* bullet.width = 40 ;

  if(collide(
    bullet,wall)===true){
    bullet.velocityX = 0

    if(deformation>25000){
      wall.shapeColor = "red"
    }

    if(deformation<25000){
      wall.shapeColor = "greem"
    }

    /*if(deformation>10){
      wall.shapeColor = "red"
    }else(wall.shapeColor=color(80,80,80))
*/

background(0,0,0);

  bullet.velocityX = speed/10;

 /* if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }*/

  if(collide(wall,bullet)===true){
    deformation=Math.round((0.5*weight*speed*speed)/(thickness*thickness*thickness))
 console.log(deformation)
    bullet.velocityX = 0
    if(keyDown("space")){
      newcar(bullet,wall)
    }
    if(deformation>10){
      wall.shapeColor = color(255,0,0)
    }
    if(deformation<10){
      wall.shapeColor = color(0,255,0)

    }

    if(deformation===10){
      wall.shapeColor= color(255,255,0)
    }
  }else{
    wall.shapeColor=	rgb(105,105,105)
  }
    drawSprites();
}
  
function collide(a,b){
  if(a.x-b.x < (a.width+b.width)/2){
    return true;
  }else{
    return false;
  }
}

function newcar(a,b){
  
 speed = random(223,321);
 thickness = random(22,83);
 weight = random(30,52);
 a.x =50;
 a.y=200;
 b.x = 1200;
 b.y = 200;
 
 /*deformation=Math.round((0.5*weight*speed*speed)/(thickness*thickness*thickness));*/
 console.log(deformation);
 a.velocityX= speed/10;
 
}