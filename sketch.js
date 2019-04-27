var imageAssests;
var currentLevel;
var tileSize = 50.0;
var windowRatio = 12/30;

function preload(){
    imageAssests = {
        player:{
            jump:importAllInFolder("assets/jumping/",6)
        }
    }
}


function setup(){
  createCanvas(windowWidth,windowWidth*windowRatio);
  noSmooth();
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
  for(var i = 0; i<imageAssests["player"]["jump"].length; i++){
      image(imageAssests["player"]["jump"][i], i*tileSize,i*tileSize,tileSize,tileSize)
  }
}

function tp(t) {
  return t * tileSize;
}

function pt(p) {
  return p  / tileSize;
}