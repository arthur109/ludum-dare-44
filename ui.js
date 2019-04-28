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
    if((int(pt(mouseX)) >= this.x1) && (int(pt(mouseY)) >= this.y1) && (int(pt(mouseX)) <= this.x2) && (int(pt(mouseY)) < this.y2)){
      mouseAbove = true;
    }
    if(mouseIsPressed && mouseAbove){
      this.action();
    }
    rectMode(CORNERS);
    noStroke();
    // fill(255);//+100);
    // rect(tp(this.x1),tp(this.y1),tp(this.x2),tp(this.y2));

    if(mouseAbove){
      fill(0,255,0);
    }else{
      fill(0)
    }
    textSize(this.size*0.8);
    textFont(this.font);
    text(String(this.text),tp(this.x1), tp(this.y2)-this.size/8);
  }



}

class Lobby{
  constructor(){
    this.buttons = [
      new Button(13,6,17,7,"Play",function(){inGame = true},tileSize, assets["font"]["tester"]),
      new Button(13,7,17,8,"Options",function(){currentUIPage = optionsPage},tileSize, assets["font"]["tester"])
    ];
  }

update(){
  imageMode(CORNER);
  tint(255,20)
  image(assets["background"]["forest"],0,-tp(2),width, width*(1080/1920))
  noTint()
  textSize(100);
  textFont("cursive");
  fill(0);
  text("Flip Me Off", tp(11),tp(3));

  for(var x = 0; x<this.buttons.length;++x) {
      this.buttons[x].update();
  }
}

}

class Options{
  constructor(){
    this.buttons = [
      new Button(13,8,17,9,"Back",function(){currentUIPage = lobbyPage},tileSize)
    ];
  }


update(){
  background(255,0,0,20);
  for(var x = 0; x<this.buttons.length;++x) {
      this.buttons[x].update();
  }
}

}
