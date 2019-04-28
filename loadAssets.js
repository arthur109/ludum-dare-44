function preload(){
    imageAssets = {
        "player":{
            "left":{
                "jump-launch":importAllInFolder("assets/playerAnim/jumping/launch/left/",2),
                "jump-inair":importAllInFolder("assets/playerAnim/jumping/inAir/left/",4),
                "run":importAllInFolder("assets/playerAnim/running/left/",11),
                "fall":importAllInFolder("assets/playerAnim/falling/left/",4),
                "idle":importAllInFolder("assets/playerAnim/idle/left/",1),
            },
            "right":{
                "jump-launch":importAllInFolder("assets/playerAnim/jumping/launch/right/",2),
                "jump-inair":importAllInFolder("assets/playerAnim/jumping/inAir/right/",4),
                "run":importAllInFolder("assets/playerAnim/running/right/",11),
                "fall":importAllInFolder("assets/playerAnim/falling/right/",4),
                "idle":importAllInFolder("assets/playerAnim/idle/right/",1),
            }

        }
    }
}

function importAllInFolder(path, number){
    var imageArray = [];
    for(var i = 1; i<number; i++){
        var imageLink = "https://arthur109.github.io/ludum-dare-44/"+path+i.toString()+".png";
        console.log(imageLink);
        imageArray.push(loadImage(imageLink));
    }
    return imageArray;
}

