
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,bob1,bob2,bob3;
var roof,rope1
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	box1 = new Box(300,760,40,40);
	box2 = new Box(300,730,40,40);
	box3 = new Box(300,700,40,40);
	box4 = new Box(300,670,40,40);
	box5 = new Box(300,640,40,40);
	box6 = new Box(300,610,40,40);
	box7 = new Box(300,580,40,40);
	box8 = new Box(300,550,40,40);
	box9 = new Box(300,530,40,40);
	box10 = new Box(300,500,40,40);
	box12 = new Box(300,470,40,40);
	box13 = new Box(300,440,40,40);
	box14 = new Box(300,410,40,40);
	box11 = new Box(300,380,40,40);


	box15 = new Box(350,760,40,40);
	box16 = new Box(350,730,40,40);
	box17 = new Box(350,700,40,40);
	box18 = new Box(350,670,40,40);
	box19 = new Box(350,640,40,40);
	box20 = new Box(350,610,40,40);
	box21 = new Box(350,580,40,40);
	box22 = new Box(350,550,40,40);
	box23 = new Box(350,530,40,40);
	box24 = new Box(350,500,40,40);
	box25 = new Box(350,470,40,40);
	box26 = new Box(350,440,40,40);
	box27 = new Box(350,410,40,40);
	box28 = new Box(350,380,40,40);
	
	box29 = new Box(400,760,40,40);
	box30 = new Box(400,730,40,40);
	box31 = new Box(400,700,40,40);
	box34 = new Box(400,670,40,40);
	box35 = new Box(400,640,40,40);
	box36 = new Box(400,610,40,40);
	box37 = new Box(400,580,40,40);
	box38 = new Box(400,550,40,40);
	box39 = new Box(400,530,40,40);
	box40 = new Box(400,500,40,40);
	box32 = new Box(400,470,40,40);
	box33 = new Box(400,440,40,40);
	box41 = new Box(400,410,40,40);
	box42 = new Box(400,380,40,40);





	bob1 = new Bob(200,550,60);

	

	rope1 = new Rope(bob1.body,{x:150,y:300})
	

	ground = new Ground(400,800,800,20);
   	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
	
  bob1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();
box31.display();
box32.display();
box33.display();
box34.display();
box35.display();
box36.display();
box37.display();
box38.display();
box39.display();
box40.display();
box41.display();
box42.display();


  rope1.display();
 
  ground.display();
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}

