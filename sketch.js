var ground;
var leftSide;
var rightSide;
var wall;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    var ball_options={
		isStatic:false,
		restitution:0.2,
		friction:20,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	ground =new Ground(800, 690, 1600, 30);
    leftSide = new Ground(1100, 615, 20, 120);
	rightSide = new Ground(1350, 615, 20, 120);
	wall = new Ground(1575, 350, 50, 700);
	//Create the Bodies Here.
    ball = Bodies.circle(150, 50, 20, ball_options);
    World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  leftSide.show();
  rightSide.show();
  wall.show();
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 20);
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball, {x:0, y:0}, {x:45, y:-135})
  }
}

