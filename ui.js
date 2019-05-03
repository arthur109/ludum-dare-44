class Button {
  constructor(x1, y1, x2, y2, text, action, size, font, collor) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.text = text;
    this.action = action;
    this.size = size;
    this.font = font;
    if (collor != undefined) {
      this.color = collor
    } else {
      this.color = color(255, 255, 255);
    }
  }

  update() {
    var mouseAbove = false;
    if ((int(pt(mouseX)) >= this.x1 - 3) && (int(pt(mouseY)) >= this.y1) && (int(pt(mouseX)) <= this.x2) && (int(pt(mouseY)) < this.y2)) {
      mouseAbove = true;
    }
    rectMode(CORNERS);
    noStroke();
    // fill(255);//+100);
    // rect(tp(this.x1),tp(this.y1),tp(this.x2),tp(this.y2));

    textFont(this.font);
    textAlign(CENTER);
    if (mouseAbove) {
      fill(136, 86, 148);
    } else {
      fill(this.color)
    }

    textSize(this.size);
    text(String(this.text), tp(this.x1), tp(this.y2) - this.size / 8);

    if (mouseIsPressed && mouseAbove && !hasClicked) {
      this.action();
      hasClicked = true;
    }

  }
}


class Lobby {
  constructor() {
    this.buttons = [
      new Button(15, 6, 17, 7, "New Game", function() {
        inGame = true;
        currentLevelIndex = 1;
        currentLevel = getLevel(currentLevelIndex),
        thisMapOrTheOther = 1;
        musicPlaying = false;
      }, tileSize * 2, assets["font"]["standard"]),
      new Button(15, 7, 17, 8, "Continue Game", function() {
        currentLevel = getLevel(currentLevelIndex);
        inGame = true;
        musicPlaying = false;
      }, tileSize, assets["font"]["standard"]),
      new Button(15, 8, 17, 9, "Select Level", function() {
        previousUIPage = currentUIPage;
        currentUIPage = layerPage;
      }, tileSize, assets["font"]["standard"])
    ];
  }

  update() {
    imageMode(CORNER);
    // tint(255, 200);
    var backImage = assets["background"]["hybrid-head"];
    image(backImage, 0, 0, width, width * (backImage.height / backImage.width));
    noTint()
    textSize(tileSize * 2.5);
    textFont(assets["font"]["title"]);
    fill(255);
    textAlign(CENTER);
    text("Flip Me Off!", tp(15), tp(4));
    textAlign(CENTER);
    // fill(0);
    // textSize(129);
    // text("Flip Me Off", tp(14.9),tp(2.9));


    for (var x = 0; x < this.buttons.length; ++x) {
      this.buttons[x].update();
    }
  }

}

class LevelSelect {
  constructor() {
    this.buttons = [
      new Button(5, 2, 6, 3, "Level 1", function() {
        inGame = true;
        currentLevelIndex = 1;
        currentLevel = getLevel(currentLevelIndex)
        musicPlaying = false;
      }, tileSize * 2, assets["font"]["standard"]),

      new Button(10, 2, 11, 3, "Level 2", function() {
        inGame = true;
        currentLevelIndex = 2;
        currentLevel = getLevel(currentLevelIndex)
        musicPlaying = false;
      }, tileSize * 2, assets["font"]["standard"]),

      new Button(15, 2, 16, 3, "Level 3", function() {
        inGame = true;
        currentLevelIndex = 3;
        currentLevel = getLevel(currentLevelIndex)
        musicPlaying = false;
      }, tileSize * 2, assets["font"]["standard"]),

      new Button(20, 2, 21, 3, "Level 4", function() {
        inGame = true;
        currentLevelIndex = 4;
        currentLevel = getLevel(currentLevelIndex)
        musicPlaying = false;
      }, tileSize * 2, assets["font"]["standard"]),

      new Button(25, 2, 26, 3, "Level 5", function() {
        inGame = true;
        currentLevelIndex = 5;
        currentLevel = getLevel(currentLevelIndex)
        musicPlaying = false;
      }, tileSize * 2, assets["font"]["standard"]),


      new Button(5, 5, 6, 6, "Level 6", function() {
        inGame = true;
        currentLevelIndex = 6;
        currentLevel = getLevel(currentLevelIndex)
        musicPlaying = false;
      }, tileSize * 2, assets["font"]["standard"]),

      new Button(10, 5, 11, 6, "Level 7", function() {
        inGame = true;
        currentLevelIndex = 7;
        currentLevel = getLevel(currentLevelIndex)
        musicPlaying = false;
      }, tileSize * 2, assets["font"]["standard"]),

      new Button(15, 5, 16, 6, "Level 8", function() {
        inGame = true;
        currentLevelIndex = 8;
        currentLevel = getLevel(currentLevelIndex)
        musicPlaying = false;
      }, tileSize * 2, assets["font"]["standard"]),

      new Button(20, 5, 21, 6, "Level 9", function() {
        inGame = true;
        currentLevelIndex = 9;
        currentLevel = getLevel(currentLevelIndex)
        musicPlaying = false;
      }, tileSize * 2, assets["font"]["standard"]),

      new Button(25, 5, 26, 6, "Level 10", function() {
        inGame = true;
        currentLevelIndex = 10;
        currentLevel = getLevel(currentLevelIndex)
        musicPlaying = false;
      }, tileSize * 2, assets["font"]["standard"]),

    ];
    fill(20, 30);
    rect(tp(0), tp(0), tp(30), tp(12));
  }


  update() {
    background(10);

    for (var x = 0; x < this.buttons.length; ++x) {
      this.buttons[x].update();
    }
  }

}

class Dead {
  constructor() {
    this.buttons = [
      new Button(15, 14.75, 17, 15.75, "Restart", this.Restart, tileSize * 2, assets["font"]["standard"]),
      new Button(2, 14, 4, 15, "Back to Lobby", function() {
        previousUIPage = currentUIPage;
        currentUIPage = lobbyPage;
        inGame = false;
        musicPlaying = false;
        thisMapOrTheOther = 1;
      }, tileSize, assets["font"]["standard"]),
      new Button(15, 0.5, 17, 2.5, "Congrats! You're Dead!", function() {
        console.log("Yay! You found an easter egg!")
      }, tileSize * 3, assets["font"]["standard"])
    ];
    fill(20, 30);
    rect(tp(0), tp(0), tp(30), tp(12));
  }


  update() {
    fill(0, 20);
    rect(tp(0), tp(0), tp(mapWidth), tp(3));
    rect(tp(0), tp(mapHeight - 2), tp(mapWidth), tp(mapHeight));


    for (var x = 0; x < this.buttons.length; ++x) {
      this.buttons[x].update();
    }
    if(keyIsDown(13) || keyIsDown(32)){
      this.Restart();
    }
  }
  Restart(){
    inGame = true;
    currentLevel = getLevel(currentLevelIndex);
    thisMapOrTheOther = 1;
  }
}

class Win {
  constructor() {
    this.buttons = [
      new Button(15, 14.75, 17, 15.75, "Next Level",
        this.nextLevel
      , tileSize * 2, assets["font"]["standard"], color(0)),
      new Button(2, 14, 4, 15, "Back to Lobby", function() {
        previousUIPage = currentUIPage;
        currentUIPage = lobbyPage;
        inGame = false;
        musicPlaying = false;
      }, tileSize, assets["font"]["standard"], color(0)),
      new Button(27, 14, 29, 15, "Retry Level", function() {
        currentLevel = getLevel(currentLevelIndex)
        inGame = true;
        thisMapOrTheOther = 1;
      }, tileSize, assets["font"]["standard"], color(0)),
      new Button(15, 0.5, 17, 2.5, "Nice! You Won!", function() {
        console.log("Yay! You found another easter egg!")
      }, tileSize * 3, assets["font"]["standard"], color(0))
    ];
    fill(255, 30);
    rect(tp(0), tp(0), tp(30), tp(12));
  }


  update() {
    fill(255);
    rect(tp(0), tp(0), tp(mapWidth), tp(3));
    rect(tp(0), tp(mapHeight - 2), tp(mapWidth), tp(mapHeight));


    for (var x = 0; x < this.buttons.length; ++x) {
      this.buttons[x].update();
    }
    if(keyIsDown(13) || keyIsDown(32)){
      this.nextLevel();
    }
  }

  nextLevel(){
    currentLevelIndex += 1;
    currentLevel = getLevel(currentLevelIndex);
    inGame = true;
    thisMapOrTheOther = 1;
  }

}

class Pause {
  constructor() {
    this.buttons = [
      new Button(15, 1, 17, 2, "Resume", function() {
        inGame = true;
        hasPaused = false;
      }, tileSize, assets["font"]["standard"]),
      new Button(15, 2, 17, 3, "Restart", function() {
        currentLevel = getLevel(currentLevelIndex);
        inGame = true;
        hasPaused = false;
        thisMapOrTheOther = 1;
      }, tileSize, assets["font"]["standard"]),
      new Button(15, 3, 17, 4, "Lobby", function() {
        previousUIPage = currentUIPage;
        currentUIPage = lobbyPage;
        inGame = false;
        musicPlaying = false;
        hasPaused = false;
        thisMapOrTheOther = 1;
      }, tileSize, assets["font"]["standard"]),
      new Button(15, 4, 17, 5, "I Quit!", function() {
        previousUIPage = currentUIPage;
        currentUIPage = deathPage;
        inGame = false;
        hasPaused = false;
        currentLevel.draw();
      }, tileSize, assets["font"]["standard"])//,
      // new Button(15, 6, 17, 7, "Win Me", function() {
      //   previousUIPage = currentUIPage;
      //   currentUIPage = winPage;
      //   inGame = false;
      //   currentLevel.draw();
      // }, tileSize, assets["font"]["standard"])
    ];
  }


  update() {
    fill(255, 10)

    rect(tp(10.95), tp(0.95), tp(19.05), tp(5.3), 31);
    fill(10);
    rect(tp(11), tp(1), tp(19), tp(5.25), 30);
    for (var x = 0; x < this.buttons.length; ++x) {
      this.buttons[x].update();
    }
  }

}
