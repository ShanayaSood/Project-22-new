
var fairy,star;
var bg;
function preload()
{
   //preload the images here

   fairyImage = loadAnimation ("images/fairy1.png","images/fairy2.png")
    starImage=loadImage("images/star.png")
    bgImage=loadImage("images/starnight.png")
}

function setup() {
  createCanvas(800, 750);
  
  fairy = createSprite(200,500,20,20)
  fairy.addAnimation("fairy",fairyImage)
   fairy.scale=0.3
  star = createSprite(700,100,20,20)
   star.addImage(starImage)
   star.scale=0.2
}


function draw() {
 background(bgImage)
  
if(keyIsDown === LEFT_ARROW){
  fairy.x=fairy.x-5
}
if(keyIsDown === RIGHT_ARROW){
  fairy.x=fairy.x+5
}
 
  drawSprites()

}




function keyPressed(){
  
}

