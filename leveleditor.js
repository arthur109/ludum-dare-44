
var tileSize = 64;
var mapWidth = 30;
var mapHeight = 16;
var assets;
var cursorX = 0;
var cursorY = 0;
var typeSelected = 5;
var world = [];
function setup() {
    createCanvas(tileSize*mapWidth, tileSize*(mapHeight+2))
    for (let y = 0; y < mapHeight; ++y) {
        var tempList = [];
        for (let x = 0; x < mapWidth; ++x) {
            tempList.push(-1)
        }
        world.push(tempList);
    }
}

function draw(){
    background(75);
    image(assets["background"]["forest"],0,0,mapWidth*tileSize,mapHeight*tileSize);
    for (let y = 0; y < mapHeight; ++y) {
        for (let x = 0; x < mapWidth; ++x) {
            if(world[y][x] !== -1){
                image(assets["tiles"]["standard"][world[y][x]],tileSize*x,tileSize*y,tileSize,tileSize);
            }
        }
    }
    noFill();
    strokeWeight(5);
    stroke(255,0,0,100);
    rect(cursorX*tileSize,cursorY*tileSize,tileSize,tileSize);

    push();
    translate(-tileSize*(typeSelected-mapWidth/2),0);
    for(var i = 0; i < assets["tiles"]["standard"].length; i++){
        image(assets["tiles"]["standard"][i],i*tileSize,(mapHeight+1)*tileSize,tileSize,tileSize);
    }
    stroke(0,0,255);
    rect(typeSelected*tileSize,(mapHeight+1)*tileSize,tileSize,tileSize);
    pop();

}

function keyPressed() {
    if(keyCode === 68){
        cursorX += 1;
    }

    if(keyCode === 65){
        cursorX -= 1;
    }

    if(keyCode === 83){
        cursorY += 1;
    }

    if(keyCode === 87){
        cursorY -= 1;
    }
    if(keyCode === 32){
        if(world[cursorY][cursorX]!==-1){
            world[cursorY][cursorX]=-1;
        }else {
            world[cursorY][cursorX] = typeSelected;
        }
    }
    if(keyCode === 76){
        typeSelected += 1;
    }
    if(keyCode === 75){
        typeSelected -= 1;
    }
    if(keyCode === 69){ // e to export
        var temp = "";
        temp+="[";
        for (let y = 0; y < mapHeight; ++y) {
            temp+="[";
            for (let x = 0; x < mapWidth; ++x) {
                temp+=(world[y][x].toString()+",");
            }
            temp+="], //"+y.toString()+"\n";
        }
        temp+="]";
        print(temp);
    }
}