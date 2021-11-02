class Polygon{
constructor(x,y,width,height){

var options={

'restitution':1.8,
'friction':0.1,
'density':12.0

    }

    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    this.image = loadImage("polygon.png");
    World.add(world,this.body);
}

display(){
var pos = this.body.position;
push();
translate(pos.x,pos.y);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);



}






}