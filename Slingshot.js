class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body)
    {
        this.sling.bodyA = body;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x, pointA.y, pointB.x + 20, pointB.y);
            if(pointA.x<=200){
            image(this.sling3,pointA.x-20,pointA.y-20,15,30);
            }
            else
            {
                image(this.sling3,pointA.x+20,pointA.y-20,15,30);
            }
        }
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        
    }
    
}