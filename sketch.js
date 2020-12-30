
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustBin1,dustBin2,dustBin3;


function setup() {
	createCanvas(900, 500);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  paper=new Paper(50,70,20,20);
    dustBin1=new DustBin(670,420,10,190);
	  ground=new Ground(600,height,1200,20) 
	
    dustBin2= new DustBin(470,420,10,120);
    dustBin3=new DustBin(570,485,210,10);
    
    
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  dustBin1.display();
  ground.display();

  dustBin2.display();
  dustBin3.display();
   
 

  keyPressed();
  //drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
   
    Matter.Body.applyForce(paper.body,paper.body.position,{x:0.1,y:-0.61})	
  
  }        
}