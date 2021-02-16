
//SHIVANI
var fixedRect,movingRect;
var r1, r2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  //200---R1.x
  //200-R1.Y
  //R1.WIDTH
  //R1.HEIGHT
  movingRect= createSprite(400, 200, 80, 30);
  r1= createSprite(30,200,20,20);
  r2= createSprite(370,200,20,20);
  r1.velocityX=4;
  r2.velocityX=-4;
  r1.shapeColor="orange";
  r2.shapeColor="purple";
  

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(algo1(movingRect, fixedRect) )
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}
algo2(r1,r2);
  drawSprites();
}
// whther 2 rect are touching each other or not.
