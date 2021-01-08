var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof1;
var rope1;
const Render = Matter.Render;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(720,600);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(360, 80, 450, 50);
	bobObject1 = new Bob(500,500);
	bobObject2 = new Bob(430,500);
	bobObject3 = new Bob(360,500);
	bobObject4 = new Bob(290,500);
	bobObject5 = new Bob(220,500);

	bobDiameter = 50;

	rope1 = new Rope(bobObject1.body, roof1.body, 140, 0);
	rope2 = new Rope(bobObject2.body, roof1.body, 70, 0);
	rope3 = new Rope(bobObject3.body, roof1.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof1.body, -70, 0);
	rope5 = new Rope(bobObject5.body, roof1.body, -140, 0);


	var render = Render.create({
		element: document.body, 
		engine: engine, 
		options: { width: 1200, height: 400, showAngleIndicator: true }
		}); 
		Render.run(render);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: 600, y: -15});

	}
}


