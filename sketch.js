const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var plinkos=[];
var divisions=[];
var particle;
var divisionHeight=300;
var score=0;
var gameState="start";
var count=0;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height,width,20);
     for (var k = 0; k <=width; k = k + 80) { 
         divisions.push(new Divisions(k,
             height-divisionHeight/2, 10,
              divisionHeight));
             } 
     for (var j = 75; j <=width; j=j+50) {
          plinkos.push(new Plinko(j,75));
         }
         
    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
     } 
     
    for (var j = 75; j <=width; j=j+50) { 
        plinkos.push(new Plinko(j,275));
     } 
     
    for (var j = 50; j <=width-10; j=j+50) { 
        plinkos.push(new Plinko(j,375));
     }



}
function draw() {
    background("black");
    textSize(35)
    text("Score : "+score,20,40);
    fill("white");
    //text(mouseX + "," + mouseY, 20, 50);
    textSize(35)
    text(" 500 ", 5, 550);
    text(" 500 ", 80, 550);
    text(" 500 ", 160, 550);
    text(" 500 ", 240, 550);
    text(" 100 ", 320, 550);
    text(" 100 ", 400, 550);
    text(" 100 ", 480, 550);
    text(" 200 ", 560, 550);
    text(" 200 ", 640, 550);
    text(" 200 ", 720, 550);
    Engine.update(engine);
    ground.display();
    
    if ( gameState =="end") {
      
      textSize(100);
      text("GameOver", 150, 250);
      //return
    }
}
