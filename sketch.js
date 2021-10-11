var axeI;
var pickaxeI;
var swordI;
var SteveaxeI;
var StevepickaxeI;
var SteveswordI;
var StevestandingI;
var BeafI;
var BreadI;
var ChickenI;
var porchchopI;
var AppleI;
var WitchI;
var ZombieI;
var SkeletonI;
var CreeperI;
var ChestI;
var TeasureI; 
var goldI; 
var ironI;
var DiamondI;
var bgnI ;
var bgdI;
var Beaf;
var Bread; 
var Chicken;
var Porchchop;
var Apple; 
var Steve;
var SteveMovingI;
var Pickaxebtn,Axebtn,Swordbtn;


function preload(){
    axeI =  loadImage("./Images/axe.png");
    pickaxeI = loadImage("./Images/Pickaxe.png");
    swordI = loadImage("./Images/Sword.png");
    StevestandingI = loadAnimation("./Images/StandingSteve.png");
    SteveMovingI = loadAnimation("./Images/Steve1.png","./Images/Steve2.png");
    StevepickaxeI = loadAnimation("./Images/PickaxeSteve.png");
    SteveswordI = loadAnimation("./Images/swordSteve.png");
    SteveaxeI = loadAnimation("./Images/axeSteve.png");
    BeafI = loadImage("./Images/Beaf.png");
    BreadI = loadImage("./Images/bread.png");
    ChickenI = loadImage("./Images/Chicken.png");
    porchchopI = loadImage("./Images/porchchop.png");
    AppleI = loadImage("./Images/Apple.png");
    WitchI = loadImage("./Images/Witch.png");
    ZombieI = loadImage("./Images/Zombie.png");
    SkeletonI = loadImage("./Images/Skeleton.png");
    CreeperI = loadImage("./Images/Creeper.png");
    ChestI = loadImage("./Images/chests.png");
    TeasureI = loadImage("./Images/ChestTeasure.png");
    goldI = loadImage("./Images/gold.png");
    ironI = loadImage("./Images/iron.png");
    DiamondI = loadImage("./Images/Diamond.png");
    bgnI = loadImage("./Images/Night.jpg");
    bgdI = loadImage("./Images/Day.jpg");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    Beaf = new Group();
    Bread = new Group();
    Chicken = new Group();
    Porchchop = new Group();
    Apple = new Group();

    Steve = createSprite(900,height-150)
    Steve.x = 900;
    Steve.addAnimation("moving Steve",SteveMovingI);
    Steve.addAnimation("standing Steve",StevestandingI);

    Pickaxebg = createSprite(width-100,70);
    
    Pickaxebtn = createSprite(width-100,70);
    Pickaxebtn.addImage("Pickaxe",pickaxeI);
    Pickaxebtn.scale = 0.4;

    Swordbg = createSprite(width-100,170);

    Swordbtn = createSprite(width-100,170);
    Swordbtn.addImage("Sword",swordI);
    Swordbtn.scale = 0.4;
    
    Axebg = createSprite(width-100,270);

    Axebtn = createSprite(width-100,270);
    Axebtn.addImage("Axe",axeI);
    Axebtn.scale = 0.4;


}

function draw(){
    background(bgdI);
    console.log("Hi")
    //bgdI.velocityX = -(6 + 3*10);
    addSprites(Beaf,2,BeafI,0.3);
    // addSprites()
    if(keyDown(UP_ARROW)){
      Steve.x = Steve.x-4
      console.log(Steve.x); 
      Steve.changeAnimation("moving Steve",SteveMovingI);
      
    }
    // if(keyIsUp(UP_ARROW)){
    //   Steve.changeAnimation("standing Steve",StevestandingI)
      
    // }
    drawSprites();
}


function addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions=[]){
  var count = 0; 

    for (var i=0; i<numberOfSprites; i++){
      if (count<5){
        var x, y;

        if (positions.length > 0) {
          x = positions[i].x;
          y = positions[i].y;
          spriteImage = positions[i].image;
        } else {
          x = random(100, width-100);
          y = random(100, height - 100);
        }
        var sprite = createSprite(x, y);
        sprite.addImage("sprite", spriteImage);

        sprite.scale = scale;
        spriteGroup.add(sprite);
        count++
      }
      else{
        break;
      }
      }
      
  
}
