const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const  Constraint = Matter.Constraint;

var engine, world;
var slingshot;

function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

}



function draw(){
    //background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    
    

    bird.display();
}

function mouseDragged() {

    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    slingshot.fly();
}