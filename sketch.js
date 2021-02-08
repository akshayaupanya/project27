
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
roof = new Roof(430,70,330,20);
//rope1 = new Rope();
bob1 = new Bob(330,300);
bob2 = new Bob(370,300);
bob3 = new Bob(430,300);
bob4 = new Bob(490,300);
bob5 = new Bob(550,300);
rope1 = new Rope(roof.body,bob1.body,-120,0);
rope2 = new Rope(roof.body,bob2.body,-60,0);
rope3 = new Rope(roof.body,bob3.body,0,0);
rope4 = new Rope(roof.body,bob4.body,60,0);
rope5 = new Rope(roof.body,bob5.body,120,0);
console.log(bob1.body);
	
  
}


function draw() {
 // rectMode(CENTER);
  background('yellow');
  
 // drawSprites();
 roof.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
// keyPressed();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-60});

	}
}
	