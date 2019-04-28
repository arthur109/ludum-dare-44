var currentUIPage;
var currentLevel;
var inGame = false;
var tileSize = 50.0;
var windowRatio = 30.0 / 16.0


function setup(){
  tileSize = width/30;

    let paddedWidth = windowWidth - 32.0;
    let paddedHeight = windowHeight - 32.0;

    let paddedRatio = paddedWidth * 1.0 / paddedHeight;
    if (paddedRatio < windowRatio) {
        createCanvas(paddedWidth, paddedWidth / windowRatio);
    } else {
      createCanvas(paddedHeight * windowRatio,paddedHeight);
    }

  noSmooth();
  currentLevel = new Level(
      new Player(4.0, 2.0, 100.0),
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

  currentUIPage = lobbyPage;
}

function draw(){
    if(inGame) {
        currentLevel.update();
        currentLevel.draw();
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
