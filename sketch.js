var balloon;
var database,position;

var balloonAnimation , bgImage;

function preload(){
 bgImage = loadImage("Hot Air Ballon-01.png")
 balloonAnimation = loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png") ; 
}

function setup() {
 
  database=firebase.database();
  createCanvas(1400,1000);
   bg = createSprite(400,200)
   bg.addImage(bgImage);
    

  balloon=createSprite(100,100, 5, 5);
  balloon.addAnimation("moving",balloonAnimation)
  

  
}

function draw() {
  background(0);  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -2 ;
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x +2;
}
else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y - 2 ;
}
else if(keyDown(DOWN_ARROW)){
   balloon.y = balloon.y +2;
}
  drawSprites();
}





