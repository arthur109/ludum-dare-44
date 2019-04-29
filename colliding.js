class Colliding {
    constructor(x, y, width, height, type, blocking) {
        this.x = x;
        this.lastX = x;
        this.y = y;
        this.lastY = y;

        this.width = width;
        this.height = height;

        this.w = width;
        this.h = height;

        this.onGround = false;
        this.onCeil = false;
        this.onLeft = false;
        this.onRight = false;

        this.type = type;

        this.blocking = false;
        
        if (blocking === true) {
            this.blocking = true;
        }
    }

    checkCollisions(level) {
        level.globalMap.nonStatic.forEach((e) => {
            if (e !== this) {
                let rect = {x: e.x, y: e.y, w: e.width, h: e.height};

                if (this._isColliding(rect)) {
                    this.onCollide(e, level);
                }
            }
        })
        level.currentMap.nonStatic.forEach((e) => {
            if (e !== this) {
                let rect = {x: e.x, y: e.y, w: e.width, h: e.height};

                if (this._isColliding(rect)) {
                    this.onCollide(e, level);
                }
            }
        })

        if (this !== level.player && this._isColliding(level.player)) {
            this.onCollide(level.player, level);
        }
    }

    checkBlockers(level) {
        let blockers = [];

        for (let y = 0; y < level.currentMap.tileMap.length; ++y) {
            for (let x = 0; x < level.currentMap.tileMap[y].length; ++x) {
                if (level.currentMap.tileMap[y][x]) {
                    let rect = {x: x, y: y, w: 1.0, h: 1.0};
                    if (this._isColliding(rect)) {
                        blockers.push(rect);
                    }
                }
            }
        }


        level.currentMap.nonStatic.forEach((e) => {
            if (e !== this) {
                let rect = {x: e.x, y: e.y, w: e.width, h: e.height};

                if (this._isColliding(rect)) {
                    if (e.blocking)
                        blockers.push(rect);
                }
            }
        })

        for (let y = 0; y < level.globalMap.tileMap.length; ++y) {
            for (let x = 0; x < level.globalMap.tileMap[y].length; ++x) {
                if (level.globalMap.tileMap[y][x]) {
                    let rect = {x: x, y: y, w: 1.0, h: 1.0};
                    if (this._isColliding(rect)) {
                        blockers.push(rect);
                    }
                }
            }
        }


        level.globalMap.nonStatic.forEach((e) => {
            if (e !== this) {
                let rect = {x: e.x, y: e.y, w: e.width, h: e.height};

                if (this._isColliding(rect)) {
                    if (e.blocking)
                        blockers.push(rect);
                }
            }
        })

        let remaining = []

        this.onGround = false;
        this.onCeil = false;
        this.onLeft = false;
        this.onRight = false;

        blockers.forEach((e) => {
            if (!this._isBelow(e) && this._isAbove(e) && !this._isRightOf(e) && !this._isLeftOf(e)) {
                let offset = this._getCollideOffset(e);
                this.y += offset.y;
                this.onGround = true;
            }
            else if (this._isBelow(e) && !this._isAbove(e) && !this._isRightOf(e) && !this._isLeftOf(e)) {
                let offset = this._getCollideOffset(e);
                this.y += offset.y;
                this.onCeil = true;
            }
            else if (!this._isBelow(e) && !this._isAbove(e) && this._isRightOf(e) && !this._isLeftOf(e)) {
                let offset = this._getCollideOffset(e);
                this.x += offset.x;
                this.onRight = true;
            }
            else if (!this._isBelow(e) && !this._isAbove(e) && !this._isRightOf(e) && this._isLeftOf(e)) {
                let offset = this._getCollideOffset(e);
                this.x += offset.x;
                this.onLeft = true;
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

            let handled;

            if (Math.abs(offsetX) > 0.4 || Math.abs(offsetY) > 0.4) {
                handled = this.onCollideOver();
            }

            if (handled !== true) {
                this.x += offsetX;
                this.y += offsetY;
            }
        });

        this.lastX = this.x;
        this.lastY = this.y;
    }

    update(level) {
    }

    onCollide(collision, level) {
    }

    onCollideOver() {
    }

    _getCollideOffset(rect) {
        return getCollideOffset(this.x, this.y, this.width, this.height, rect.x, rect.y, rect.w, rect.h);
    }

    _isColliding(rect) {
        return isColliding(this.x, this.y, this.width, this.height, rect.x, rect.y, rect.w, rect.h);
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
}
