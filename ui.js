class Button{
  constructor(x1,y1,x2,y2,text,action,size,font){
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.text = text;
    this.action = action;
    this.size = size;
    this.font = font;
  }

  update(){
    var mouseAbove = false;
    if((int(pt(mouseX)) >= this.x1-3) && (int(pt(mouseY)) >= this.y1) && (int(pt(mouseX)) <= this.x2) && (int(pt(mouseY)) < this.y2)){
      mouseAbove = true;
    }
    rectMode(CORNERS);
    noStroke();
    // fill(255);//+100);
    // rect(tp(this.x1),tp(this.y1),tp(this.x2),tp(this.y2));

    textFont(this.font);
    textAlign(CENTER);
    if(mouseAbove){
      fill(136,86,148);
    }else{
      fill(255)
    }

    textSize(this.size);
    text(String(this.text),tp(this.x1), tp(this.y2)-this.size/8);

    if(mouseIsPressed && mouseAbove){
      this.action();
    }

  }
}


class Lobby{
  currentLevelIndex;
  constructor(){
    this.buttons = [
      new Button(15,6,17,7,"New Game",function(){
        inGame = true;
        currentLevelIndex = 1;
        getLevel(currentLevelIndex)
      },tileSize*2, assets["font"]["standard"]),
      new Button(15,7,17,8,"Continue Game: Level "+currentLevelIndex,function(){
        inGame = true;
        currentLevel = getLevel(currentLevelIndex);
      },tileSize, assets["font"]["standard"]),
      new Button(15,8,17,9,"Select Level",function(){
        previousUIPage = currentUIPage;
        currentUIPage = layerPage;
      },tileSize, assets["font"]["standard"]),
      new Button(15,9,17,10,"Options",function(){
        previousUIPage = currentUIPage;
        currentUIPage = optionsPage
      },tileSize, assets["font"]["standard"]),
      new Button(15,10,17,11,"Exit",function(){
        previousUIPage = currentUIPage;
        currentUIPage = optionsPage
      },tileSize, assets["font"]["standard"])
    ];
  }

update(){
  imageMode(CORNER);
  tint(255,50);
  var backImage = assets["background"]["forest"];
  image(assets["background"]["forest"],0,0,width, width*(backImage.height/backImage.width));
  noTint()
  textSize(128);
  textFont( assets["font"]["title"]);
  fill(255);
  textAlign(CENTER);
  text("Flip Me Off", tp(15),tp(4));
  textAlign(CENTER);
  // fill(0);
  // textSize(129);
  // text("Flip Me Off", tp(14.9),tp(2.9));


  for(var x = 0; x<this.buttons.length;++x) {
      this.buttons[x].update();
  }
}

}

class Options{
  constructor(){
    this.IAMVERYMAD = 0;
    this.buttons = [
      new Button(15,5,17,6,"Volume",function(){
        previousUIPage = currentUIPage;
        currentUIPage = lobbyPage
      },tileSize, assets["font"]["standard"]),
      new Button(15,6,17,7,"Controls",function(){
        previousUIPage = currentUIPage;
        currentUIPage = lobbyPage
      },tileSize, assets["font"]["standard"]),
      new Button(15,7,17,8,"Back",function(){
        let a = currentUIPage;
        currentUIPage = previousUIPage;
        previousUIPage = a;
        currentLevel.draw();
        this.IAMVERYMAD = 1;
      },tileSize,assets["font"]["standard"])
    ];
  }


update(){
  background(0,0,255,20);
  for(var x = 0; x<this.buttons.length;++x) {
      this.buttons[x].update();
  }
  if(this.IAMVERYMAD === 1){
    currentLevel.draw();
  }
}

}

class LevelSelect{
  constructor(){
    this.buttons = [
      new Button(5,1,6,4,"Level 1",function(){
          console.log("sdf");
      },tileSize*2, assets["font"]["title"]),
      new Button(15,1,16,4,"Level 2",function(){
          console.log("sdf");
      },tileSize*2, assets["font"]["title"]),
      new Button(25,1,26,4,"Level 3",function(){
          console.log("sdf");
      },tileSize*2, assets["font"]["title"]),
      new Button(5,5,6,8,"Level 4",function(){
          console.log("sdf");
      },tileSize*2, assets["font"]["title"]),
      new Button(15,5,16,8,"Level 5",function(){
          console.log("sdf");
      },tileSize*2, assets["font"]["title"]),
      new Button(25,5,26,8,"Level 6",function(){
          console.log("sdf");
      },tileSize*2, assets["font"]["title"]),
      new Button(5,9,6,12,"Level 7",function(){
          console.log("sdf");
      },tileSize*2, assets["font"]["title"]),
      new Button(15,9,16,12,"Level 8",function(){
          console.log("sdf");
      },tileSize*2, assets["font"]["title"]),
      new Button(25,9,26,12,"Level 9",function(){
          console.log("sdf");
      },tileSize*2, assets["font"]["title"])
      ];
    fill(20,30);
    rect(tp(0),tp(0),tp(30),tp(12));
  }


update(){
  background(10);

  for(var x = 0; x<this.buttons.length;++x) {
      this.buttons[x].update();
  }
}

}

class Dead{
  constructor(){
    this.buttons = [
      new Button(15,10.75,17,11.75,"Restart",function(){
        inGame = true;
        currentLevel = getLevel(currentLevelIndex)
      },tileSize*2, assets["font"]["standard"]),
      new Button(2,10,4,11,"Back to Lobby",function(){
        previousUIPage = currentUIPage;
        currentUIPage = lobbyPage;
        inGame = false;
      },tileSize, assets["font"]["standard"]),
      new Button(15,0.5,17,2.5,"Congrats! You Died!",function(){
        console.log("Yay! You found an easter egg!")
      },tileSize*3, assets["font"]["standard"])
    ];
    fill(20,30);
    rect(tp(0),tp(0),tp(30),tp(12));
  }


  update(){
    fill(0,20);
    rect(tp(0),tp(0),tp(30),tp(3));
    rect(tp(0),tp(10),tp(30),tp(12));


    for(var x = 0; x<this.buttons.length;++x) {
      this.buttons[x].update();
    }
  }

}

class Pause{
  constructor(){
    this.buttons = [
      new Button(15,1,17,2,"Resume",function(){
        inGame = true;
      },tileSize, assets["font"]["standard"]),
      new Button(15,2,17,3,"Restart",function(){
        currentLevel = getLevel(currentLevelIndex);
        inGame = true;
      },tileSize, assets["font"]["standard"]),
      new Button(15,3,17,4,"Options",function(){
        previousUIPage = currentUIPage;
        currentUIPage = optionsPage;
        inGame = false;
      },tileSize,assets["font"]["standard"]),
      new Button(15,4,17,5,"Lobby",function(){
        previousUIPage = currentUIPage;
        currentUIPage = lobbyPage;
        inGame = false;
      },tileSize, assets["font"]["standard"]),
      new Button(15,5,17,6,"Kill Me",function(){
        previousUIPage = currentUIPage;
        currentUIPage = deathPage;
        inGame = false;
        currentLevel.draw();
      },tileSize, assets["font"]["standard"])
    ];
  }


update(){
  fill(255,0,0,20);
  rect(tp(10),tp(0),tp(20),tp(6));
  for(var x = 0; x<this.buttons.length;++x) {
      this.buttons[x].update();
  }
}

}
