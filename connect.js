class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.6,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
        }
    fly(){
    this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
        var posA = this.sling.bodyA.position;
        var posB = this.pointB
        strokeWeight(4);
        line(posA.x, posA.y, posB.x, posB.y);
        }
    }
    
}