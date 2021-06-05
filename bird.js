class Bird extends Baseclass {
    constructor(x,y){
        super(x,y,50,50);

        this.image = loadImage("sprites/bird.png");
        this.smoke = loadImage("sprites/smoke.png");
        this.arrt = [];

    }

        display() {
            super.display();
            
            if(this.body.position.x>= 300) {
                var pos = [this.body.position.x, this.body.position.y]
                this.arrt.push(pos);
            }
           
                          // 0      1           2     
            // arrt = [[100,300],[120,280],[140,250]];[][]


            for(var i=0; i< this.arrt.length; i++){
                image(this.smoke,this.arrt[i][0],this.arrt[i][1]);
            }
        }
}
