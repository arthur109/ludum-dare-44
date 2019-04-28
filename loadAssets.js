function preload(){
    assets = {
        "player":{
            "left":{
                "jump":importAllInFolder("assets/playerAnim/jumping/left/",6),
                "run":importAllInFolder("assets/playerAnim/running/left/",11),
                "fall":importAllInFolder("assets/playerAnim/falling/left/",4),
                "idle":importAllInFolder("assets/playerAnim/idle/left/",6),
            },
            "right":{
                "jump":importAllInFolder("assets/playerAnim/jumping/right/",6),
                "run":importAllInFolder("assets/playerAnim/running/right/",11),
                "fall":importAllInFolder("assets/playerAnim/falling/right/",4),
                "idle":importAllInFolder("assets/playerAnim/idle/right/",6),
            }

        },
        "background":{
            "forest":importImage("assets/backgrounds/forest.png"),
            "darkforest":importImage("assets/backgrounds/darkforest.png")
        },
        "font":{
            "title":importFont("assets/fonts/title.ttf"),
            "standard":importFont("assets/fonts/standard.ttf"),
            // "tester":"fantasy"
        },
        "tiles":{
            "inner":importAllInFolder("assets/tiles/inner/",10),
            "exterior":importAllInFolder("assets/tiles/exterior/",5),
            "block":importAllInFolder("assets/tiles/blocks/",4),
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


function importFont(path){
    var imageLink = "http://206.189.66.217/"+path;
    console.log(imageLink);
    var image = loadFont(imageLink);
    return image;
}
