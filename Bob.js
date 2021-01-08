class Bob{
    constructor(x, y){
        var options = {
            isStatic: false,
            restitution: 2,
            friction: 0,
            density: 0.5
        }

        this.body = Bodies.circle(x, y, 35, options);
        World.add(world, this.body);
    }


    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill('green');
        ellipseMode(RADIUS);
        ellipse(0, 0, 35, 35);
        pop();
    }
}