class Player {
    constructor(x, y, health) {
        this.x = x;
        this.lastX = x;
        this.y = y;
        this.lastY = y;

        this.velX = 0.0;
        this.velY = 0.0;

        this.jumpPower = 0.36;
        this.moveSpeed = 0.2;
        this.gravity = 0.03;
        this.drag = 0.85;

        this.width = 0.5;
        this.height = 0.8;

        this.health = health;

        this.onGround = false;
        this.lastJumpKey = false;
        this.doubleJumpAvail = false;
        this.colliding = [];
        this.rightRunAnimation = new Animator(assets["player"]["right"]["run"], 3);
        this.leftRunAnimation = new Animator(assets["player"]["left"]["run"], 3);
        this.leftIdleAnimation  = new Animator(assets["player"]["left"]["idle"], 3);
        this.rightIdleAnimation  = new Animator(assets["player"]["right"]["idle"], 3);

    }

    update(level) {
        this.level = level;
        this._updateControls();
        this._move();
        this.onGround = false;
    }

    postUpdate() {
        let remaining = []

        this.colliding.forEach((e) => {
            if (!this._isBelow(e) && this._isAbove(e) && !this._isRightOf(e) && !this._isLeftOf(e)) {
                let offset = this._getCollideOffset(e);
                this.y += offset.y;
                this.velY = 0
                this.onGround = true;
                this.doubleJumpAvail = true;
            }
            else if (this._isBelow(e) && !this._isAbove(e) && !this._isRightOf(e) && !this._isLeftOf(e)) {
                let offset = this._getCollideOffset(e);
                this.y += offset.y;
                this.velY = 0
            }
            else if (!this._isBelow(e) && !this._isAbove(e) && this._isRightOf(e) && !this._isLeftOf(e)) {
                let offset = this._getCollideOffset(e);
                this.x += offset.x;
                this.velX = 0
            }
            else if (!this._isBelow(e) && !this._isAbove(e) && !this._isRightOf(e) && this._isLeftOf(e)) {
                let offset = this._getCollideOffset(e);
                this.x += offset.x;
                this.velX = 0
            }
            else {
                remaining.push(e);
            }
        });


        remaining.forEach((e) => {
            let offset = this._getCollideOffset(e);

            let offsetX = offset.x;
            let offsetY = offset.y;

            if (Math.abs(offsetX) < Math.abs(offsetY)) {
                offsetY = 0;
            } else {
                offsetX = 0;
            }

            this.x += offsetX;
            this.y += offsetY;
        });
        
        this.colliding.length = 0;
    }

    _getCollideOffset(rect) {
        return getCollideOffset(this.x, this.y, this.width, this.height, rect.x, rect.y, rect.w, rect.h);
    }

    _isBelow(rect) {
        return rect.y + rect.h < this.lastY;
    }

    _isAbove(rect) {
        return this.lastY + this.height < rect.y;
    }

    _isRightOf(rect) {
        return rect.x + rect.w < this.lastX;
    }

    _isLeftOf(rect) {
        return this.lastX + this.width < rect.x;
    }

    draw() {
        noStroke();
        fill(0, 0, 255);
        imageMode(CORNER);
        // print(this.runAnimation.getFrame());

        let xOffset = -0.28;
        if(abs(this.velX) <= 0.05){
            if(abs(this.velX)/this.velX >= 0){
                image(this.rightIdleAnimation.getFrame(), tp(this.x + xOffset), tp(this.y), tp(1.0), tp(1.0));
            }else{
                image(this.leftIdleAnimation.getFrame(), tp(this.x + xOffset), tp(this.y), tp(1.0), tp(1.0));
            }
        }
        if(abs(this.velX)/this.velX >= 0){
            image(this.rightRunAnimation.getFrame(), tp(this.x + xOffset), tp(this.y), tp(1.0), tp(1.0));
        }else{
            image(this.leftRunAnimation.getFrame(), tp(this.x + xOffset), tp(this.y), tp(1.0), tp(1.0));
        }

        // rect( tp(this.x), tp(this.y), tp(1.0), tp(1.0));
    }

    onCollideStatic(x, y, w, h) {
        this.colliding.push({x: x, y: y, w: w, h: h});
    }

    _updateControls() {
        if (keyIsDown(65) || keyIsDown(37)) { // moving left
            this.velX = -this.moveSpeed;
        }
        if (keyIsDown(68) || keyIsDown(39)) { // moving right
            this.velX = +this.moveSpeed;
        }
        
        if (keyIsDown(87) || keyIsDown(38)) { // jumping
            if (this.onGround) {
                this.velY = -this.jumpPower;
            } else {
                if (this.doubleJumpAvail && this.lastJumpKey == false) {
                    this.velY = -this.jumpPower;
                    this.doubleJumpAvail = false;
                }
            }
            this.lastJumpKey = true;
        } else {
            this.lastJumpKey = false;
        }

        if (keyIsDown(75) || keyIsDown(88)) {
            this.level.currentMap = this.level.otherMap;
        } else {
            this.level.currentMap = this.level.defaultMap;
        }
    }

    _move() {
        this.velY += this.gravity;

        this.velX = clampMag(this.velX, Math.abs(this.velX) - (this.onGround ? 0.06 : 0.015));

        this.lastX = this.x;
        this.lastY = this.y;

        this.x += this.velX;
        this.y += this.velY;
    }

}
