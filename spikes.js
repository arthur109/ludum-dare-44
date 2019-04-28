class MovingSpikes
class Spikes extends Colliding {
    constructor(x, y) {
        super(x, y + 0.5, 1.0, 0.5);
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

class Spring extends Colliding {
    constructor(x, y, force) {
        super(x, y + 0.5, 1.0, 0.5);
        this.force = force;
    }

    update(level) {
        super.update(level);

        if (this._isColliding({x: level.player.x, y: level.player.y, w: level.player.width, h: level.player.height})) {
            level.player.onCollide({x: this.x, y: this.y, w: this.width, h: this.height, type: "Spring", isBlocking: true, force: this.force});
        }
    }

    draw(g) {
        g.fill(0, 255, 0);
        g.rect(tp(this.x), tp(this.y), tp(this.width), tp(this.height));
    }
}

class Bird extends Colliding {
    constructor(x, y) {
        super(x - 0.5, y - 0.5, 0.5, 0.5);
    }

    update(level) {
        super.update(level);

        if (this._isColliding({x: level.player.x, y: level.player.y, w: level.player.width, h: level.player.height})) {
            level.player.onCollide({x: this.x, y: this.y, w: this.width, h: this.height, type: "Spikes"});
        }

        let xDiff = level.player.x - this.x;
        let yDiff = level.player.y - this.y;

        xDiff = clampMag(xDiff, 0.05);
        yDiff = clampMag(yDiff, 0.05);

        this.x += xDiff;
        this.y += yDiff;
    }

    draw(g) {
        g.fill(255, 0, 0);
        g.rect(tp(this.x), tp(this.y), tp(this.width), tp(this.height));
    }
}
