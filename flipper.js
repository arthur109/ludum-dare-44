
class Flipper {
  constructor(front, back) {
    this.front = front
    this.back = back

    this.rect_x = 0.0
    this.rect_size = 0.0

    this.flip_speed = 300.0
  }

  draw(g) {
    let edge_x = this.rect_x - this.rect_size / 2.0

    if (edge_x < 0) edge_x = 0
    if (edge_x > width) edge_x = width

    if (g) {
      if (this.rect_size < width)
        g.image(this.front, 0, 0)
      if (this.rect_size >= 1.0)
        g.image(this.back, edge_x, 0, this.rect_size, height, edge_x, 0, this.rect_size, height)
    } else {
      if (this.rect_size < width)
        image(this.front, 0, 0)
      if (this.rect_size >= 1.0)
        image(this.back, edge_x, 0, this.rect_size, height, edge_x, 0, this.rect_size, height)
    }
  }

  flip(x, y) {
    this.rect_x = x

    this.rect_size += this.flip_speed
    if (this.rect_size > width) this.rect_size = width
  }

  unflip(x, y) {
    this.rect_x = x

    this.rect_size -= this.flip_speed
    if (this.rect_size < 0) this.rect_size = 0
  }
}

