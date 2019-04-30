function preload(){
    assets = {
        "player":{
            "left":{
                "jump":importAllInFolder("assets/playerAnim/jumping/left/",7),
                "run":importAllInFolder("assets/playerAnim/running/left/",12),
                "fall":importAllInFolder("assets/playerAnim/falling/left/",5),
                "idle":importAllInFolder("assets/playerAnim/idle/left/",7),
            },
            "right":{
                "jump":importAllInFolder("assets/playerAnim/jumping/right/",7),
                "run":importAllInFolder("assets/playerAnim/running/right/",12),
                "fall":importAllInFolder("assets/playerAnim/falling/right/",5),
                "idle":importAllInFolder("assets/playerAnim/idle/right/",7),
            }

        },
        "background":{
            "forest":importImage("assets/backgrounds/forest.png"),
            "darkforest":importImage("assets/backgrounds/darkforest.png"),
            "hybrid-head":importImage("assets/backgrounds/hybrid-head.png")
        },
        "font":{
            "title":importFont("assets/fonts/title.ttf"),
            "standard":importFont("assets/fonts/standard.ttf"),
            // "tester":"fantasy"
        },
        "tiles": {
            "standard" : importAllInFolder("assets/tiles/exportedTiles/",45),
            // "inner":importAllInFolder("assets/tiles/inner/",10),
            // "exterior":importAllInFolder("assets/tiles/exterior/",5),
            // "block":importAllInFolder("assets/tiles/blocks/",4),
            "gem":importAllInFolder("assets/tiles/gem/",8),
            "spike":importImageOrientations("assets/tiles/spike/"),
            "spring":importImageOrientations("assets/tiles/spring/"),
            "textpad": importImage("assets/tiles/TextPad.png")
            },
        "audio": {
            "normal":importSound("assets/music/normal.mp3"),
            "hell":importSound("assets/music/hell.mp3"),
            "lobby":importSound("assets/music/lobby.mp3"),
        }
    }
}

function importAllInFolder(path, number){
    var imageArray = [];
    for(var i = 1; i<number; i++){

        var imageLink = "http://206.189.66.217/"+path+i.toString()+".png";
        console.log(imageLink);
        imageArray.push(loadImage(imageLink));
    }
    return imageArray;
}


function importImage(path){
        var imageLink = "http://206.189.66.217/"+path;
        console.log(imageLink);
        var image = loadImage(imageLink);
    return image;
}

function importSound(path){
    var imageLink = "http://206.189.66.217/"+path;
    console.log(imageLink);
    var image = loadSound(imageLink);
    return image;
}

function importFont(path){
    var imageLink = "http://206.189.66.217/"+path;
    console.log(imageLink);
    var image = loadFont(imageLink);
    return image;
}

function importImageOrientations(path){
    return {
        "bot":importImage(path+"bot.png"),
        "top":importImage(path+"top.png"),
        "left":importImage(path+"left.png"),
        "right":importImage(path+"right.png"),
    }
}
