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
        return new Level(
            new Player(4.0, 1.0, 100.0),
            new Map(

                    [[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,37,32,31,34,30,36,-1,37,36,-1,-1,-1,40,33,34,29,33,33,27,28,33,34,42,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,26,24,24,22,-1,-1,-1,-1,-1,-1,-1,41,26,22,19,15,24,21,25,26,18,13,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,13,16,18,20,-1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,16,26,17,26,-1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,4,4,4,4,-1,-1,-1,-1,-1,-1,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,],
                    ]
                , [], assets["background"]["forest"]
            ),
            new Map(

                    [[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                        [-1,-1,-1,37,32,31,34,30,36,-1,37,36,-1,-1,-1,40,33,34,29,33,33,27,28,33,34,42,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,26,24,24,22,-1,-1,-1,-1,-1,-1,-1,41,26,22,19,15,24,21,25,26,18,13,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,13,16,18,20,-1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,16,26,17,26,-1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,-1,],
                        [-1,-1,-1,-1,4,4,4,4,-1,-1,-1,-1,-1,-1,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,],

                ], [new BotSpike(19, 10),new BotSpike(20, 10)], assets["background"]["darkforest"]
            ),
            new Map(
                [
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0]
                ], [new TextPad(4,10,"use WASD to move."), new TextPad(8,10,"get the gem to win."), new TextPad(11,10,"you can double jump."), new TextPad(18,10,"press k to switch dimensions."), new Gem(22.0, 9.0)], undefined, 0
            )
        )
    } else if (index === 2) {

        return new Level(
            new Player(4.0, 2.0, 100.0),
            new Map(
                    [[-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,], //0
                        [-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,], //1
                        [-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,], //2
                        [-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,6,6,6,40,35,29,33,31,34,31,30,32,34,29,29,31,34,30,], //3
                        [27,27,27,27,27,27,27,27,27,42,6,6,6,4,6,18,26,26,26,26,18,18,26,18,6,26,26,26,26,26,], //4
                        [26,14,23,26,26,19,22,26,24,43,6,6,6,4,6,18,21,18,18,15,18,18,18,18,26,18,21,26,6,26,], //5
                        [1,1,1,1,1,1,1,1,3,6,6,6,6,6,6,18,18,18,26,18,21,18,18,13,18,26,26,18,26,26,], //6
                        [-1,-1,-1,-1,-1,-1,-1,-1,6,6,6,6,6,6,6,18,18,18,6,6,18,18,18,26,26,19,26,13,26,18,], //7
                        [-1,-1,-1,-1,-1,-1,-1,-1,3,6,6,6,6,6,6,15,13,18,13,18,18,15,18,18,18,18,18,18,18,18,], //8
                        [-1,-1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,], //9
                        [-1,-1,-1,-1,-1,-1,-1,-1,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,], //10
                        [-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,], //11
                        [-1,-1,-1,-1,-1,-1,-1,-1,6,6,6,6,6,6,6,6,4,1,1,7,4,4,4,4,4,4,4,4,1,4,], //12
                        [-1,-1,-1,-1,-1,-1,-1,-1,6,6,6,6,6,2,4,6,4,4,4,6,6,2,6,2,6,4,4,4,1,4,], //13
                        [-1,-1,-1,-1,-1,-1,-1,-1,3,6,6,6,6,4,2,6,4,2,6,4,5,4,4,1,4,4,4,1,4,4,], //14
                        [-1,-1,-1,-1,-1,-1,-1,-1,4,6,6,6,6,6,6,6,4,4,6,4,4,6,4,4,1,4,4,3,4,4,] //15

                ], [new TextPad(4.0,3.0, "every flip costs health."), new TextPad(7.0,3.0, "if you spawn in a wall, you die.")], assets["background"]["forest"]
            ),
            new Map(
                [
                    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,], //0
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,], //1
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,], //2
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,34,30,], //3
                        [27,27,27,27,27,27,27,27,27,42,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,26,26,], //4
                        [26,14,23,26,26,19,22,26,24,43,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,26,], //5
                        [1,1,1,1,1,1,1,1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,26,26,], //6
                        [-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,26,18,], //7
                        [-1,-1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,18,18,], //8
                        [9,-1,9,-1,9,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,], //9
                        [9,-1,9,-1,-1,-1,-1,-1,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,], //10
                        [9,9,9,-1,9,-1,-1,-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,], //11
                        [9,-1,9,-1,9,-1,-1,-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,4,], //12
                        [9,-1,9,-1,9,-1,-1,-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,4,], //13
                        [-1,-1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,4,], //14
                        [-1,-1,-1,-1,-1,-1,-1,-1,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,4], //15


                ], [], assets["background"]["darkforest"]
            ),
            new Map(
                [
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0]
                ], [new Gem(23.0, 10.0),], undefined
            ),8
        )
    } else if (index === 3) {
        return new Level(
            new Player(4.0, 8.0, 100.0),
            new Map(
                [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

                ], [new BotSpike(13, 13)], assets["background"]["forest"]
            ),
            new Map(
                [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [2, 2, 2, 2, 2, 0, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

                ], [], assets["background"]["darkforest"]
            ),
            new Map(
                [
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0]
                ], [], undefined
            ),10
        )
    }else if (index === 9) {
        return new Level(
            new Player(3.0, 4.0, 100.0),
            new Map(
                [
                  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
                  [-1,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,-1,-1,-1,],
                  [-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,],
                  [-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,],
                  [-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,],
                  [-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,],
                  [-1,6,-1,-1,-1,8,8,8,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,],
                  [-1,6,-1,-1,-1,-1,-1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,],
                  [-1,6,-1,-1,-1,-1,-1,8,-1,-1,8,-1,-1,8,-1,-1,8,8,8,-1,-1,8,-1,-1,-1,-1,6,-1,-1,-1,],
                  [-1,6,-1,-1,-1,-1,-1,8,-1,-1,8,-1,-1,8,-1,8,-1,-1,-1,-1,8,8,8,-1,-1,-1,6,-1,-1,-1,],
                  [-1,6,-1,-1,-1,-1,-1,8,-1,-1,8,-1,-1,8,-1,-1,8,8,-1,-1,-1,8,-1,-1,-1,-1,6,-1,-1,-1,],
                  [-1,6,-1,-1,8,-1,-1,8,-1,-1,8,-1,-1,8,-1,-1,-1,-1,8,-1,-1,8,-1,-1,-1,-1,6,-1,-1,-1,],
                  [-1,6,-1,-1,-1,8,8,-1,-1,-1,-1,8,8,-1,-1,8,8,8,-1,-1,-1,8,-1,-1,-1,-1,6,-1,-1,-1,],
                  [27,29,32,31,31,27,34,27,33,29,34,33,32,27,30,33,31,27,31,33,27,27,28,33,33,31,27,33,29,27,],
                  [14,18,26,3,26,20,26,19,14,17,26,17,26,20,3,26,23,26,24,26,19,19,3,23,25,19,22,21,26,3,],
                  [26,14,15,26,26,13,20,21,3,20,14,18,21,23,26,3,26,19,26,3,22,20,22,24,19,23,3,20,16,21,]

                ], [new BotSpike(13, 13)], assets["background"]["forest"]
            ),
            new Map(
                [
                    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,], [-1,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,-1,-1,-1,], [-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,-1,-1,-1,], [-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,-1,-1,-1,], [-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,], [-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,], [-1,6,-1,-1,-1,9,9,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,], [-1,6,-1,-1,9,-1,-1,-1,9,-1,-1,-1,-1,-1,-1,-1,-1,9,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1,-1,], [-1,6,-1,-1,9,-1,-1,-1,9,-1,-1,9,-1,-1,9,-1,-1,-1,-1,-1,-1,9,-1,-1,-1,-1,6,-1,-1,-1,], [-1,6,-1,-1,9,-1,-1,-1,9,-1,-1,9,-1,-1,9,-1,9,9,-1,-1,9,9,9,-1,-1,-1,6,-1,-1,-1,], [-1,6,-1,-1,9,-1,-1,-1,9,-1,-1,9,-1,-1,9,-1,-1,9,-1,-1,-1,9,-1,-1,-1,-1,6,-1,-1,-1,], [-1,6,-1,-1,9,-1,-1,9,9,-1,-1,9,-1,-1,9,-1,-1,9,-1,-1,-1,9,-1,-1,-1,-1,6,-1,-1,-1,], [-1,6,-1,-1,-1,9,9,9,9,9,-1,-1,9,9,-1,-1,9,9,9,-1,-1,9,-1,-1,-1,-1,6,-1,-1,-1,], [27,29,32,31,31,27,34,27,33,29,34,33,32,27,30,33,31,27,31,33,27,27,28,33,33,31,27,33,29,27,], [14,18,26,3,26,20,26,19,14,17,26,17,26,20,3,18,23,21,24,26,19,19,3,23,25,19,22,21,26,3,], [26,14,15,26,26,13,20,21,3,20,14,18,21,23,26,3,26,19,26,3,22,20,22,24,19,23,3,20,16,21]], [], assets["background"]["darkforest"]
            ),
            new Map(
                [
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0]
                ], [], undefined
            ),10
        )
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
