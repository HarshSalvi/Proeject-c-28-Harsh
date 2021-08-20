
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var dustbin;
var dustbin1;
var dustbin2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground=new Ground(400,690,900,50);
paper=new Paper(120,100,50);
dustbin=new Dustbin(650,650,150,28);
dustbin1=new Dustbin(565,589,28,150);
dustbin2=new Dustbin(739,589,28,150);
	Engine.run(engine);
  
}


function draw() {
 rectMode(CENTER);

  background(0);
 ground.display();
  paper.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();
  
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-170});
	}

}

