
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var balls_options={isStatic:false,restitution:0.3,friction:0,density:1.2}
 
	ground1=new ground(600,570,1200,20)
	leftside=new ground(800,500,20,120)
	rightside=new ground(1100,500,20,120)
	ball=Bodies.circle(200,100,20,balls_options)
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20)
ground1.display();
leftside.display();
rightside.display();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:55,y:-85});
	}
}
