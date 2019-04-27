function preload(){
    imageAssests = {
        "player":{
            "jump-launch":importAllInFolder("assets/playerAnim/jumping/launching",2),
            "jump-inair":importAllInFolder("assets/playerAnim/jumping/inAir",4),
            "run":importAllInFolder("assets/playerAnim/running/",11),
            "fall":importAllInFolder("assets/playerAnim/falling/",4),
            "idle":importAllInFolder("assets/playerAnim/idle/",1),
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

