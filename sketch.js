const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1,box2,box3,box4,box5,box6,box7,box8;
var SlingShot;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

polygon=Bodies.circle(50,200,20);
World.add(world,polygon);

SlingShot=new SlingShot(this.polygon,{x:100,y:200});

    box1=new box(330,235,30,40);
    box2=new box(360,235,30,40);
    box3=new box(390,235,30,40);
    box4=new box(420,235,30,40);
    box5=new box(450,235,30,40);
    box6=new box(360,195,30,40);
    box7=new box(390,195,30,40);
    box8=new box(420,195,30,40);
    box9=new box(390,155,30,40);

    



  createSprite(400, 200, 50, 50);

  ground = new Ground(600,height,1200,20);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  
  imageMode (CENTER);
   image(polygon.position.x,polygon.position.y,40,40);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  ground.display();
  drawSprites();
}