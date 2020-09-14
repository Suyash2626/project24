class Paper {
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.y=y;
        this.x=x;
        this.radius=R/2;
        Matter.Bodies.circle(x, y, radius, [options])
        World.add(world,this.body);
}
display() {
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipse(0,0,this.radius);
    strokeWeight(4);
    stroke("black");
    fill("purple");
    pop();

}

}