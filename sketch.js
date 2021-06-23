const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;



function setup(){
    var canvas = createCanvas(1365,650);
    engine = Engine.create();
    world = engine.world;
    bg = loadImage("snow2.jpg");
    snow = new Snow(200,50);
 


}

function draw(){
    background(bg);
    Engine.update(engine);

    snow.display();
    
 
}