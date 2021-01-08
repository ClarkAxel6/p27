class Rope{
    constructor(body1, body2, offsetX, offsetY){
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 1.0,
            length: 450,
            pointB: {x: this.offsetX, y: this.offsetY}
        }
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        this.rope = Constraint.create(options);
        World.add(world, this.rope); 
        
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(3);
        stroke(255);
        line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y + this.offsetY);
    }
}