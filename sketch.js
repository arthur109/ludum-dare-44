var currentUIPage;
var currentLevel;
var inGame = false;
var tileSize = 50.0;
var windowRatio = 12/30;
var lobbyPage;
var optionsPage;
var pausePage;
var assets;


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
  lobbyPage = new Lobby;
  optionsPage = new Options;
  pausePage = new Pause;

  currentUIPage = lobbyPage;
}
function draw(){
    if(inGame) {
        currentLevel.update();
        currentLevel.draw();

        if(keyIsDown(27)){
          inGame = false;
          currentUIPage = pausePage;
        }
    }else{
       currentUIPage.update();
    }
  // for(var i = 0; i<assets["player"]["run"].length; i++){
  //     image(assets["player"]["run"][i], i*tileSize,i*tileSize,tileSize,tileSize)
  // }
  // for(var x = 0; x<allButtons.length;++x) {
  //     allButtons[x].display(1);
  // }
}

function tp(t) {
  return t * tileSize;
}

function pt(p) {
  return p  / tileSize;
}
