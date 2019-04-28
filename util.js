function isColliding(x1, y1, w1, h1, x2, y2, w2, h2) {
    let x_intersect = x1 + w1 > x2 && x1 < x2 + w2;
    let y_intersect = y1 + h1 > y2 && y1 < y2 + h2;

    return x_intersect && y_intersect;
}

function getCollideOffset(x1, y1, w1, h1, x2, y2, w2, h2) {
    let x_move = 0.0;
    let y_move = 0.0;

    let x_right = x1 + w1 - x2;
    let x_left = x2 + w2 - x1;

    if (x_right < x_left) {
        x_move = -x_right - 0.00001;
    } else {
        x_move = x_left + 0.00001;
    }

    let y_bottom = y1 + h1 - y2;
    let y_top = y2 + h2 - y1;

    if (y_bottom < y_top) {
        y_move = -y_bottom - 0.00001;
    } else {
        y_move = y_top + 0.00001;
    }

    return createVector(x_move, y_move);
}


function getShortestTranslation(x1, y1, w1, h1, x2, y2, w2, h2, dx, dy) {
    w1 -= 0.02;
    h1 -= 0.02;

    w2 -= 0.02;
    h2 -= 0.02;

    if (isColliding(x1, y1, w1, h1, x2, y2, w2, h2))
    {
        console.log("colliding");
        return null;
    }

    let d = createVector(dx, dy);

    let pnts1 = [
        createVector(x1 - 0.5 * w1, y1 - 0.5 * h1),
        createVector(x1 + 0.5 * w1, y1 - 0.5 * h1),
        createVector(x1 + 0.5 * w1, y1 + 0.5 * h1),
        createVector(x1 - 0.5 * w1, y1 + 0.5 * h1)
    ];

    let pnts2 = [
        createVector(x2 - 0.5 * w2, y2 - 0.5 * h2),
        createVector(x2 + 0.5 * w2, y2 - 0.5 * h2),
        createVector(x2 + 0.5 * w2, y2 + 0.5 * h2),
        createVector(x2 - 0.5 * w2, y2 + 0.5 * h2)
    ];

    let shortest_dist = Infinity;
    let shortest_vec = null;
    let shortest_edge = 0;
    let shortest_pnt = null;

    pnts1.forEach((p) => {
        let p2 = p5.Vector.add(p, d);

        for(let j = 0; j < pnts2.length; ++j) {
            let intersection = _lineIntersect(p, p2, pnts2[j], pnts2[(j+1) % pnts2.length]);

            if (intersection !== false) {
                let diff = p5.Vector.sub(intersection, p);
                let mag2 = diff.magSq();
                if (mag2 < shortest_dist) {
                    shortest_dist = mag2;
                    shortest_vec = diff;
                    shortest_edge = j;
                    shortest_pnt = intersection;
                }
            }
        }
    })

    if (shortest_vec === null) return null;

    return {vec: shortest_vec, mag2: shortest_dist, horz: shortest_edge % 2 == 0};
    
}

function clampMag(num, max) {
    if (max <= 0) return 0;

    if (num >= 0) {
        if (num > max)
            return max
        return num
    } else {
        if (num < -max)
            return -max
        return num
    }
}

function _lineIntersect(p1, p2, q1, q2) {

    r = p5.Vector.sub(p2, p1);
    s = p5.Vector.sub(q2, q1);
    p = p1;
    q = q1;

    rcs = _cross(r, s);

    if (rcs == 0.0) return false

    qsp = p5.Vector.sub(q, p);

    u = _cross(qsp, r) / rcs;
    t = _cross(qsp, s) / rcs;

    if (u >= 0.0 && u <= 1.0 && t >= 0.0 && t <= 1.0) {
        r.mult(t);
        return p5.Vector.add(p, r);
    } else {
        return false;
    }
}

function _cross(v, w) {
    return v.x * w.y - v.y * w.x;
}
