var bg;
var greensprite,redsprite,yellowsprite,bluesprite;
var gsSound,rsSound,ysSound,bsSound;

function preload(){
  gsSound=loadSound("Oops.mp3");
  rsSound=loadSound("Yeah.mp3");
  ysSound=loadSound("OH NO.mp3");
  bsSound=loadSound("Huh.mp3");
}

function setup(){
    createCanvas(400,400);
 bg=createSprite(200,200,400,400);
 bg.shapeColor="black"
 bg.scale=3

  greensprite = createSprite(50,350,100, 20);
  greensprite.shapeColor="green"

  redsprite = createSprite(150, 350, 100, 20);
  redsprite.shapeColor="red"

  yellowsprite = createSprite(250, 350,100, 20);
  yellowsprite.shapeColor="yellow"

  bluesprite = createSprite(350, 350,100, 20);
  bluesprite.shapeColor="blue"


  
  
 bouncingsprite=createSprite(200,200,15,15);
  bouncingsprite.shapeColor="white"
 bouncingsprite.velocityY=3;

  
  
}

function draw() {

    background(255);
  
    
    if(bouncingsprite.x-greensprite.x < bouncingsprite.height/2+greensprite.height/2 && greensprite.x-bouncingsprite.x < bouncingsprite.height/2+greensprite.height/2 ){
      bouncingsprite.shapeColor="green"
      gsSound.play();
    }
    
    
    if(bouncingsprite.x-redsprite.x < bouncingsprite.height/2+redsprite.height/2 && redsprite.x-bouncingsprite.x < bouncingsprite.height/2+redsprite.height/2 ){
      bouncingsprite.shapeColor="red"
      rsSound.play();
    }
   
    
    if(bouncingsprite.x-yellowsprite.x < bouncingsprite.height/2+yellowsprite.height/2 && yellowsprite.x-bouncingsprite.x < bouncingsprite.height/2+yellowsprite.height/2 ){
      bouncingsprite.shapeColor="yellow"
      ysSound.play();
    }
    
    
    if(bouncingsprite.x-bluesprite.x < bouncingsprite.height/2+bluesprite.height/2 && bluesprite.x-bouncingsprite.x < bouncingsprite.height/2+bluesprite.height/2 ){
      bouncingsprite.shapeColor="blue"
      bsSound.play();
    }
    bounceoff(bouncingsprite,greensprite);
    if(isTouching(bouncingsprite,greensprite))
    {
      bouncingsprite.shapeColor = "red";
      greensprite.shapeColor = "red";
    }else{
      bouncingsprite.shapeColor = "green";
      greensprite.shapeColor = "green";
    }
    bounceoff(bouncingsprite,redsprite);
    if(isTouching(bouncingsprite,redsprite))
    {
      bouncingsprite.shapeColor = "red";
      redsprite.shapeColor = "red";
    }else{
      bouncingsprite.shapeColor = "green";
      redsprite.shapeColor = "green";
    }
    bounceoff(bouncingsprite,yellowsprite);
    if(isTouching(bouncingsprite,yellowsprite))
    {
      bouncingsprite.shapeColor = "red";
      yellowsprite.shapeColor = "red";
    }else{
      bouncingsprite.shapeColor = "green";
      yellowsprite.shapeColor = "green";
    }
    bounceoff(bouncingsprite,bluesprite);
    if(isTouching(bouncingsprite,bluesprite))
    {
      bouncingsprite.shapeColor = "red";
      bluesprite.shapeColor = "red";
    }else{
      bouncingsprite.shapeColor = "green";
      bluesprite.shapeColor = "green";
    }
  drawSprites();
}
