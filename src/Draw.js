

import * as Load from "./Load.js";

function renderBbox(sprite, posx, posy) {
  var match = sprite.params.bboxOffset;
  var match$1 = sprite.params.bboxSize;
  var context = Load.getContext(undefined);
  context.strokeStyle = "#FF0000";
  return context.strokeRect(posx + match[0], posy + match[1], match$1[0], match$1[1]);
}

function render(sprite, posx, posy) {
  var match = sprite.params.srcOffset;
  var match$1 = sprite.params.frameSize;
  var sw = match$1[0];
  var match$2 = sprite.params.frameSize;
  var sx = match[0] + sprite.frame * sw;
  var context = Load.getContext(undefined);
  return context.drawImage(sprite.img, sx, match[1], sw, match$1[1], posx, posy, match$2[0], match$2[1]);
}

function drawBgd(bgd, off_x) {
  render(bgd, -off_x, 0);
  return render(bgd, bgd.params.frameSize[0] - off_x, 0);
}

function clearCanvas(param) {
  var canvas = Load.getCanvas(undefined);
  var context = Load.getContext(undefined);
  var cwidth = canvas.width;
  var cheight = canvas.height;
  return context.clearRect(0, 0, cwidth, cheight);
}

function hud(score, coins) {
  var score_string = String(score);
  var coin_string = String(coins);
  var context = Load.getContext(undefined);
  context.font = "10px 'Press Start 2P'";
  context.fillText("Score: " + score_string, Load.getCanvas(undefined).width - 140, 18);
  return context.fillText("Coins: " + coin_string, 120, 18);
}

function fps(fps_val) {
  var fps_str = String(fps_val | 0);
  return Load.getContext(undefined).fillText(fps_str, 10, 18);
}

function gameWon(param) {
  var ctx = Load.getContext(undefined);
  ctx.rect(0, 0, 512, 512);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.fillStyle = "white";
  ctx.font = "20px 'Press Start 2P'";
  return ctx.fillText("You win!", 180, 128);
}

function gameLost(elapsed) {
  var ctx = Load.getContext(undefined);
  ctx.rect(0, 0, 512, 512);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.fillStyle = "white";
  ctx.font = "20px 'Press Start 2P'";
  ctx.fillText("GAME OVER. You lose! ", 60, 100);
  return ctx.fillText(String(elapsed), 230, 150);
}

export {
  renderBbox ,
  render ,
  drawBgd ,
  clearCanvas ,
  hud ,
  fps ,
  gameWon ,
  gameLost ,
  
}
/* No side effect */
