var manImage,lionImage,hammerImage,forestImage,eagleImage;
var manSprite,lionSprite,hammerSprite,forestSprite,eagleSprite;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

forestImage = loadImage("FOREST.png");
hammerImage = loadImage("HAMMER.png");
lionImage = loadImage("LION.png");
manImage = loadImage("IRON MAN.png");
eagleImage= loadImage("eagle.png");	 
}

function setup() {
	createCanvas(1000,1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
forestSprite = createSprite(100,350); 
forestSprite.addImage(forestImage);
forestSprite.scale= 5;

manSprite = createSprite(250,580); 
manSprite.addImage(manImage);
manSprite.scale= 2;	   

hammerSprite = createSprite(250,580); 
hammerSprite.addImage(hammerImage);
hammerSprite.scale= 0.8;	   

lionSprite = createSprite(700,580); 
lionSprite.addImage(lionImage);
lionSprite.scale= 1.5;	   

eagleSprite = createSprite(700,200); 
eagleSprite.addImage(eagleImage);
eagleSprite.scale= 1;	   



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 

  drawSprites();
 
}



