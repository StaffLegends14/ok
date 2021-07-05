class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    this.Image = loadImage("base2.png");
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.Image,this.body.position.x,this.body.position.y,this.w,this.h);
    

  }
  
}