class Box extends Baseclass{
    constructor(x,y,width,height){
        super(x,y,width,height); // Executes the constructor in baseclass

        // override image of baseclass
        this.image =loadImage("sprites/wood1.png")
    }
}
