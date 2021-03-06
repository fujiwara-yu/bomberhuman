import { GameData } from "bomberhuman";

const canvas = document.getElementById("bomberhuman-canvas");
const game_data = GameData.new();
canvas.width = 1200; //game_data.width();
canvas.height = 1000; //game_data.height();

let ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(0, 0, canvas.width, canvas.height);


const resources = () => {
  let res = {
    player0: document.createElement('img'),
    player1: document.createElement('img'),
    player2: document.createElement('img'),
    player3: document.createElement('img'),
    bomb: document.createElement('img'),
    uni_bomb: document.createElement('img'),
    gomu_bomb: document.createElement('img'),
    fire: document.createElement('img'),
    bomb_item: document.createElement('img'),
    fire_item: document.createElement('img'),
    speed_item: document.createElement('img'),
    kick_item: document.createElement('img'),
    dokuro_item: document.createElement('img'),
    bomb_type_item: document.createElement('img'),
    block: document.createElement('img'),
    softblock: document.createElement('img'),
    item_frame: document.createElement('img'),
    zero: document.createElement('img'),
    one: document.createElement('img'),
    two: document.createElement('img'),
    three: document.createElement('img'),
    four: document.createElement('img'),
    five: document.createElement('img'),
    six: document.createElement('img'),
    seven: document.createElement('img'),
    eight: document.createElement('img'),
    nine: document.createElement('img'),
  }

  res.player0.width = 50;
  res.player0.height = 50;
  res.player0.src = "image/player1.png";
  res.player1.width = 50;
  res.player1.height = 50;
  res.player1.src = "image/player2.png";
  res.player2.width = 50;
  res.player2.height = 50;
  res.player2.src = "image/player3.png";
  res.player3.width = 50;
  res.player3.height = 50;
  res.player3.src = "image/player4.png";
  res.bomb.width = 50;
  res.bomb.height = 50;
  res.bomb.src = "image/bomb.png";
  res.uni_bomb.width = 50;
  res.uni_bomb.height = 50;
  res.uni_bomb.src = "image/uni_bomb.png";
  res.gomu_bomb.width = 50;
  res.gomu_bomb.height = 50;
  res.gomu_bomb.src = "image/gomu_bomb.png";
  res.fire.width = 50;
  res.fire.height = 50;
  res.fire.src = "image/fire.png";
  res.bomb_item.width = 50;
  res.bomb_item.height = 50;
  res.bomb_item.src = "image/bomb_item.png";
  res.fire_item.width = 50;
  res.fire_item.height = 50;
  res.fire_item.src = "image/fire_item.png";
  res.speed_item.width = 50;
  res.speed_item.height = 50;
  res.speed_item.src = "image/speed_item.png";
  res.kick_item.width = 50;
  res.kick_item.height = 50;
  res.kick_item.src = "image/kick_item.png";
  res.dokuro_item.width = 50;
  res.dokuro_item.height = 50;
  res.dokuro_item.src = "image/dokuro_item.png";
  res.bomb_type_item.width = 50;
  res.bomb_type_item.height = 50;
  res.bomb_type_item.src = "image/bomb_type_item.png";
  res.block.width = 50;
  res.block.height = 50;
  res.block.src = "image/block.jpg";
  res.softblock.width = 50;
  res.softblock.height = 50;
  res.softblock.src = "image/soft_block.png";
  res.item_frame.width = 50;
  res.item_frame.height = 50;
  res.item_frame.src = "image/item_frame.jpg";
  
  res.one.width = 40;
  res.one.height = 50;
  res.one.src = "image/p1.gif";
  res.two.width = 40;
  res.two.height = 50;
  res.two.src = "image/p2.gif";
  res.three.width = 40;
  res.three.height = 50;
  res.three.src = "image/p3.gif";
  res.four.width = 40;
  res.four.height = 50;
  res.four.src = "image/p4.gif";
  res.five.width = 40;
  res.five.height = 50;
  res.five.src = "image/p5.gif";
  res.six.width = 40;
  res.six.height = 50;
  res.six.src = "image/p6.gif";
  res.seven.width = 40;
  res.seven.height = 50;
  res.seven.src = "image/p7.gif";
  res.eight.width = 40;
  res.eight.height = 50;
  res.eight.src = "image/p8.gif";
  res.nine.width = 40;
  res.nine.height = 50;
  res.nine.src = "image/p9.gif";
  res.zero.width = 40;
  res.zero.height = 50;
  res.zero.src = "image/p0.gif";

  return res;
}

var myaudio = new Audio('audio/bgm.mp3');

function play_bgm() {
  myaudio.autoplay = true;
  myaudio.play();
}

function stop_bgm() {
  myaudio.pause();
}

let clear_screen = () => {
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}


let result_menu_screen = (winner) => {
  ctx.lineWidth = 2;
  ctx.fillStyle = "black";
  ctx.font = "100px cursive";
  ctx.textBaseline = 'center';
	ctx.textAlign = 'center';
  let x = canvas.width / 2
  let y = canvas.height / 4
  ctx.fillText("END", x, y);
  if (winner == 0) {
    ctx.fillText("Draw", x, y+100);
  } else {
    ctx.fillText(String(winner)+"Pwin", x, y+100);
  }
}

function draw_player(x, y, angle, player_id) {
  ctx.translate(x, y);
  switch(player_id) {
    case 0:
      ctx.translate(res.player0.width/2,res.player0.height/2);
      ctx.rotate(angle);
      ctx.translate(-res.player0.width/2,-res.player0.height/2);
      ctx.drawImage(res.player0, 0, 0, res.player0.width, res.player0.height);
      break;
    case 1:
      ctx.translate(res.player1.width/2,res.player1.height/2);
      ctx.rotate(angle);
      ctx.translate(-res.player1.width/2,-res.player1.height/2);
      ctx.drawImage(res.player1, 0, 0, res.player1.width, res.player1.height);
      break;
    case 2:
      ctx.translate(res.player2.width/2,res.player2.height/2);
      ctx.rotate(angle);
      ctx.translate(-res.player2.width/2,-res.player1.height/2);
      ctx.drawImage(res.player2, 0, 0, res.player2.width, res.player2.height);
      break;
    case 3:
      ctx.translate(res.player3.width/2,res.player3.height/2);
      ctx.rotate(angle);
      ctx.translate(-res.player3.width/2,-res.player3.height/2);
      ctx.drawImage(res.player3, 0, 0, res.player1.width, res.player3.height);
      break;
    default:
      break;
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  ctx.fillStyle = "black";
}

function draw_bomb(x, y, type) {
  if (type == 0) {
    ctx.drawImage(res.bomb, x, y, res.bomb.width, res.bomb.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "black";
  } else if (type == 1) {
    ctx.drawImage(res.uni_bomb, x, y, res.uni_bomb.width, res.uni_bomb.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "black";
  } else if (type == 2) {
    ctx.drawImage(res.gomu_bomb, x, y, res.gomu_bomb.width, res.gomu_bomb.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "black";
  }
}

function draw_fire(x, y) {
  ctx.drawImage(res.fire, x, y, res.fire.width, res.fire.height);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "black";
}

function draw_item(x, y, type) {
    ctx.drawImage(res.item_frame, x, y, res.item_frame.width, res.item_frame.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "black";
    switch (type) {
      case 1:
        ctx.drawImage(res.fire_item, x, y, res.fire_item.width, res.fire_item.height);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = "black";
        break;
      case 2:
        ctx.drawImage(res.bomb_item, x, y, res.bomb_item.width, res.bomb_item.height);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = "black";
        break;
      case 3:
        ctx.drawImage(res.speed_item, x, y, res.speed_item.width, res.speed_item.height);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = "black";
        break;
      case 4:
        ctx.drawImage(res.kick_item, x, y, res.kick_item.width, res.kick_item.height);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = "black";
        break;
      case 5:
        ctx.drawImage(res.bomb_type_item, x, y, res.bomb_type_item.width, res.bomb_type_item.height);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = "black";
        break;
      case 6:
        ctx.drawImage(res.gomu_bomb, x, y, res.gomu_bomb.width, res.gomu_bomb.height);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = "black";
        break;
      case 7:
        ctx.drawImage(res.dokuro_item, x, y, res.dokuro_item.width, res.dokuro_item.height);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = "black";
        break;
     default :
        break;
  }
}

function draw_block(x, y) {
  ctx.drawImage(res.block, x, y, res.block.width, res.block.height);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "black";
}

function draw_softblock(x, y) {
  ctx.drawImage(res.softblock, x, y, res.softblock.width, res.softblock.height);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "black";
}

function draw_number(x, y, number) {
  switch (number) {
    case 0:
      ctx.drawImage(res.zero, x, y, res.zero.width, res.zero.height);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = "black";
      break;
    case 1:
      ctx.drawImage(res.one, x, y, res.one.width, res.one.height);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = "black";
      break;
    case 2:
      ctx.drawImage(res.two, x, y, res.two.width, res.two.height);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = "black";
      break;
    case 3:
      ctx.drawImage(res.three, x, y, res.three.width, res.three.height);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = "black";
      break;
    case 4:
      ctx.drawImage(res.four, x, y, res.four.width, res.four.height);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = "black";
      break;
    case 5:
      ctx.drawImage(res.five, x, y, res.five.width, res.five.height);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = "black";
      break;
    case 6:
      ctx.drawImage(res.six, x, y, res.six.width, res.six.height);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = "black";
      break;
    case 7:
      ctx.drawImage(res.seven, x, y, res.seven.width, res.seven.height);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = "black";
      break;
    case 8:
      ctx.drawImage(res.eight, x, y, res.eight.width, res.eight.height);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = "black";
      break;
    case 9:
      ctx.drawImage(res.nine, x, y, res.nine.width, res.nine.height);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = "black";
      break;
    default:
      break;
   }
}

function draw_hurry_up() {
  ctx.lineWidth = 2;
  ctx.fillStyle = "red";
  ctx.font = "100px cursive";
  ctx.textBaseline = 'center';
	ctx.textAlign = 'center';
  let x = 700 / 2
  let y = 600 / 2
  ctx.fillText("HURRY UP", x, y);
}

let res = resources();

let animationId = null;

// Game loop
let start = null;
let prevTimestamp = null;
let drawAndUpdate = (timestamp) => {
  // Initialization
  if (!prevTimestamp) {
    start = timestamp;
    prevTimestamp = timestamp;
    requestAnimationFrame(drawAndUpdate);
    return;
  }

  if (game_data.is_end()) {
    let winner = game_data.get_winner();
    stop_bgm();
    result_menu_screen(winner);
    //alert("Game End");
    return;
  }

  // Update and draw
  let progress = (timestamp - prevTimestamp) / 1000;
  game_data.update(progress);
  clear_screen();

  let bomb_num = game_data.get_bomb_num();
  var b_x = [];
  var b_y = [];
  var b_type = [];
  for(let i=0; i<bomb_num; i++) {
    b_x[i] = game_data.x(i, "bomb");
    b_y[i] = game_data.y(i, "bomb");
    b_type[i] = game_data.what_type(i, "bomb");
    draw_bomb(b_x[i], b_y[i], b_type[i]);
  }

  let fire_num = game_data.get_fire_num();
  var f_x = [];
  var f_y = [];
  for(let i=0; i<fire_num; i++) {
    f_x[i] = game_data.x(i, "fire");
    f_y[i] = game_data.y(i, "fire");
    draw_fire(f_x[i], f_y[i]);
  }

  let item_num = game_data.get_item_num();
  var i_x = [];
  var i_y = [];
  var i_type = [];
  for(let i=0; i<item_num; i++) {
    i_x[i] = game_data.x(i, "item");
    i_y[i] = game_data.y(i, "item");
    i_type[i] = game_data.what_type(i, "item");
    draw_item(i_x[i], i_y[i], i_type[i]);
  }

  let softblock_num = game_data.get_softblock_num();
  var sbl_x = [];
  var sbl_y = [];
  for(let i=0; i<softblock_num; i++) {
    sbl_x[i] = game_data.x(i, "softblock");
    sbl_y[i] = game_data.y(i, "softblock");
    draw_softblock(sbl_x[i], sbl_y[i]);
  }

  let player_num = game_data.get_player_num();
  var p_x = [];
  var p_y = [];
  var angle = [];
  for(let i=0; i<player_num; i++) {
    p_x[i] = game_data.x(i, "player");
    p_y[i] = game_data.y(i, "player");
    angle[i] = game_data.angle(i);
    if (p_x[i] >= 0) {
      draw_player(p_x[i], p_y[i], angle[i], i);
    }
  }

  let block_num = game_data.get_block_num();
  var bl_x = [];
  var bl_y = [];
  for(let i=0; i<block_num; i++) {
    bl_x[i] = game_data.x(i, "block");
    bl_y[i] = game_data.y(i, "block");
    draw_block(bl_x[i], bl_y[i]);
  }


  let fire_item_num = game_data.get_fire_item_num();
  for (let i=0; i<fire_item_num; i++) {
    draw_item(800+i*25, 100, 1);
  }
  let bomb_item_num = game_data.get_bomb_item_num();
  for (let i=0; i<bomb_item_num; i++) {
    draw_item(800+i*25, 150, 2);
  }
  let speed_item_num = game_data.get_speed_item_num();
  for (let i=0; i<speed_item_num; i++) {
    draw_item(800+i*25, 200, 3);
  }
  let kick_item_num = game_data.get_kick_item_num();
  for (let i=0; i<kick_item_num; i++) {
    draw_item(800+i*25, 250, 4);
  }
  let uni_item_num = game_data.get_uni_item_num();
  for (let i=0; i<uni_item_num; i++) {
    draw_item(800+i*25, 300, 5);
  }
  
  let time = game_data.get_time();
  if ((time < 31.75 && time > 31.5) || (time < 31.25 && time > 31) || (time < 30.75 && time > 30.5)){
    draw_hurry_up();
  }
  time = Math.floor(time);
  draw_number(800, 0, Math.floor(time/60));
  draw_number(850, 0, Math.floor((time-Math.floor(time/60)*60)/10));
  draw_number(890, 0, Math.floor((time-Math.floor(time/60)*60)%10));
  prevTimestamp = timestamp;
  requestAnimationFrame(drawAndUpdate);
};

const play = () => {
  drawAndUpdate();
}


var bgm_flag = false;
const processKey = (key, f) => {
  if (!bgm_flag) {
    play_bgm();
    bgm_flag=true;
  }
  switch (key) {
    case "ArrowLeft":
      game_data.buttons("left", f);
      break;
    case "ArrowRight":
      game_data.buttons("right", f);
      break;
    case "ArrowUp":
      game_data.buttons("up", f);
      break;
    case "ArrowDown":
      game_data.buttons("down", f);
      break;
    case " ":
      game_data.buttons("space", f);
      break;
    case ".":
      game_data.buttons(".", f);
      break;
    case "w":
      game_data.buttons("w", f);
      break;
    case "s":
      game_data.buttons("s", f);
      break;
    case "a":
      game_data.buttons("a", f);
      break;
    case "d":
      game_data.buttons("d", f);
      break;
    case "x":
      game_data.buttons("x", f);
      break;
    case "q":
      game_data.buttons("q", f);
      break;
    case "t":
      game_data.buttons("t", f);
      break;
    case "g":
      game_data.buttons("g", f);
      break;
    case "f":
      game_data.buttons("f", f);
      break;
    case "h":
      game_data.buttons("h", f);
      break;
    case "b":
      game_data.buttons("b", f);
      break;
    case "r":
      game_data.buttons("r", f);
      break;
    case "i":
      game_data.buttons("i", f);
      break;
    case "k":
      game_data.buttons("k", f);
      break;
    case "j":
      game_data.buttons("j", f);
      break;
    case "l":
      game_data.buttons("l", f);
      break;
    case ",":
      game_data.buttons(",", f);
      break;
    case "u":
      game_data.buttons("u", f);
      break;
  }
}


document.addEventListener('keydown', e => processKey(e.key, 1));
document.addEventListener('keyup', e => processKey(e.key, 0));

play();
