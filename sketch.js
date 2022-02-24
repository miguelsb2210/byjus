var box;

function setup() {
  createCanvas(800,400);
  box = createSprite(200,200,50,80);
  box.shapeColor = "green";

  

}

function draw() {
  background("blue"); 
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x +5
    background("red");
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x -5
    background("blue");
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y -5
    background("yellow");
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y +5  
    background("purple");
  }
  drawSprites();
}