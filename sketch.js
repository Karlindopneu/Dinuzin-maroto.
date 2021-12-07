var trex, trex_running, trex_collided;
var ground, groundImage;
var cade_o_chao;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);

  //criar sprite trex
  trex = createSprite(50,160,20,50);
  cade_o_chao=createSprite(200,190,400,10);
cade_o_chao.visible=false;
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crriar sprite ground (chão)
  ground = createSprite(200,180,400,20);
  
  ground.addAnimation("chãzin geuado",groundImage);
  

  
  
}

function draw() {
  background(220);
ground.velocityX = -4;
  console.log(trex.y);

  //pular quando barra de espaço é pressionada
  if (keyDown("space")&& trex.y>=161.4){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  //impedir trex de cair
  trex.collide(cade_o_chao);

  drawSprites();
}