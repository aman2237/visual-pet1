var dog ,sadDog,happyDog;


function preload()
{
	sadDog=loadImage("Image/dogImg.png");
  happyDog=loadImage("Image/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15
  
}


function draw() {  
background (46,139,87);

fill(255,255,254);
textSize(15);

drawSprites();
  

}



