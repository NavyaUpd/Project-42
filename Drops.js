class Drops{
    constructor(x,y){
        
        var options = {
            'setStatic': false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 2.5, options);
        World.add(world, this.body);
        this.x = x;
        this.y = y;
    }
    update(){
        if(this.body.position.y > 600){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:0});
        }
    }
    display(){
        var pos = this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y,5,5);

        /*if(this.body.position.y > 600){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:0});
        }*/

    }
}

/*class Drops{
    constructor() {
        var options = {
            'setStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.x = random(0,400);
        this.y = random(0,400);
        this.body = Bodies.circle(this.x, this.y, 2.5, options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,5,5);

        if(pos.y > 600){
            Matter.Body.setPosition(this.body,{x:this.x,y:0});
        }
      }
}*/