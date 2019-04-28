class Button{
  constructor(x1,y1,x2,y2,text,action,size){
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.text = text;
    this.action = action;
    this.size = size;
  }

  display(selected){
    rectMode(CORNERS);

    fill(142, 249, 255,155*selected);//+100);
    rect(tp(this.x1),tp(this.y1),tp(this.x2),tp(this.y2));
    textSize(this.size*0.8);
    fill(0);
    text(String(this.text),tp(this.x1), tp(this.y2)-this.size/8);
  }

  clicked(){
    console.log(pt(mouseX));
    if((int(pt(mouseX)) >= this.x1) && (int(pt(mouseY)) >= this.y1) && (int(pt(mouseX)) <= this.x2) && (int(pt(mouseY)) < this.y2)){
      this.action();
    }
  }


}

class Lobby{
  constructor(){
    this.buttons = [(new Button(13,6,17,7,"Begin Game",startGame,tileSize)),(new Button(13,7,17,8,"Continue Game",continueGame,tileSize))];
  }

  checkForClick(){
    for(let x = 0; x<this.buttons.length;++x){
      this.buttons[x].clicked();
    }
  }

updateButtons(){
  background(255);
  for(var x = 0; x<this.buttons.length;++x) {
      this.buttons[x].display(0);
  }
}

}

class Options{
  constructor(){
    this.buttons = [];
  }

  checkForClick(){
    for(let x = 0; x<this.buttons.length;++x){
      this.buttons[x].clicked();
    }
  }

updateButtons(){
  background(255,0,0,20);
  for(var x = 0; x<this.buttons.length;++x) {
      this.buttons[x].display(0);
  }
}

}
