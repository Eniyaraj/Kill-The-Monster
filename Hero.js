class Hero{
    constructor(x, y,r) {
      var options = {
          'density':2,
          'frictionAir':0.005
      };
      this.x = x;
      this.y = y;
      this.r = r;
      this.image = loadImage("Superhero-01.png");
      this.body = Bodies.circle(this.x, this.y, (this.r)/4, options)
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0,this.radius*2, this.radius*2);
      pop();
    }
  };