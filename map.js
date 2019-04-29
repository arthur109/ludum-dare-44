class Map{
    constructor(tileMap, nonStatic, background){

        this.tileMap = tileMap;
        this.nonStatic = nonStatic;
        this.background = background;
        this.g = createGraphics(width, height);

        for (let y = 0; y < this.tileMap.length; ++y) {
            for (let x = 0; x < this.tileMap[y].length; ++x) {
                if (this.tileMap[y][x] && this.tileMap[y][x]!== 0) {
                    this.tileMap[y][x] = this.chooseRandomTile(this.tileMap[y][x]);
                }
            }
        }
    }

    update(level) {
        this.nonStatic.forEach((e) => {
            e.update(level);
        });
        for (let y = 0; y < this.tileMap.length; ++y) {
            for (let x = 0; x < this.tileMap[y].length; ++x) {
                if (this.tileMap[y][x]) {
                    if (isColliding(x, y, 1.0, 1.0, level.player.x, level.player.y, level.player.width, level.player.height)) {
                        level.player.onCollide({x: x, y: y, w: 1.0, h: 1.0, isBlocking: true});
                    }

                    this.nonStatic.forEach((e) => {
                        if (isColliding(x, y, 1.0, 1.0, e.x, e.y, e.width, e.height)) {
                            e.onCollide({x: x, y: y, w: 1.0, h: 1.0, isBlocking: true});
                        }
                    });

                }
            }
        }
        // level.player.health -= this.damage;//only for hold-to-flip
    }

    postUpdate(level) {
        this.nonStatic.forEach((e) => {
            e.postUpdate(level);
        });
    }

    render() {
        if (this.background) {
            this.g.image(this.background,0,0,width, width*(this.background.height/this.background.width));
            // this.g.background(this.background);
        } else {
            this.g.clear();
        }

        this.g.fill(220);
        this.g.rectMode(CORNER);

        for (let y = 0; y < this.tileMap.length; ++y) {
            for (let x = 0; x < this.tileMap[y].length; ++x) {
                if (this.tileMap[y][x] && this.tileMap[y][x]!== 0) {
                    this.g.image(this.tileMap[y][x], tp(x), tp(y), tp(1.0), tp(1.0));
                }
            }
        }

        this.nonStatic.forEach((e) => {
            e.draw(this.g);
        });
    }
    chooseRandomTile(type){
        var tileList = assets["tiles"];
        return tileList[int(random(0, tileList.length))]
    }
}
