class Block {
    constructor(x, y, width, height) {
      var options = {
        
        'restitution':1.0,
        'friction':0.1,
        'density':0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility = 225;
      
      World.add(world, this.body);
    }
    score(){
      if(this.Visibility<0 && this.Visibility >-105){
        score++;
      }
    }
    display(){
      var pos =this.body.position;
      if(this.body.speed<3){
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("yellow");
  
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility-5;
      tint(255,this.Visibility);
   
     pop();
      }
    }
    
}