class Level{
    constructor(player, defaultMap, otherMap, globalMap){
        this.player = player;

        this.defaultMap = defaultMap;
        this.otherMap = otherMap;
        this.globalMap = globalMap;

        this.currentMap = defaultMap;


    }

    update() {
        this.player.update();

    }



    draw() {
        this.defaultMap.draw();
        this.otherMap.draw();
        this.globalMap.draw();

        this.player.draw();


    }
}