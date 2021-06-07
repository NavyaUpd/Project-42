class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.Visibility1 = 255;
        this.Visibility2 = 0;
        World.add(world, this.umbrella)
        //load Image for BestMan
        this.bestman = loadImage("bat/Bestman-01.png");
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if(frameCount < 100){
        image(this.image,pos.x,pos.y+70,300,300);
        }
        else{
            
            push();
            this.Visibility1 = this.Visibility1 - 5;
            tint(255,this.Visibility1);
            image(this.image,pos.x,pos.y+70,300,300);
            World.remove(world,this.umbrella);
            pop();
            /*setTimeout(() => {  
                console.log("hello"); 
                image(this.bestman,pos.x,pos.y+70,300,300);
                
            }, 5000);
            clearTimeout();*/
            push();
            this.Visibility2 = this.Visibility2 + 5;
            tint(255,this.Visibility2);
            image(this.bestman,pos.x,pos.y+70,300,300);
            //World.remove(world,this.umbrella);
            pop();
            
        }
    }
}
