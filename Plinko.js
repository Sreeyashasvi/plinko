class plinko{

    constructor(x , y){
        var plinko_options={
            restitution:0.8,
            friction:1.0,
            isStatic : true
          }
          this.r=r;
          this.body = Bodies.circle(x, y, r, plinko_options);
          World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
         var angle = this.body.angle;
          push(); 
          translate(pos.x, pos.y);
           rotate(angle);
            imageMode(CENTER); 
            noStroke(); fill("white"); 
            ellipseMode(RADIUS);
             ellipse(0,0,this.r,this.r);
              pop(); }

          
    
    }
