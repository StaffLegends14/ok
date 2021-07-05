const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,MightyBase,mightybaseplate,bruh,lul;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
MightyBase = new Ground(width/4,height/2,width/4,height/4);
mightybaseplate = new Ground(width/1.3,height/2,width/4,height/4);
bruh = new MightyPlayer(width/1.3,height/2,width/4,height/4);
lul = new MightyPlayer(width/4,height/2,width/4,height/4);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
    MightyBase.show();
    mightybaseplate.show();
   //display Player and computerplayer
   bruh.diskall();
   lul.diskall();

}
