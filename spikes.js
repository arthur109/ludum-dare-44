class Crate extends Colliding {
    constructor(x, y) {
        super(x + 0.05, y, 0.95, 0.99999, "Crate", true);
        this.desiredMoveX = 0.0;
    }

    update(level) {
        if (!this.onGround)
            this.y += 0.2;

        this.x += this.desiredMoveX;
        this.desiredMoveX = 0;

        this.checkBlockers(level);
    }

    onCollideOver() {
        this.blocking = false;
    }

    draw(g) {
        if (this.blocking) {
            g.fill(255, 0, 0);
            g.image(assets["tiles"]["crate"],tp(this.x), tp(this.y), tp(this.width), tp(this.height));
        }
    }

    move(x) {
        this.desiredMoveX += x;
    }
}

class Key extends Colliding {
    constructor(x, y, id) {
        super(x + 0.25, y + 0.25, 0.5, 0.5, "Key");

        this.id = id;

        this.enabled = true;
    }

    onCollide(collision, level) {
        if (this.enabled) {
            super.onCollide(collision);

            switch(collision.type) {
                case "Player": {
                    this.enabled = false;

                    level.defaultMap.nonStatic.forEach((e) => {if (e.type === "Door" && e.id === this.id) e.open()});
                    level.otherMap.nonStatic.forEach((e) => {if (e.type === "Door" && e.id === this.id) e.open()});
                    level.globalMap.nonStatic.forEach((e) => {if (e.type === "Door" && e.id === this.id) e.open()});

                    break;
                }
            }
        }
    }

    update(level) {
        this.checkCollisions(level);
    }

    draw(g) {
        if (this.enabled) {
            g.fill(0, 255, 0);
            g.image(assets["tiles"]["key"], tp(this.x), tp(this.y), tp(this.width), tp(this.height));
        }
    }
}

class Door extends Colliding {
    constructor(x, y, id) {
        super(x, y, 1.0, 1.0, "Door", true);

        this.id = id;
    }

    update(level) {
    }

    draw(g) {
        if (this.blocking) {
            g.fill(100);
            g.image(assets["tiles"]["lock"], tp(this.x), tp(this.y), tp(this.width), tp(this.height));
        }
    }

    open() {
        this.blocking = false;
    }
}

class Spike extends Colliding {
    constructor(x, y, w, h, texture) {
        super(x, y, w, h, "Spike", false);

        this.damage = 0.25;
        this.texture = texture;
        this.spikeCollideCounter = 0;
    }

    update() {
        ++this.spikeCollideCounter;
    }

    draw(g) {
        g.fill(255, 0, 0);
        g.image(this.texture,tp(this.x), tp(this.y), tp(this.width), tp(this.height));
    }
}

class BotSpike extends Spike {
    constructor(x, y) {
        super(x, y + 0.5, 1.0, 0.5, assets["tiles"]["spike"]["bot"]);
    }
}

class RightSpike extends Spike {
    constructor(x, y, damage) {
        super(x+ 0.5, y , 0.5, 1, assets["tiles"]["spike"]["right"]);
    }
}

class LeftSpike extends Spike {
    constructor(x, y, damage) {
        super(x, y , 0.5, 1, assets["tiles"]["spike"]["left"]);
    }
}

class TopSpike extends Spike {
    constructor(x, y, damage) {
        super(x, y , 1, 0.5, assets["tiles"]["spike"]["top"]);
    }
}

class Gem extends Colliding {
    constructor(x, y) {
        super(x+0.25, y+0.25,0.5,0.5, "Gem");
        this.animator = new Animator(assets["tiles"]["gem"],4,0);
    }


    update(level) {
    }

    draw(g) {
        g.fill(255, 255, 0);
        g.image(this.animator.getFrame(), tp(this.x - 0.25), tp(this.y - 0.25), tp(1.0), tp(1.0));
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
        super(x, y + 0.5, 1.0, 0.5, "Spring");
        this.force = force;
    }

    update(level) {
    }

    draw(g) {
        g.fill(0, 255, 0);
        g.image(assets["tiles"]["spring"]["bot"], tp(this.x), tp(this.y), tp(this.width), tp(this.height));
    }
}

class TextPad extends Colliding {
    constructor(x, y, text) {
        super(x, y, 1.0, 1, "TextPad", false);
        this.text = text.toString();
    }

    update(level) {
    }

    draw(g) {
        g.fill(0, 255, 0);
        g.image(assets["tiles"]["textpad"], tp(this.x), tp(this.y), tp(this.width), tp(this.height));
    }
}

class Bird extends Colliding {
    constructor(x, y) {
        super(x - 0.5, y - 0.5, 0.5, 0.5, "Bird");
    }

    update(level) {
        let xDiff = level.player.x - this.x;
        let yDiff = level.player.y - this.y;

        xDiff = clampMag(xDiff, 0.05);
        yDiff = clampMag(yDiff, 0.05);

        this.x += xDiff;
        this.y += yDiff;

        this.checkBlockers(level);
    }

    draw(g) {
        g.fill(255, 0, 0);
        g.rect(tp(this.x), tp(this.y), tp(this.width), tp(this.height));
    }
}
