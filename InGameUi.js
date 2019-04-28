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
