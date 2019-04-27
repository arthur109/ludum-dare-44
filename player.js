class Player {
    constructor(x, y, health) {
        this.x = x;
        this.lastX = x;
        this.y = y;
        this.lastY = y;

        this.velX = 0.0;
        this.velY = 0.0;

        this.jumpPower = 0.2;
        this.moveSpeed = 0.2;
        this.gravity = 0.00;
        this.drag = 0.85;

        this.width = 0.6;
        this.height = 0.6;

        this.health = health;
    }

    update(level) {
        this.level = level;
        this._updateControls();
        this._move();
    }

    draw() {
        noStroke();
        fill(0, 0, 255);
        rectMode(CENTER);
        rect(tp(this.x), tp(this.y), tp(1.0), tp(1.0));
    }

    _updateControls() {
        if (keyIsDown(65) || keyIsDown(37)) { // moving left
            this.velX = -this.moveSpeed;
        }
        if (keyIsDown(68) || keyIsDown(39)) { // moving right
            this.velX = +this.moveSpeed;
        }
        if (keyIsDown(87) || keyIsDown(38)) { // jumping
            this.velY = -this.jumpPower;
        }
        if (keyIsDown(83) || keyIsDown(40)) { // move down
            this.velY = +this.jumpPower;
        }
        if (keyIsDown(75) || keyIsDown(88)) {
            this.level.currentMap = this.level.otherMap;
        } else {
            this.level.currentMap = this.level.defaultMap;
        }
    }

    _move() {
        this.velY += this.gravity;

        this.velY *= this.drag;
        this.velX *= this.drag;

        this.lastX = this.x;
        this.lastY = this.y;

        this.x += this.velX;
        this.y += this.velY;
    }

}