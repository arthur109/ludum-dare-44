var currentStatus = "lobby";
var currentLevel;
var tileSize = 50.0;
var windowRatio = 12/30;
var allButtons;


function setup(){
  createCanvas(windowWidth,windowWidth*windowRatio);
  tileSize = width/30;
  fullscreen();
  currentLevel = new Level(
      new Player(5.0, 5.0, 100.0),
      new Map(
          [
              [0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0],
              [0, 1, 1, 0, 1, 0],
              [1, 1, 1, 1, 1, 1]
          ], [], color(200, 200, 200)
      ),
      new Map(
          [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 1, 1]
          ], [], color(20, 20, 20)
      ),
      new Map(
          [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
          ], []
      )
  )
}
function draw(){
  currentLevel.update();
  currentLevel.draw();
  for(var x = 0; x<allButtons.length;++x){
    allButtons[x].display(0);
  }
}

function tp(t) {
  return t * tileSize;
}

function pt(p) {
  return p  / tileSize;
}

function mousePressed(){
  for(var x = 0; x<allButtons.length;++x){
    allButtons[x].clicked();
  }
}

var startGame = function{
  console.log("game started");
}

function drawLobby(){
  allButtons.push(new Button(6,13,7,17,"Begin Game",startGame));
}
