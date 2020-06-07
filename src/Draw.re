open Sprite;

let renderBbox =
    (context: Html.canvasRenderingContext2D, sprite, (posx, posy)) => {
  let (bbox, bboy) = sprite.params.bboxOffset;
  let (bbsx, bbsy) = sprite.params.bboxSize;
  context.strokeStyle = "#FF0000";
  context.strokeRect(. posx +. bbox, posy +. bboy, bbsx, bbsy);
};

// Draws a sprite onto the canvas
let render = (context: Html.canvasRenderingContext2D, sprite, (posx, posy)) => {
  let (sx, sy) = sprite.params.srcOffset;
  let (sw, sh) = sprite.params.frameSize;
  let (dx, dy) = (posx, posy);
  let (dw, dh) = sprite.params.frameSize;
  let sx = sx +. float_of_int(sprite.frame^) *. sw;
  context.drawImage(. sprite.img, sx, sy, sw, sh, dx, dy, dw, dh);
};

// Draws two background images, which needs to be done because of the
// constantly changing viewport, which is always at most going to be
// between two background images.
let drawBgd = (context, bgd, off_x) => {
  render(context, bgd, (-. off_x, 0.));
  render(context, bgd, (fst(bgd.params.frameSize) -. off_x, 0.));
};

// Used for animation updating. Canvas is cleared each frame and redrawn.
let clearCanvas = (canvas: Html.canvasElement) => {
  let context = canvas.getContext(. "2d");
  let cwidth = float_of_int(canvas.width);
  let cheight = float_of_int(canvas.height);
  context.clearRect(. 0., 0., cwidth, cheight);
};

// Displays the text for score and coins.
let hud = (canvas: Html.canvasElement, score, coins) => {
  let score_string = string_of_int(score);
  let coin_string = string_of_int(coins);
  let context = canvas.Html.getContext(. "2d");
  context.font = "10px 'Press Start 2P'";
  context.fillText(.
    "Score: " ++ score_string,
    float_of_int(canvas.width) -. 140.,
    18.,
  );
  context.fillText(. "Coins: " ++ coin_string, 120., 18.);
};

// Displays the fps.
let fps = (context: Html.canvasRenderingContext2D, fps_val) => {
  let fps_str = int_of_float(fps_val) |> string_of_int;
  context.fillText(. fps_str, 10., 18.);
};

// gameWon displays a black screen when you finish a game.
let gameWon = (ctx: Html.canvasRenderingContext2D) => {
  ctx.rect(. 0., 0., 512., 512.);
  ctx.fillStyle = "black";
  ctx.fill(.);
  ctx.fillStyle = "white";
  ctx.font = "20px 'Press Start 2P'";
  ctx.fillText(. "You win!", 180., 128.);
};

// gameLost displays a black screen stating a loss to finish that level play.
let gameLost = (ctx: Html.canvasRenderingContext2D, elapsed) => {
  ctx.rect(. 0., 0., 512., 512.);
  ctx.fillStyle = "black";
  ctx.fill(.);
  ctx.fillStyle = "white";
  ctx.font = "20px 'Press Start 2P'";
  ctx.fillText(. "GAME OVER. You lose! ", 60., 100.);
  ctx.fillText(. string_of_int(elapsed), 230., 150.);
};