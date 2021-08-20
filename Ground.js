class Ground {
    constructor(x,y,width,height){
        var option={
          isStatic:true,
            'restitution' : 0.3,
            'friction': 0.5,
           ' density': 1.2
            
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
    }
    
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        fill("Yellow")
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
         
    }


    
}