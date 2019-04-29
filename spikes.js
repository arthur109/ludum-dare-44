class Crate extends Colliding {
    constructor(x, y) {
        super(x + 0.1, y + 0.1, 0.8, 0.8);
    }

    update(level) {
        super.update(level);

        if (this._isColliding({x: level.player.x, y: level.player.y, w: level.player.width, h: level.player.height}))
            level.player.onCollide({x: this.x, y: this.y, w: this.width, h: this.height, type: "Crate", isBlocking: true, crate: this});

        level.currentMap.nonStatic.forEach((e) => {
            if (this._isColliding({x: e.x, y: e.y, w: e.width, h: e.height})) {
                e.onCollide({x: this.x, y: this.y, w: this.width, h: this.height, type: "Crate", isBlocking: true, crate: this});
            }
        })

        if (!this.onGround)
            this.y += 0.2;
    }

    draw(g) {
        g.fill(255, 0, 0);
        g.rect(tp(this.x), tp(this.y), tp(this.width), tp(this.height));
    }

    move(x) {
        this.x += x;
    }
}

class Key extends Colliding {
    constructor(x, y, doors) {
        super(x + 0.25, y + 0.25, 0.5, 0.5);
        this.doors = doors;
    }

    postUpdate(level) {
    }

    update(level) {
        super.update(level);

        if (this._isColliding({x: level.player.x, y: level.player.y, w: level.player.width, h: level.player.height})) {
            this.doors.forEach((e) => {e.open()});
        }

        this.doors.forEach((e) => {e.update(level)});
    }

    draw(g) {
        this.doors.forEach((e) => {e.draw(g)});
        g.fill(0, 255, 0);
        g.rect(tp(this.x), tp(this.y), tp(this.width), tp(this.height));
    }
}

class Door extends Colliding {
    constructor(x, y) {
        super(x, y, 1.0, 1.0);
        this.opened = false;
    }

    postUpdate(level) {
    }

    update(level) {
        if (!this.opened)
            if (this._isColliding({x: level.player.x, y: level.player.y, w: level.player.width, h: level.player.height})) 
                level.player.onCollide({x: this.x, y: this.y, w: this.width, h: this.height, isBlocking: true});
    }

    draw(g) {
        if (!this.opened) {
            g.fill(100);
            g.rect(tp(this.x), tp(this.y), tp(this.width), tp(this.height));
        }
    }

    open() {
        this.opened = true;
    }
}

class BotSpike extends Colliding {
    constructor(x, y, damage) {
        super(x, y + 0.5, 1.0, 0.5);

        this.lastCollide = false;

        this.damage = 0.25;

        if (damage !== undefined) {
            this.damage = damage;
        }
    }

    postUpdate(level) {
        // don't delete this function
    }

    update(level) {
        super.update(level);

        if (this._isColliding({x: level.player.x, y: level.player.y, w: level.player.width, h: level.player.height})) {
            if (!this.lastCollide) {
                level.player.onCollide({x: this.x, y: this.y, w: this.width, h: this.height, type: "Damage", damage: 0.25});
            }
            this.lastCollide = true;
        } else {
            this.lastCollide = false;
        }
    }

    draw(g) {
        g.fill(255, 0, 0);
        g.image(assets["tiles"]["spike"]["bot"],tp(this.x), tp(this.y), tp(this.width), tp(this.height));
    }
}

class RightSpike extends Colliding {
    constructor(x, y, damage) {
        super(x+ 0.5, y , 0.5, 1);

        this.lastCollide = false;

        this.damage = 0.25;

        if (damage !== undefined) {
            this.damage = damage;
        }
    }

    postUpdate(level) {
        // don't delete this function
    }

    update(level) {
        super.update(level);

        if (this._isColliding({x: level.player.x, y: level.player.y, w: level.player.width, h: level.player.height})) {
            if (!this.lastCollide) {
                level.player.onCollide({x: this.x, y: this.y, w: this.width, h: this.height, type: "Damage", damage: 0.25});
            }
            this.lastCollide = true;
        } else {
            this.lastCollide = false;
        }
    }

    draw(g) {
        g.fill(255, 0, 0);
        g.image(assets["tiles"]["spike"]["right"],tp(this.x), tp(this.y), tp(this.width), tp(this.height));
    }
}

class LeftSpike extends Colliding {
    constructor(x, y, damage) {
        super(x, y , 0.5, 1);

        this.lastCollide = false;

        this.damage = 0.25;

        if (damage !== undefined) {
            this.damage = damage;
        }
    }

    postUpdate(level) {
        // don't delete this function
    }

    update(level) {
        super.update(level);

        if (this._isColliding({x: level.player.x, y: level.player.y, w: level.player.width, h: level.player.height})) {
            if (!this.lastCollide) {
                level.player.onCollide({x: this.x, y: this.y, w: this.width, h: this.height, type: "Damage", damage: 0.25});
            }
            this.lastCollide = true;
        } else {
            this.lastCollide = false;
        }
    }

    draw(g) {
        g.fill(255, 0, 0);
        g.image(assets["tiles"]["spike"]["left"],tp(this.x), tp(this.y), tp(this.width), tp(this.height));
    }
}

class TopSpike extends Colliding {
    constructor(x, y, damage) {
        super(x, y , 1, 0.5);

        this.lastCollide = false;

        this.damage = 0.25;

        if (damage !== undefined) {
            this.damage = damage;
        }
    }

    postUpdate(level) {
        // don't delete this function
    }

    update(level) {
        super.update(level);

        if (this._isColliding({x: level.player.x, y: level.player.y, w: level.player.width, h: level.player.height})) {
            if (!this.lastCollide) {
                level.player.onCollide({x: this.x, y: this.y, w: this.width, h: this.height, type: "Damage", damage: 0.25});
            }
            this.lastCollide = true;
        } else {
            this.lastCollide = false;
        }
    }

    draw(g) {
        g.fill(255, 0, 0);
        g.image(assets["tiles"]["spike"]["top"],tp(this.x), tp(this.y), tp(this.width), tp(this.height));
    }
}

class Gem extends Colliding {
    constructor(x, y) {
        super(x, y,1.5,1.5);
        this.animator = new Animator(assets["tiles"]["gem"],4,0);
    }

    postUpdate(level) {
        // don't delete this function
    }

    update(level) {
        super.update(level);

        if (this._isColliding({x: level.player.x, y: level.player.y, w: level.player.width, h: level.player.height})) {
            level.player.onCollide({x: this.x, y: this.y, w: this.width, h: this.height, type: "Gem"});
        }
    }

    draw(g) {
        g.fill(255, 255, 0);
        g.image(this.animator.getFrame(), tp(this.x), tp(this.y), tp(this.width), tp(this.height));
    }
}

function addMove(obj, x2, y2, speed) {
    obj.init = createVector(obj.x, obj.y);
    obj.end = createVector(x2, y2);
    obj.speed = speed;

    obj.interp = 0.0;
    obj.__oldUpdate = obj.update;

    obj.update = function (level) {
        obj.__oldUpdate(level);

        obj.interp += obj.speed;

        if (obj.interp >= 1.0) {
            obj.interp = 1.0;
            obj.speed *= -1.0;
        } else if (obj.interp <= 0.0) {
            obj.interp = 0.0;
            obj.speed *= -1.0;
        }

        let vec = p5.Vector.lerp(obj.init, obj.end, obj.interp);

        obj.x = vec.x;
        obj.y = vec.y;
    }

    return obj;
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
        g.image(assets["tiles"]["spring"]["bot"], tp(this.x), tp(this.y), tp(this.width), tp(this.height));
    }
}

class Bird extends Colliding {
    constructor(x, y) {
        super(x - 0.5, y - 0.5, 0.5, 0.5);
    }

    update(level) {
        super.update(level);

        if (this._isColliding({x: level.player.x, y: level.player.y, w: level.player.width, h: level.player.height})) {
            level.player.onCollide({x: this.x, y: this.y, w: this.width, h: this.height, type: "BotSpike"});
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
