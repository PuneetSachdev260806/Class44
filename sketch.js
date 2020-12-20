var bg1, bg2, bg3, bg4, bgmain;

var r1, r2, r3, r4, r5;

var button;

var gameState = 0;

function setup() {
  createCanvas(1200,800);
  button = createButton('START');
  button.position(700,600);

  
}

function preload() {
  bg1 = loadImage("images/bg1.jpg");
  bg2 = loadImage("images/bg2.jpg");
  bg3 = loadImage("images/bg3.jpg");
  bg4 = loadImage("images/bg4.jpg");
  r1 = loadImage("images/r1.png");
  r2 = loadImage("images/r2.png");
  //r3 = createImg("r3.gif");
  r3 = loadGif("images/r3.gif");
  r4 = loadImage("images/r4.png");
  r5 = loadImage("images/r5.png");
  bgmain = loadImage("images/bgmain.jpg");
}
function draw() {
  if (gameState===0){
  
  background(bgmain); 
  //r3.position(200,180);
  // image(r3, 120, 140);
  textSize(16);
  text("Space Rocketzz!", 570,200);
  // add story here

  r1s = createSprite(200,450);
  r2s = createSprite(400,450);
  r3s = createSprite(600,450);
  r4s = createSprite(800,450);
  r5s = createSprite(1000,450);

  r1s.addImage(r1);
  r2s.addImage(r2);
  //r3s.addGif(r3);
  r4s.addImage(r4);
  r5s.addImage(r5);

  

  button.mousePressed(()=>{
   gameState = 1;
   
  });
}  if (gameState===1){
  button.hide();
  background(bg1);

}
  
  
  drawSprites();
}