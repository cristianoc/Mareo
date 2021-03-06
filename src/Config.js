


function randomSeed(param) {
  return 34;
}

function levelWidth(level) {
  switch (level) {
    case 1 :
        return 800;
    case 2 :
        return 1200;
    case 3 :
        return 2400;
    case 4 :
        return 3500;
    case 5 :
        return 4500;
    case 6 :
        return 6000;
    case 7 :
        return 8000;
    case 8 :
        return 10000;
    case 9 :
        return 12000;
    default:
      return 1500 * level;
  }
}

function levelHeight(param) {
  return 256;
}

function enemyDensity(level) {
  switch (level) {
    case 1 :
    case 2 :
    case 3 :
        return 20;
    case 4 :
    case 5 :
        return 15;
    case 6 :
        return 10;
    case 7 :
    case 8 :
        return 5;
    case 9 :
        return 4;
    default:
      return 3;
  }
}

var images = [
  "blocks.png",
  "items.png",
  "enemies.png",
  "mario-small.png"
];

function blockw(level) {
  return levelWidth(level) / 16;
}

function blockh(level) {
  return 256 / 16 - 1;
}

function mapDim(level) {
  return [
          levelWidth(level),
          256
        ];
}

var canvasId = "canvas";

var delayWhenFinished = 300;

var restartAfter = 5;

var spritesDir = "sprites/";

var scale = 1.5;

var friction = 0.9;

var gravity = 0.2;

var maxYVel = 4.5;

var playerSpeed = 2.8;

var playerJump = 5.7;

var playerMaxJump = -6;

var dampenJump = 4;

var invuln = 60;

export {
  randomSeed ,
  levelWidth ,
  levelHeight ,
  enemyDensity ,
  canvasId ,
  delayWhenFinished ,
  images ,
  blockw ,
  blockh ,
  mapDim ,
  restartAfter ,
  spritesDir ,
  scale ,
  friction ,
  gravity ,
  maxYVel ,
  playerSpeed ,
  playerJump ,
  playerMaxJump ,
  dampenJump ,
  invuln ,
  
}
/* No side effect */
