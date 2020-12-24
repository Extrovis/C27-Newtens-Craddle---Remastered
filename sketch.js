const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(50, 250, 70);
	bobObject2 = new Bob(100, 300, 70);
	bobObject3 = new Bob(150, 350, 70);
	bobObject4 = new Bob(200, 400, 70);
	bobObject5 = new Bob(250, 450, 70);

	ground = new Roof(width / 2, height);

	roof = new Roof(width / 2, 100);

	rope1 = new Rope(bobObject1.body, roof.body, -140, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -70, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 70, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 140, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  ground.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -600, y: 0});
	}
}




