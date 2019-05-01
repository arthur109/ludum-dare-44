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
    pausePage = new Pause;
    deathPage = new Dead;
    winPage = new Win;

    previousUIPage = lobbyPage;
    currentUIPage = lobbyPage;
    frameTimer = performance.now();
    music.setVolume(0.3)
}

function draw() {
    if (inGame) {
        currentLevel.update();

        currentLevel.draw();

        if (hasPaused) {
            inGame = false;
            currentUIPage = pausePage;
            // music.pause()
            music.setVolume(0.1)
            hasPaused = true;
        }
    } else {
        if (hasUnPaused) {
            if (currentUIPage === pausePage) {
                inGame = true;
                // music.play();
                music.setVolume(0.7);
                previousUIPage = pausePage;
            }
        }
        currentUIPage.update();
    }

    if(!musicPlaying){
      if(!inGame && currentUIPage === lobbyPage){
        music.stop();
        music = assets["audio"]["lobby"];
        music.loop()
        musicPlaying = true;
      }else{
        music.stop();
        music = assets["audio"]["normal"];
        music.loop();
        musicPlaying = true;
      }
    }
    // music.setVolume(slider.value());
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
        return getLevelA3();

    } else if (index === 4) {
        return getLevelR2();
    } else if (index === 5) {
        return getLevelR1();
    }else if (index === 6) {
      return getLevelJ1();
    } else if (index === 7) {
        return getLevelD5();
    }else if (index === 8) {
      return getLevelJ1();
    }

    return getLevelR1();
}


function kill() {
  deathCounter+= 1;
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
