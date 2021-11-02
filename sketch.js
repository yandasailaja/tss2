const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2,ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14;
var block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28;
var polygon,sling;
var score = 0;
var bg = "light.jpg",backgroundImg;

function preload(){

getBackgroundImage();


}
 function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

stand1 = new Ground(591,300,190,10);
stand2 = new Ground(900,200,190,10);
//level 1 of stand 1
block1 = new Block(520,280,30,30);
block2 = new Block(550,280,30,30);
block3 = new Block(585,280,30,30);
block4 = new Block(620,280,30,30);
block5 = new Block(655,280,30,30);

// level 2 of stand 1
block6 = new Block(537,245,30,30);
block7 = new Block(572,245,30,30);
block8 = new Block(607,245,30,30);
block9 = new Block(642,245,30,30);

// level 3 of stand 1
block10 = new Block(555,210,30,30);
block11 = new Block(590,210,30,30);
block12 = new Block(625,210,30,30);

//top of stand 1
block13 = new Block(570,175,30,30);
block14 = new Block(605,175,30,30);

// level 1 of stand 2
block15 = new Block(829,180,30,30);
block16 = new Block(859,180,30,30);
block17 = new Block(894,180,30,30);
block18 = new Block(929,180,30,30);
block19 = new Block(964,180,30,30);

// level 2 of stand 2
block20 = new Block(845,145,30,30);
block21 = new Block(880,145,30,30);
block22 = new Block(915,145,30,30);
block23 = new Block(950,145,30,30);

// level 3 of stand 2
block24 = new Block(864,110,30,30);
block25 = new Block(899,110,30,30);
block26 = new Block(934,110,30,30);

// top of stand 2
block27 = new Block(880,75,30,30);
block28 = new Block(915,75,30,30);

// ground

// polygon
polygon = new Polygon(100,280,60,60);
Matter.Body.setStatic(polygon.body,false);

// sling
sling = new Sling(polygon.body,{x: 110, y: 280});

}


function draw(){
    if(backgroundImg){
    background(backgroundImg);
}
Engine.update(engine);

// score
noStroke();
textSize(35)
fill("white")
text("Score  " + score, width-300, 50)
// stands
stand1.display();
stand2.display();

// stand 1
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();

// stand 2
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
block27.display();
block28.display();

polygon.display();
sling.display();

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();
block19.score();
block20.score();
block21.score();
block22.score();
block23.score();
block24.score();
block25.score();
block26.score();
block27.score();
block28.score();

drawSprites();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){

sling.fly();
}

function keyPressed(){
    if(keyCode===32){
    sling.attach(polygon.body);
    }
}

async function getBackgroundImage(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
if(hour>=06 && hour<=18){
bg = "light.jpg";
}
else{
    bg = "dark.jpg";
}

backgroundImg = loadImage(bg);
console.log(backgroundImg);
}