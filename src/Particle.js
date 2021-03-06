

import * as Sprite from "./Sprite.js";

function pairToXy(pair) {
  return {
          x: pair[0],
          y: pair[1]
        };
}

function makeParams(sprite, lifetime) {
  return {
          sprite: sprite,
          lifetime: lifetime
        };
}

function makeType(typ) {
  return {
          sprite: Sprite.makeParticle(typ),
          lifetime: typ === 2 || typ === 1 ? 300 : 30
        };
}

function make(velOpt, accOpt, partType, px, py) {
  var vel = velOpt !== undefined ? velOpt : [
      0,
      0
    ];
  var acc = accOpt !== undefined ? accOpt : [
      0,
      0
    ];
  var params = makeType(partType);
  var vel$1 = pairToXy(vel);
  var acc$1 = pairToXy(acc);
  return {
          params: params,
          px: px,
          py: py,
          vel: vel$1,
          acc: acc$1,
          kill: false,
          life: params.lifetime
        };
}

function makeScore(score, pos) {
  var t = score >= 801 ? (
      score >= 2001 ? (
          score !== 4000 ? (
              score !== 8000 ? /* Score100 */3 : /* Score8000 */10
            ) : /* Score4000 */9
        ) : (
          score !== 1000 ? (
              score >= 2000 ? /* Score2000 */8 : /* Score100 */3
            ) : /* Score1000 */7
        )
    ) : (
      score >= 201 ? (
          score !== 400 ? (
              score >= 800 ? /* Score800 */6 : /* Score100 */3
            ) : /* Score400 */5
        ) : (
          score !== 100 && score >= 200 ? /* Score200 */4 : /* Score100 */3
        )
    );
  var partial_arg = [
    0.5,
    -0.7
  ];
  return function (param) {
    return make(partial_arg, undefined, t, pos, param);
  };
}

function updateVel(part) {
  part.vel.x = part.vel.x + part.acc.x;
  part.vel.y = part.vel.y + part.acc.y;
  
}

function updatePos(part) {
  part.px = part.vel.x + part.px;
  part.py = part.vel.y + part.py;
  
}

function $$process(part) {
  part.life = part.life - 1 | 0;
  if (part.life === 0) {
    part.kill = true;
  }
  updateVel(part);
  return updatePos(part);
}

export {
  pairToXy ,
  makeParams ,
  makeType ,
  make ,
  makeScore ,
  updateVel ,
  updatePos ,
  $$process ,
  
}
/* Sprite Not a pure module */
