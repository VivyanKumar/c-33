class Slingshot {
    constructor(bodyA,pointB) {
        var slingshot_options={
                bodyA : bodyA,
                pointB : pointB,
                length : 20,
                stiffness : 0.1
        };

        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB; // {x : 100, y:50}
        this.constraint = Constraint.create(slingshot_options);
        World.add(world,this.constraint);
    }
        display(){
            imageMode(CENTER);
            image(this.sling1,250,167); 
            imageMode(CENTER);
            image(this.sling2,225,125);
            if(this.constraint.bodyA){
                var pointA = this.constraint.bodyA.position;
                var pointB = this.pointB;
                if(pointA.x<260){
                    strokeWeight(4);
                    stroke("#301608");
                    line(pointA.x-10,pointA.y,pointB.x+10,pointB.y);
                    line(pointA.x-15,pointA.y,pointB.x-30,pointB.y);
                    image(this.sling3,pointA.x-15,pointA.y+5,15,30);
                }
                else{
                    strokeWeight(4);
                    stroke("#301608");
                    line(pointA.x+10,pointA.y,pointB.x+10,pointB.y);
                    line(pointA.x+15,pointA.y,pointB.x-30,pointB.y);
                    image(this.sling3,pointA.x+25,pointA.y+5,15,30);
                }
            }
        }
        release(){
            this.constraint.bodyA = null;
        }
        attach(body){
            this.constraint.bodyA = body;
        }
}