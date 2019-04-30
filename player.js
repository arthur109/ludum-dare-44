class Player extends Colliding {
    constructor(x, y) {
        super(x, y, 0.5, 0.8, "Player");

        this.velX = 0.0;
        this.velY = 0.0;

        this.jumpPower = 0.25;
        this.moveSpeed = 0.1;
        this.gravity = 0.02;
        this.drag = 0.85;

        this.health = 1;
        this.lastHorizDirection = 1;
        this.lastJumpKey = false;
        this.doubleJumpAvail = false;

        this.TextPadInfo = {
            "isOnTextPad" : false,
            "textPadText" : "",
            "xPos" : 0,
            "yPos" : 0

        }

        this.rightRunAnimation = new Animator(assets["player"]["right"]["run"], 3,0);
        this.leftRunAnimation = new Animator(assets["player"]["left"]["run"], 3,0);
        this.leftIdleAnimation  = new Animator(assets["player"]["left"]["idle"], 10,0);
        this.rightIdleAnimation  = new Animator(assets["player"]["right"]["idle"], 10,0);
        this.rightRisingAnimation  = new Animator(assets["player"]["right"]["jump"], 6,2);
        this.leftRisingAnimation  = new Animator(assets["player"]["left"]["jump"], 6,2);
        this.rightFallingAnimation  = new Animator(assets["player"]["right"]["fall"], 6,0);
        this.leftFallingAnimation  = new Animator(assets["player"]["left"]["fall"], 6,0);

    }

    update(level) {
        if (this.health <= 0.0001) kill();

        this.level = level;
        this._updateControls();
        this._move();

        ++this.spikeCollideCounter;

        this.checkCollisions(level);
        this.checkBlockers(level);
    }
    drawtext(){

    }
    draw() {
        noStroke();
        fill(0, 0, 255);
        imageMode(CORNER);
        let xOffset = -0.28;
        let yOffset = -0.05;
        // print(this.runAnimation.getFrame());
        if(this.velY < 0.0){
            if(this.lastHorizDirection >= 0){
                image(this.rightRisingAnimation.getFrame(), tp(this.x + xOffset), tp(this.y + yOffset), tp(1.0), tp(1.0));
            }else{
                image(this.leftRisingAnimation.getFrame(), tp(this.x + xOffset), tp(this.y + yOffset), tp(1.0), tp(1.0));
            }
        }else if(this.velY < 0.1 && !this.onGround){
            if(this.lastHorizDirection >= 0){
                image(this.rightFallingAnimation.getFrame(), tp(this.x + xOffset), tp(this.y + yOffset), tp(1.0), tp(1.0));
            }else{
                image(this.leftFallingAnimation.getFrame(), tp(this.x + xOffset), tp(this.y + yOffset), tp(1.0), tp(1.0));
            }
        } else if(this.velX === 0.0) {
            if(this.lastHorizDirection >= 0){
                image(this.rightIdleAnimation.getFrame(), tp(this.x + xOffset), tp(this.y + yOffset), tp(1.0), tp(1.0));
            }else{
                image(this.leftIdleAnimation.getFrame(), tp(this.x + xOffset), tp(this.y + yOffset), tp(1.0), tp(1.0));
            }
        }else if(this.velX >= 0){
            image(this.rightRunAnimation.getFrame(), tp(this.x + xOffset), tp(this.y + yOffset), tp(1.0), tp(1.0));
        }else{
            image(this.leftRunAnimation.getFrame(), tp(this.x + xOffset), tp(this.y + yOffset), tp(1.0), tp(1.0));
        }
        if(this.TextPadInfo["isOnTextPad"] === true){
              textSize(tileSize);
              fill(255);
              // rect(200,200,400,400)
              text(this.TextPadInfo["textPadText"],tp(this.TextPadInfo["xPos"]),tp(this.TextPadInfo["yPos"]));
        }
        this.TextPadInfo["isOnTextPad"] = false;

        // rect( tp(this.x), tp(this.y), tp(1.0), tp(1.0));
    }

    onCollide(collision) {
        super.onCollide(collision);

        switch(collision.type) {
            case "Spike": {
                if (collision.spikeCollideCounter > 3) {
                    this.health -= 0.25;
                }
                collision.spikeCollideCounter = 0;
                break;
            }
            case "Spring": {
                this.velY = collision.force;
                break;
            }
            case "TextPad": {
                this.TextPadInfo = {
                  "isOnTextPad" : true,
                  "textPadText" : collision.text.toString(),
                  "xPos" : collision.x,
                  "yPos" : collision.y-2
                }
                print(collision.x)
                break;
            }
            case "Gem": {
                win();
                console.log("you win");
                break;
            }
            case "Crate": {
                if (this._isLeftOf(collision)) collision.move(0.15);
                else if (this._isRightOf(collision)) collision.move(-0.15);
            }
        }

    }

    onCollideOver() {
        kill();
        return true;
    }

    _updateControls() {
        if (keyIsDown(65) || keyIsDown(37)) { // moving left
            this.velX = -this.moveSpeed;
            this.lastHorizDirection = this.velX
        }
        if (keyIsDown(68) || keyIsDown(39)) { // moving right
            this.velX = +this.moveSpeed;
            this.lastHorizDirection = this.velX

        }

        if (this.onGround) {
            this.doubleJumpAvail = true;
        }

        if (keyIsDown(87) || keyIsDown(38)) { // jumping
            if (this.onGround) {
                this._jump();
            } else {
                if (this.doubleJumpAvail && this.lastJumpKey == false) {
                    this._jump();
                    this.doubleJumpAvail = false;
                }
            }
            this.lastJumpKey = true;
        } else {
            this.lastJumpKey = false;
        }

        if (keyIsDown(76)) {
            this.level.peeking = true;
        } else {
            this.level.peeking = false;
        }
    }

    _jump(){
        this.rightRisingAnimation.reset();
        this.leftRisingAnimation.reset();
        this.velY = -this.jumpPower;
    }
    _move() {
        if (this.velY > 0.0 && this.onGround) this.velY = 0;
        if (this.velY < 0.0 && this.onCeil) this.velY = 0;

        if (this.velX > 0.0 && this.onLeft) this.velX = 0;
        if (this.velX < 0.0 && this.onRight) this.velX = 0;

        this.velY += this.gravity;

        this.velX = clampMag(this.velX, Math.abs(this.velX) - (this.onGround ? 0.03 : 0.015));

        if (this.velY > 0)
            this.velY = clampMag(this.velY, 0.35);

        this.x += this.velX;
        this.y += this.velY;
    }

}
