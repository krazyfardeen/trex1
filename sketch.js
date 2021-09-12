var star = [25,38,40,45];
var trex;
var trexrunning
var edge;
var ground,groundimg
function preload(){
trexrunning = loadAnimation("trex1.png","trex3.png","trex4.png");
groundimg = loadImage("ground1.png");
}

function setup() 
{
  createCanvas(600,200);
  trex = createSprite(50,160,20,50);
  trex.addAnimation("igni",trexrunning);
  ground = createSprite(300,180,600,20);
ground.addImage(groundimg)
  ground.velocityX = -3;
}


function draw() 
{
  

background(51);
edge= createEdgeSprites();
if(keyDown("space")){
trex.velocityY = -10;

}
if (ground.x <0){
ground.x = ground.width/2 
}
trex.velocityY = trex.velocityY+1
trex.collide(ground);
drawSprites();
}
function cookie(){
var sum = star[0]+ star[1]+ star[2]+ star[3];
var  avg = sum/star.length;
console.log(avg);
}
