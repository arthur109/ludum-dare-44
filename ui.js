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

    stroke(10);
    fill(142, 249, 255,255*selected);
    rect(tp(this.x1),tp(this.y1),tp(this.x2),tp(this.y2));
    textSize(this.size);
    fill(0);
    text(String(this.text),tp(this.x2), tp(this.y1));
  }

  clicked(){
    if((pt(mouseX) === this.x1) && (pt(mouseY) === this.y1)){
      this.action();
    }
  }


}
