
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin1,dustbin2,dustbin3;
var ground;

function preload(){
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,350,40);
dustbin1 = new Dustbin(1000,height-22,200,20);
dustbin2 = new Dustbin(900,height-70,20,100);
dustbin3 = new Dustbin(1100,height-70,20,100);
ground = new Ground(600,height,1200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode == UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

 }
}

