var currentUIPage;
var currentLevel;
var inGame = false;
var tileSize = 50.0;
var windowRatio = 30.0 / 16.0
var lobbyPage;
var optionsPage;
var pausePage;
var assets;


var frameTimer = 0;

function setup(){

    let paddedWidth = windowWidth - 32.0;
    let paddedHeight = windowHeight - 32.0;

    let paddedRatio = paddedWidth * 1.0 / paddedHeight;
    if (paddedRatio < windowRatio) {
        createCanvas(paddedWidth, paddedWidth / windowRatio);
    } else {
      createCanvas(paddedHeight * windowRatio,paddedHeight);
    }

  tileSize = width/30;

  noSmooth();
  currentLevelIndex = 1;
  currentLevel = getLevel(currentLevelIndex);
  lobbyPage = new Lobby;
  optionsPage = new Options;
  pausePage = new Pause;

  currentUIPage = lobbyPage;

    frameTimer = performance.now();
}

function draw(){
    if(inGame) {
        let frameTime = (1.0 / 60.0) * 1000.0;

        while(frameTimer > frameTime) {
            currentLevel.update();
            frameTimer -= frameTime;
        }

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

function getLevel(index){
    return new Level(
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
}
