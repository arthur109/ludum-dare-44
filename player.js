class Player {
    constructor(x, y, health) {
        this.x = x;
        this.lastX = x;
        this.y = y;
        this.lastY = y;

        this.velX = 0.0;
        this.velY = 0.0;

        this.jumpPower = 0.1;
        this.moveSpeed = 0.1;
        this.gravity = 0.00;
        this.drag = 0.85;

        this.width = 0.6;
        this.height = 0.6;

        this.health = health;
        this.rightRunAnimation = new Animator(assets["player"]["right"]["run"], 3);
        this.leftRunAnimation = new Animator(assets["player"]["left"]["run"], 3);
        this.leftIdleAnimation  = new Animator(assets["player"]["left"]["idle"], 3);
        this.rightIdleAnimation  = new Animator(assets["player"]["right"]["idle"], 3);

    }

    update(level) {
        this.level = level;
        this._updateControls();
        this._move();
    }

    draw() {
        noStroke();
        fill(0, 0, 255);
        imageMode(CENTER);
        // print(this.runAnimation.getFrame());
        if(abs(this.velX) <= 0.05){
            if(abs(this.velX)/this.velX >= 0){
                image(this.rightIdleAnimation.getFrame(), tp(this.x), tp(this.y), tp(1.0), tp(1.0));
            }else{
                image(this.leftIdleAnimation.getFrame(), tp(this.x), tp(this.y), tp(1.0), tp(1.0));
            }
        }
        if(abs(this.velX)/this.velX >= 0){
            image(this.rightRunAnimation.getFrame(), tp(this.x), tp(this.y), tp(1.0), tp(1.0));
        }else{
            image(this.leftRunAnimation.getFrame(), tp(this.x), tp(this.y), tp(1.0), tp(1.0));
        }

        // rect( tp(this.x), tp(this.y), tp(1.0), tp(1.0));
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