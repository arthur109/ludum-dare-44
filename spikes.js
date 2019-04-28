class Spikes extends Colliding {
    constructor(x, y) {
        super(x - 0.5, y, 1.0, 0.5);
    }

    update(level) {
        super.update(level);

        if (this._isColliding({x: level.player.x, y: level.player.y, w: level.player.width, h: level.player.height})) {
            level.player.onCollide({x: this.x, y: this.y, w: this.width, h: this.height, type: "Spikes", isBlocking: true});
        }
    }

    draw(g) {
        g.fill(255, 0, 0);
        g.rect(tp(this.x), tp(this.y), tp(this.width), tp(this.height));
    }
}
