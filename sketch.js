const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, wall1, wall2, wall3, ground; 


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100, 350); 
	ground = new Wall(400, 650, 800, 20);
	//Ground is similar to a wall, so I am making it with the Wall class. 
	wall1 = new Wall(550, 600, 20, 81)
	wall2 = new Wall(700, 600, 20, 81)
	wall3 = new Wall(625, 630, 162, 20)

	Engine.run(engine);
  
}
function keyPressed() {
	var speed = {x:2, y:-6}
	if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, speed)
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed(); 
  ball.display();
  ground.display();
  fill('red');
  wall3.display();
  wall1.display();
  wall2.display(); 
  fill('gray'); 
  drawSprites();
 
}




