
// var currentLevel =
var tileSize = 50.0;

function setup(){
  createCanvas(500,500);
}
function draw(){
  ellipse(250,250,100,100);
}

function tp(t) {
  return t * tileSize;
}

function pt(p) {
  return p  / tileSize;
}