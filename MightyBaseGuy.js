class MightyPlayer
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    this.Image = loadImage("player.png");
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  diskall() {
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.Image,this.body.position.x,this.body.position.y - 160,this.w/2,this.h/2);
    

  }
  
}