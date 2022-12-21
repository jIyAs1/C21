const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var butn1;
var butn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var options = {
    restitution : 0.95,


  }

  ball = Bodies.circle(200,100,20,options)
  World.add(world,ball);

  butn1=createImg("up.png");
  butn1.position(200,30);
  butn1.size(50,50);
  butn1.mouseClicked(v_force);

  butn2 = createImg("right.png");
  butn2.position(20,30);
  butn2.size(50,50);
  butn2.mouseClicked(h_force);


  
}



function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
}

function v_force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05});
}

function h_force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
