function preload(){
    imageAssests = {
        player:{
            jump:importAllInFolder("assets/jumping/",6)
        }
    }
}

function importAllInFolder(path, number){
    var imageArray = [];
    for(var i = 1; i<number; i++){
        console.log(path+i.toString()+".png");
        imageArray.push(loadImage(path+i.toString()+".png"));
    }
    return imageArray;
}