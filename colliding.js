class Colliding {
    constructor(x, y, width, height) {
        this.x = x;
        this.lastX = x;
        this.y = y;
        this.lastY = y;

        this.width = width;
        this.height = height;

        this.onGround = false;
        this.onCeil = false;
        this.onLeft = false;
        this.onRight = false;

        this.blockers = [];
    }

    update(level) {
        this.lastX = this.x;
        this.lastY = this.y;
    }

    postUpdate(level) {
        let remaining = []

        this.onGround = false;
        this.onCeil = false;
        this.onLeft = false;
        this.onRight = false;

        this.blockers.forEach((e) => {
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

            if (Math.abs(offsetX) > 0.1 || Math.abs(offsetY) > 0.1) {
                this.onCollideOver();
            }

            this.x += offsetX;
            this.y += offsetY;
        });

        this.blockers.length = 0;
    }

    onCollideOver() {
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
}
