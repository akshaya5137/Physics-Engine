const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var myWorld, myEngine;
 
var ground,ball;

function setup() {
  createCanvas(400,400);
   
  myEngine=Engine.create();
  myWorld=myEngine.world;

  ground= Bodies.rectangle(200,380,400,10,{isStatic:true});
  World.add(myWorld,ground);

  console.log(ground);
  
  var ballOption={
    restitution:0.5,
    density:0.1
  }
  ball = Bodies.circle(200,100,25,ballOption);
  World.add(myWorld,ball);
  
}

function draw() {
  background("black");  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  circle(ball.position.x,ball.position.y,25);
}