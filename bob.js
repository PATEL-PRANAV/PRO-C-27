class bob {
    constructor(x, y,radius) {
        var options = {
            isstatic:true,
            restitution:0,
            friction:0,
            density:0
         }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke(0);
      fill("pink");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  