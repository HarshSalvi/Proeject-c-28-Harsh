class Paper  {
    constructor(x,y,r){
        var option={
          isStatic:false,
            'restitution' : 0.3,
            'friction': 0.5,
           ' density': 1.2
            
        }
        this.body=Bodies.circle(x,y,r,option);
        World.add(world,this.body);
        
        
        this.r=r;
    }
    
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        fill("lightblue")
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
         
    }


    
}