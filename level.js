class Level{
    constructor(player, defaultMap, otherMap, globalMap){
        this.player = player;

        this.defaultMap = defaultMap;
        this.otherMap = otherMap;
        this.globalMap = globalMap;

        this.currentMap = defaultMap;

        this.flipper = new Flipper(defaultMap.g, otherMap.g);

    }

    update() {
        this.player.update(this);

        this.globalMap.update(this);
        this.currentMap.update(this);

        this.player.postUpdate(this);
    }


    draw() {
        this.currentMap.render();

        if (this.currentMap === this.defaultMap) {
            this.flipper.unflip(width/2, height/2);
        } else {
            this.flipper.flip(width/2, height/2);
        }

        this.flipper.draw();

        this.globalMap.render();
        imageMode(CORNER);
        image(this.globalMap.g, 0, 0);

        this.player.draw();
    }
}
