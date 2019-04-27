class Player {
    constructor(x, y, health) {
        this.x = x;
        this.lastX = x;
        this.y = y;
        this.lastY = y;

        this.velX = 0.0;
        this.velY = 0.0;

        this.jumpPower = 0.4;
        this.moveSpeed = 0.2;
        this.gravity = 0.01;
        this.drag = 0.98;

        this.width = 0.6;
        this.height = 0.6;

        this.health = health;
    }

    update() {
        this._updateControls();
        this._move();
    }

    draw(graphics) {
        graphics.noStroke();
        graphics.fill(0, 0, 255);
        graphics.rectMode(CENTER);
        graphics.rect(tp(this.x), tp(this.y), tp(1.0), tp(1.0));
    }

    _updateControls() {
        if (keyIsDown(65) || keyIsDown(37)) { // moving left
            this.velX = -this.moveSpeed;
        }
        if (keyIsDown(68) || keyIsDown(39)) { // moving right
            this.velX = +this.moveSpeed;
        }
        if (keyIsDown(87) || keyIsDown(38)) { // jumping
            this.velY = +this.jumpPower;
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