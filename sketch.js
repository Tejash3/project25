
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,ground1,paper1;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1  = new Ground(600,height,1200,20)
  paper1   = new Paper(200,200,30,30);
  dustbin1 = new Dustbin(700,620,20,140);
  dustbin2 = new Dustbin(900,620,20,140);
  dustbin3 = new Dustbin(800,680,180,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x : 35 , y: -35})
  }
}
