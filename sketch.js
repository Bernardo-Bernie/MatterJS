
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options ={
	isStatic:false,
	restitutions:0.3,
	friction:0, 
	density: 1.2
}
Matter.Bodies.circle(100,30,20,options,ball)
World.add(ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



