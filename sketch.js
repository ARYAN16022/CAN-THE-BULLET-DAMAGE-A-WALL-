var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
 bullet=createSprite(50, 200, 50, 20);
 bullet.shapeColor="white";
 bullet1=createSprite(50, 50, 15,15);
 bullet1.shapeColor="red";
 bullet2=createSprite(50, 70, 15,15);
 bullet2.shapeColor="green";

 wall=createSprite(1200,200,thickness, 200);
 wall.shapeColor=color(80,80,80);
 bullet.velocityX= speed;
}

function draw() {
  background("black");
  fill("white");
  text("=damage>10",60,55);
  text("=damage<10",60,75);
  if(collided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
    }

  }
  
  drawSprites();
}