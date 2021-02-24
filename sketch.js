const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//creating variables
var world, engine;
var dustbin1, dustbin2, dustbin3;
var paper;
var ground;
var bg;
var dustbinImage;

function preload() {
	//loading the image
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	//creating a canvas
	createCanvas(1300, 700);

	//creating an engine and adding it to world
	engine = Engine.create();
	world = engine.world;

	//running the engine
	Engine.run(engine);

	//cerating the objects
	dustbin1 = new Dustbin(900, 463, 50, 200);
	dustbin2 = new Dustbin(1040, 490, 50, 200);
	dustbin3 = new Dustbin(1000.5, 583, 260, 50);
	ground = new Ground(200, 580, 3000, 15);
	paper = new Paper(65, 540, 70);

}

function draw() {
	//updating the engine
	Engine.update(engine);
	//rect mode - center
	rectMode(CENTER);
	//changing background to light grey [200]
	background(200);

	//displaying the objects
	ground.display();
	dustbin1.display();
	dustbin2.display()
	dustbin3.display();
	//drawing the image
	image(dustbinImage,1000,430,200,238);
	paper.display();
}

//function to land the paper in the dustbin when up arrow is pressed
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 1035, y: -990 });
	}
} 