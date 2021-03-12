var signal, virus, sanitizer, mask, backgr;
var signalG, virusG, sanitizerG, maskG;
var signalImg, virusImg, sanitizerImg, maskImg, backgrImg;
var PLAY=1;
var END=0;
var gameState=1;


function preload()
{
signalImg= loadImage("signal.jpg");
virusImg= loadImage("virus.png");
sanitizerImg= loadImage("santizer.png");
maskImg= loadImage("mask.jpg");
backgrImg= loadImage("backdrop.jpg");

}

function setup() {
	createCanvas(windoWidth, windowHeight);

  backgr= createSprite(width/2, 200);
  backgr.addImage(backgrImg);
  backgr.velocityY=3;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  signalG=new Group();
  virusG= new Group();
  sanitizerG= new Group();
  maskG= new Group();

  if(gameState===PLAY){
    background(0);
    virus.x=World.mouseX;
     
     edges= createEdgeSprites();
     virus.collide(edges);
   
     if(path.y>height){
       path.y=height/2;
  
}
createCash();
  createDiamonds();
  createJewellery();
  createSword();
 }

function draw() {
  rectMode(CENTER);
  background(cyan);
  
  drawSprites();
 
}


function createSignal(){
  if(World.frameCount%200==0){
    var signal= createSprite(Math.round(random(50, width-50), 40, 10, 10));
    signal.addImage(signalImg);
    signal.velocityY=3;
    signal.lifetime=200;
    signal.scale=0.18;
    signalG.add(cash);

  }
}
  

  function createSanitizer(){
    if(World.frameCount%320==0){
      var sanitizer= createSprite(Math.round(random(50, width-50), 40, 10, 10));
      sanitizer.addImage(sanitizerImg);
      sanitizer.velocityY=3;
      sanitizer.lifetime=200;
      sanitizer.scale=0.19;
      sanitizerG.add(sanitizer);

    }
  }

  function createMask(){
    if(World.frameCount%540==0){
      var mask= createSprite(Math.round(random(50, width-50),40, 10, 10));
      mask.addImage(maskImg);
      mask.velocityY=3;
      mask.lifetme=200;
      mask.scale=0.2;
      maskG.add(mask);
    }
  }
}
