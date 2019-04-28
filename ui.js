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
    if(mouseIsPressed && mouseAbove){
      this.action();
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
        inGame = true;
        currentLevel = getLevel(currentLevelIndex);
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

class Dead{
  constructor(){
    this.buttons = [
      new Button(15,10,17,11,"Restart",function(){
        inGame = true;
        currentLevel = getLevel(currentLevelIndex)
      },tileSize, assets["font"]["standard"]),
      new Button(15,11,17,12,"Back to Lobby",function(){
        previousUIPage = currentUIPage;
        currentUIPage = lobbyPage;
        inGame = false;
      },tileSize, assets["font"]["standard"]),
      new Button(15,0,17,1,"Good Job! You Died!",function(){
        console.log("Yay! You found an easter egg!")
      },tileSize, assets["font"]["standard"])
    ];
    fill(20,30);
    rect(tp(0),tp(0),tp(12),tp(30));
  }


update(){
  fill(0,20);
  rect(tp(0),tp(0),tp(30),tp(2));
  rect(tp(0),tp(10),tp(30),tp(12));


  for(var x = 0; x<this.buttons.length;++x) {
      this.buttons[x].update();
  }
}

}
