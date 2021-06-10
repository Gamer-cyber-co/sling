class SlingShot{

    constructor(bodyA,bodyB){
       var options = {
       bodyA:bodyA,
       bodyB:bodyB,
       length:100,
       stiffness:0.04 
}

this.slingShot = Matter.Constraint.create(options);
World.add(world,this.slingShot)
    }

display(){

var pointA = this.slingShot.bodyA.position;
var pointB = this.slingShot.bodyB.position;
strokeWeight(4);
line (pointA.x,pointA.y,pointB.x,pointB.y);
}
}