
var fixedRect,movingRect;
var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 50);
  fixedRect.shapeColor ="yellow";
  //fixedRect.velocityX = -5

  movingRect = createSprite(200,200,50,90);
  movingRect.shapeColor = "yellow";
 // movingRect.velocityX = 5;

 rect1 = createSprite(100,100,50,50);  
 rect1.shapeColor = "blue"
 rect1.velocityX=5

 rect2 = createSprite(200,100,50,50);
 rect2.shapeColor = "blue";

 rect3 = createSprite(300,100,50,50);
 rect3.shapeColor = "blue";

 rect4 = createSprite(400,100,50,50);
 rect4.shapeColor = "blue"
 rect4.velocityX = -7
}

function draw() {
 background("skyblue");

//  movingRect.x = mouseX;
//  movingRect.y = mouseY;

//  if(isTouching(movingRect,rect4)){
//    movingRect.shapeColor = "red";
//    rect4.shapeColor = "red"
//  }
//  else{
//   movingRect.shapeColor = "yellow";
//   rect4.shapeColor = "blue"
//  }

 bounceOff(rect1,rect4)
 
 drawSprites()
}


 


