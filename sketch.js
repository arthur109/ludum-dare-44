// function setup(){
//   createCanvas(600,600);
// }
//
// function draw(){
//   background(255,0,0)
//   ellipse(100,100,300,300)
// }

var currentUIPage;
var previousUIPage;
var currentLevelIndex = 1;
var currentLevel;
var inGame = false;
var tileSize = 50.0;
var mapWidth = 30;
var mapHeight = 16;
var windowRatio = mapWidth / mapHeight;
var lobbyPage;
var tutorialPage;
var pausePage;
var layerPage;
var deathPage;
var winPage;
var assets;
var thisMapOrTheOther = 1;

var musicPlaying = false;
var slider;
var music;

var deathCounter = 0;

var hasPaused = false;
var hasUnPaused = true;

var hasClicked = false;


var frameTimer = 0;

var currentMusic = null;

function setup() {

    let paddedWidth = windowWidth - 32.0;
    let paddedHeight = windowHeight - 32.0;

    let paddedRatio = paddedWidth * 1.0 / paddedHeight;
    if (paddedRatio < windowRatio) {
        createCanvas(paddedWidth, paddedWidth / windowRatio);
    } else {
        createCanvas(paddedHeight * windowRatio, paddedHeight);
    }

    slider = createSlider(0,0.5,1,0.1);

    music = assets["audio"]["lobby"];


    tileSize = width / mapWidth;

    noSmooth();
    currentLevelIndex = 1;
    currentLevel = getLevel(currentLevelIndex);
    lobbyPage = new Lobby;
    layerPage = new LevelSelect;
    optionsPage = new Tutorial;
    pausePage = new Pause;
    deathPage = new Dead;
    winPage = new Win;

    previousUIPage = lobbyPage;
    currentUIPage = lobbyPage;

    frameTimer = performance.now();
}

var lastTime = 0;
function draw() {
    if (inGame) {
        currentLevel.update();

        currentLevel.draw();

        if (hasPaused) {
            inGame = false;
            currentUIPage = pausePage;
            hasPaused = true;
        }
    } else {
        if (hasUnPaused) {
            if (currentUIPage === pausePage) {
                inGame = true;
                previousUIPage = pausePage;
            }
        }
        currentUIPage.update();
    }

    if(!musicPlaying){
      if(!inGame && currentUIPage === lobbyPage){
        music.stop();
        music = assets["audio"]["lobby"]
        music.play()
        musicPlaying = true;
      }else{
        music.stop();
        music = assets["audio"]["lobby"]
        music.play()
        musicPlaying = true;
      }
    }
    music.setVolume(slider.value());
}

function keyPressed() {
    if (keyCode === 27 || keyCode === 80) {
        if (hasPaused) {
            hasPaused = false;
            hasUnPaused = true;
        } else {
            hasPaused = true;
            hasUnPaused = false;
        }
    }
    if (keyCode === 75 || keyCode === 88) {
      flip();
  }
}setTimeout(function () {

}, 10);

function flip(){
  if(thisMapOrTheOther === 1){
    currentLevel.player.level.currentMap = currentLevel.player.level.otherMap;
    thisMapOrTheOther = 0;
    currentLevel.player.health -= currentLevel.damage;
  }else{
    currentLevel.player.level.currentMap = currentLevel.player.level.defaultMap;
    thisMapOrTheOther = 1;
    currentLevel.player.health -= currentLevel.damage;
  }
  print(currentLevel.player.health)
}

function mouseReleased() {
    hasClicked = false;
}

// function keyTyped() {
//   if (keyCode === 27) {
//     if(hasPaused){
//       hasPaused
//     }
//   }
// }

// function keyReleased(){
//   if(keycode === 27){
//     if(hasPaused){
//       hasPaused = false;
//       hasUnPaused = true;
//     }else{
//       hasPaused = true;
//       hasUnPaused = false;
//     }
//   }
// }


function tp(t) {
    return t * tileSize;
}

function pt(p) {
    return p / tileSize;
}

function restart() {
    currentLevel = getLevel(currentLevelIndex);
}

function getLevel(index) {
    if (index === 1) {
        return getLevelA1();
    } else if (index === 2) {
        return getLevelA2();
    } else if (index === 3) {
      return getLevelJ1();
    }else if (index === 9) {
      return levelR1();
        // return new Level(
        //     new Player(2.0, 12.0, 100.0),
        //     new Map(
        //         [
        //           [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
        //           [-1,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,-1,-1,-1,],
        //           [-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,],
        //           [-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,],
        //           [-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,],
        //           [-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,],
        //           [-1,6,-1,-1,-1,8,8,8,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,],
        //           [-1,6,-1,-1,-1,-1,-1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,],
        //           [-1,6,-1,-1,-1,-1,-1,8,-1,-1,8,-1,-1,8,-1,-1,8,8,8,-1,-1,8,-1,-1,-1,-1,6,-1,-1,-1,],
        //           [-1,6,-1,-1,-1,-1,-1,8,-1,-1,8,-1,-1,8,-1,8,-1,-1,-1,-1,8,8,8,-1,-1,-1,6,-1,-1,-1,],
        //           [-1,6,-1,-1,-1,-1,-1,8,-1,-1,8,-1,-1,8,-1,-1,8,8,-1,-1,-1,8,-1,-1,-1,-1,6,-1,-1,-1,],
        //           [-1,6,-1,-1,8,-1,-1,8,-1,-1,8,-1,-1,8,-1,-1,-1,-1,8,-1,-1,8,-1,-1,-1,-1,6,-1,-1,-1,],
        //           [-1,6,-1,-1,-1,8,8,-1,-1,-1,-1,8,8,-1,-1,8,8,8,-1,-1,-1,8,-1,-1,-1,-1,6,-1,-1,-1,],
        //           [27,29,32,31,31,27,34,27,33,29,34,33,32,27,30,33,31,27,31,33,27,27,28,33,33,31,27,33,29,27,],
        //           [14,18,26,3,26,20,26,19,14,17,26,17,26,20,3,26,23,26,24,26,19,19,3,23,25,19,22,21,26,3,],
        //           [26,14,15,26,26,13,20,21,3,20,14,18,21,23,26,3,26,19,26,3,22,20,22,24,19,23,3,20,16,21,]
        //
        //         ], [new Spring(3, 12,-1), new TopSpike(5,2), new TopSpike(6,2),new Spring(6, 5,-0.5), new TopSpike(7,2), new TopSpike(8,2),new Spring(8, 5,-0.5), TopSpike(9,2), new TopSpike(10,2),new Spring(10, 5,-0.5), new TopSpike(11,2), new TopSpike(12,2),new Spring(12, 5,-0.5), TopSpike(13,2), new TopSpike(14,2),new Spring(14, 5,-0.5), new TopSpike(15,2), new TopSpike(16,2),new Spring(17, 5,-0.5), TopSpike(18,2), new TopSpike(19,2),new Spring(19, 5,-0.5), new TopSpike(20,2), new TopSpike(21,2),new Spring(21, 5,-0.5), TopSpike(22,2), new TopSpike(23,2),new Spring(23, 5,-0.5), new TopSpike(24,2), new TopSpike(25,2),new Spring(25, 5,-0.5), BotSpike(4,12),new BotSpike(7,12),new BotSpike(8,12),new BotSpike(9,12),new BotSpike(10,12),new BotSpike(13,12),new BotSpike(14,12),new BotSpike(18,12),new BotSpike(19,12),new BotSpike(20,12),new BotSpike(22,12)], assets["background"]["forest"]
        //     ),
        //     new Map(
        //         [
        //             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,], [-1,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,-1,-1,-1,], [-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,-1,-1,-1,], [-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,-1,-1,-1,], [-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,], [-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,], [-1,6,-1,-1,-1,9,9,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,], [-1,6,-1,-1,9,-1,-1,-1,9,-1,-1,-1,-1,-1,-1,-1,-1,9,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,], [-1,6,-1,-1,9,-1,-1,-1,9,-1,-1,9,-1,-1,9,-1,-1,-1,-1,-1,-1,9,-1,-1,-1,-1,6,-1,-1,-1,], [-1,6,-1,-1,9,-1,-1,-1,9,-1,-1,9,-1,-1,9,-1,9,9,-1,-1,9,9,9,-1,-1,-1,6,-1,-1,-1,], [-1,6,-1,-1,9,-1,-1,-1,9,-1,-1,9,-1,-1,9,-1,-1,9,-1,-1,-1,9,-1,-1,-1,-1,6,-1,-1,-1,], [-1,6,-1,-1,9,-1,-1,9,9,-1,-1,9,-1,-1,9,-1,-1,9,-1,-1,-1,9,-1,-1,-1,-1,6,-1,-1,-1,], [-1,6,-1,-1,-1,9,9,9,9,9,-1,-1,9,9,-1,-1,9,9,9,-1,-1,9,-1,-1,-1,-1,6,-1,-1,-1,], [27,29,32,31,31,27,34,27,33,29,34,33,32,27,30,33,31,27,31,33,27,27,28,33,33,31,27,33,29,27,], [14,18,26,3,26,20,26,19,14,17,26,17,26,20,3,18,23,21,24,26,19,19,3,23,25,19,22,21,26,3,], [26,14,15,26,26,13,20,21,3,20,14,18,21,23,26,3,26,19,26,3,22,20,22,24,19,23,3,20,16,21]], [], assets["background"]["darkforest"]
        //     ),
        //     new Map(
        //         [
        //             [0, 0, 0, 0, 0, 0],
        //             [0, 0, 0, 0, 0, 0],
        //             [0, 0, 0, 0, 0, 0],
        //             [0, 0, 0, 0, 0, 0],
        //             [0, 0, 0, 0, 0, 0],
        //             [0, 0, 0, 0, 0, 0]
        //         ], [], undefined
        //     ),10
        // )
    }
}


function kill() {
  deathCounter+= 1;
  print(deathCounter);
  currentLevel.draw();
  currentLevel.draw();
  currentLevel.draw();
  inGame = false;
  previousUIPage = currentUIPage;
  currentUIPage = deathPage;
}

function win() {
    inGame = false;
    previousUIPage = currentUIPage;
    currentUIPage = winPage;
}
