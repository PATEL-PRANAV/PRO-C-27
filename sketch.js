
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobobj1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobobj1 = new bob(300,500,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bobobj1.display();
  
  drawSprites();
 
}



