var bgImg, bg , bullet , score
function preload() {
  shooterStanding = loadImage("assets/shooter_1.png")
  shooterImg = loadImage("assets/shooter_3.png");
  bgImg = loadImage("assets/bg.jpeg")
zombieImg = loadImage("assets/zombie.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight)
  bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40)
  bg.addImage(bgImg)
  shooter = createSprite(200, displayHeight / 2)
  shooter.addImage(shooterImg)
  shooter.scale = 0.5
  zombieGroup = new Group();
  bulletGroup = new Group();
   score = 0;
}

function draw() {
  background("white")
  
  if (keyDown("UP_ARROW")) {
    shooter.y -= 30
  }
  if (keyDown("DOWN_ARROW")) {
    shooter.y += 30
  }
  if (keyDown("space")) {
    bullet = createSprite(200, shooter.y - 40, 20, 10)
    bullet.shapeColor = "red";
    bullet.velocityX = 10
    bulletGroup.add(bullet);

  }
  spawnZombie()

zombieGroup.isTouching(bulletGroup,bulletHit)

  drawSprites();

  textSize(20);
  fill("black");
  text("Score:"+ score,displayWidth-250,50)

}

function spawnZombie(){
if(frameCount%60===0){
  var zombie = createSprite(random(displayWidth/2,displayWidth-100),random(100,displayHeight-100))
  zombie.addImage(zombieImg)
  zombie.scale = 0.1
  zombieGroup.add(zombie);
  zombie.lifetime = 200

}

}
function bulletHit(zombie,bullet){
  zombie.destroy();
  bullet.destroy();
  score= score+2;
}