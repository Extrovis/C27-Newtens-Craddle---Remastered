class Roof{
    constructor(x, y){
        var properties = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 800, 10, properties);

        World.add(world, this.body);
    }

    display(){

        var groundPos = this.body.position;

        push();

        translate(groundPos.x, groundPos.y);

        rectMode(CENTER);
        
        fill("black");
        rect(0, 0, 400, 30);

        pop();
    }
}