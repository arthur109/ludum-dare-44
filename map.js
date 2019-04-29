


class Map{
    constructor(tileMap, nonStatic, background, damage){
        this.mapCode = {
            1: assets["tiles"]["inner"],
            2: assets["tiles"]["exterior"],
            3: assets["tiles"]["block"]
        };

        this.tileMap = tileMap;
        this.nonStatic = nonStatic;
        this.background = background;
        this.damage = damage
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

        level.player.health -= this.damage;
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
        var tileList = this.mapCode[type];
        return tileList[int(random(0, tileList.length))]
    }
}


