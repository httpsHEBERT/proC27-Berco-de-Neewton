
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var world, música, fundo, plataformaX, plataforma1, plataforma2;
var esfera1, esfera2, esfera3, esfera4, esfera5;
var corda1, corda2, corda3, corda4, corda5;
var w, wI, seta, setaI;

function preload(){

	música = loadSound("Sound/música.mp3");
	fundo = loadImage("Images/fundo.jpg");
	setaI = loadImage("Images/seta.png");
	wI = loadImage("Images/w.png");
}

function setup(){

	createCanvas(windowWidth, windowHeight-4);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	plataformaX = new PlataformaX(width/2, height-height+53, 28, 108);
	plataforma1 = new Plataforma(width/2, height-height+55, 30, 110);
	plataforma2 = new Plataforma(width/2, height-height+100, 500, 30);

	esfera1 = new Esfera(width/2-230, height/2+120, 100);
	esfera2 = new Esfera(width/2-115, height/2+120, 100);
	esfera3 = new Esfera(width/2, height/2+120, 100);
	esfera4 = new Esfera(width/2+115, height/2+120, 100);
	esfera5 = new Esfera(width/2+230, height/2+120, 100);
	
	corda1 = new Corda(esfera1.body, plataforma2.body, -230, 0);
	corda2 = new Corda(esfera2.body, plataforma2.body, -115, 0);
	corda3 = new Corda(esfera3.body, plataforma2.body, 0, 0);
	corda4 = new Corda(esfera4.body, plataforma2.body, +115, 0);
	corda5 = new Corda(esfera5.body, plataforma2.body, 230, 0);

	seta = createSprite(width-150, height/2);
	seta.addImage(setaI);
	seta.scale = 0.2;

	w = createSprite(width-width+150, height/2);
	w.addImage(wI);
	w.scale = 0.2;
	
	música.setVolume(0.8);
	música.loop();

	Engine.run(engine);
}


function draw(){

	background(fundo);
	drawSprites();
	display();
	subir();
}

function display(){

	corda1.display();
	corda2.display();
	corda3.display();
	corda4.display();
	corda5.display();
	esfera1.display();
	esfera2.display();
	esfera3.display();
	esfera4.display();
	esfera5.display();
	plataforma1.display();
	plataforma2.display();
	plataformaX.display();
}

function subir(){

	if(keyDown("w")){
		Matter.Body.applyForce(esfera1.body, esfera1.body.position, {x:-10, y:0});
	}

	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(esfera5.body, esfera5.body.position, {x:10, y:0});
	}
}