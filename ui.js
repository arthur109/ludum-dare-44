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

    textSize(this.size*0.8 + 2);
    fill(200);
    text(String(this.text),tp(this.x1),tp(this.y2)-this.size/8)
    if(mouseAbove){
      fill(0,255,0);
    }else{
      fill(0)
    }


    textSize(this.size*0.8);
    text(String(this.text),tp(this.x1), tp(this.y2)-this.size/8);
  }



}

class Lobby{
  constructor(){
    this.buttons = [
      new Button(15,6,17,7,"Play",function(){inGame = true},tileSize, assets["font"]["tester"]),
      new Button(15,7,17,8,"Options",function(){currentUIPage = optionsPage},tileSize, assets["font"]["tester"]),
      new Button(15,8,17,9,"Exit",function(){currentUIPage = optionsPage},tileSize, assets["font"]["tester"])
    ];
  }

update(){
  imageMode(CORNER);
  tint(255,20)
  image(assets["background"]["forest"],0,-tp(2),width, width*(1080/1920))
  noTint()
  textSize(128);
  textFont("cursive");
  fill(200);
  textAlign(CENTER);
  text("Flip Me Off", tp(15),tp(3));
  textAlign(CENTER);
  fill(0);
  textSize(129);
  text("Flip Me Off", tp(14.9),tp(2.9));


  for(var x = 0; x<this.buttons.length;++x) {
      this.buttons[x].update();
  }
}

}

class Options{
  constructor(){
    this.buttons = [
      new Button(15,5,17,6,"Volume",function(){currentUIPage = lobbyPage},tileSize, assets["font"]["tester"]),
      new Button(15,6,17,7,"Controls",function(){currentUIPage = lobbyPage},tileSize, assets["font"]["tester"]),
      new Button(15,7,17,8,"Back",function(){currentUIPage = lobbyPage},tileSize,assets["font"]["tester"])
    ];
  }


update(){
  background(0,0,255,20);
  for(var x = 0; x<this.buttons.length;++x) {
      this.buttons[x].update();
  }
}

}

class Pause{
  constructor(){
    this.buttons = [
      new Button(15,1,17,2,"Resume",function(){inGame = true;},tileSize, assets["font"]["tester"]),
      new Button(15,2,17,3,"Lobby",function(){currentUIPage = lobbyPage; inGame = false;},tileSize, assets["font"]["tester"]),
      new Button(15,3,17,4,"Options",function(){currentUIPage = optionsPage; inGame = false;},tileSize,assets["font"]["tester"])
    ];
  }


update(){
  fill(255,0,0,20);
  rect(tp(11),tp(0),tp(19),tp(5));
  for(var x = 0; x<this.buttons.length;++x) {
      this.buttons[x].update();
  }
}

}
