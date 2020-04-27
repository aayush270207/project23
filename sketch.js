const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var box1,box2,box3,box4,box5;
var triangle1,triangle2,triangle3

function setup() {
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  box1=new Box(200,100,50,50);
  box2=new Box(100,50,50,100);
}

function draw() {
  background(0); 
  Engine.update(engine);
  box1.display();
  box2.display();


  drawSprites();
}