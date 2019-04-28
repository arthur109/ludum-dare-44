class Map{
    constructor(tileMap, nonStatic, background){
        this.tileMap = tileMap;
        this.nonStatic = nonStatic;
        this.background = background;

        this.g = createGraphics(width, height);
    }

    update(level) {
        for (let y = 0; y < this.tileMap.length; ++y) {
            for (let x = 0; x < this.tileMap.length; ++x) {
                if (this.tileMap[y][x]) {
                    if (isColliding(x + 0.5, y + 0.5, 1.0, 1.0, level.player.x, level.player.y, level.player.width, level.player.height)) {
                        level.player.onCollideStatic(x + 0.5, y + 0.5, 1.0, 1.0);
                    }
                }
            }
        }
    }

    render() {
        if (this.background) {
            this.g.background(this.background);
        } else {
            this.g.clear();
        }

        this.g.fill(220);
        this.g.rectMode(CORNER);

        for (let y = 0; y < this.tileMap.length; ++y) {
            for (let x = 0; x < this.tileMap.length; ++x) {
                if (this.tileMap[y][x]) {
                    this.g.rect(tp(x), tp(y), tp(1.0), tp(1.0));
                }
            }
        }
    }
}
