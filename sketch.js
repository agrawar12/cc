var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);

	var ball_options= {
	isStatic:false,
	restituiton:0.3,
	friction:0,
	density:1.2
	}


	engine = Engine.create();
	world = engine.world;


	ball = Bodies.circle(100,10,20,ball_options);  
  World.add(world,ball);

  ellipseMode(RADIUS);

	//Create the Bodies Here.
groundObj = new Ground (width/2,670,width,20);
leftside = new Ground (1100, 600,20,120);
rightside = new Ground (1300, 600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  groundObj.display();
  
  ellipse(ball.position.x,ball.position.y,20);

  leftside.display()
	rightside.display()
}

function keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:86, y:-86});

	} 
}

