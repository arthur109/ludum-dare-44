class Map{
    constructor(tileMap, nonStatic, background){
        this.tileMap = tileMap;
        this.nonStatic = nonStatic;
        this.background = background;

        this.g = createGraphics(width, height);
    }

    update() {

    }

    render() {
        this.g.clear();
        if (this.background) {
            this.g.background(this.background);
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