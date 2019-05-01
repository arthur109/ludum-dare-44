function getLevelD1() {
  return new Level(
    new Player(3, 3),
    new Map(
      [
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, 1, 4, 4, 1, 4, 4, 1, 4, 4, 1, 1, 1, 4, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, 4, -1, -1, 5, 7, 4, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, 1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, 9, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, 1, -1, -1, 8, 2, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, 7, 2, 2, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, 1, -1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, 4, -1, -1, -1, 7, -1, ],
        [-1, -1, -1, -1, -1, -1, 4, 8, -1, -1, 2, -1, -1, -1, -1, -1, 2, -1, -1, 1, -1, -1, -1, -1, 2, -1, -1, -1, 2, -1, ],
        [-1, -1, -1, -1, -1, -1, 4, -1, -1, -1, 2, -1, -1, -1, -1, -1, 1, -1, -1, 4, -1, -1, -1, -1, 7, -1, -1, -1, 5, -1, ],
        [-1, -1, -1, -1, -1, -1, 1, -1, -1, 8, 1, -1, -1, -1, -1, -1, 2, -1, -1, 4, -1, -1, -1, -1, 7, -1, -1, -1, 2, -1, ],
        [-1, -1, -1, -1, -1, -1, 1, -1, -1, -1, 4, -1, -1, -1, -1, -1, 4, -1, -1, 1, -1, -1, -1, -1, 2, -1, -1, -1, 2, -1, ],
        [-1, -1, -1, -1, -1, -1, 4, 8, -1, -1, 2, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, 7, -1, -1, -1, 4, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 7, -1, ],
        [40, 31, 28, 31, 31, 31, 28, 34, 30, 33, 27, -1, 31, 30, 33, 27, 28, 31, 33, 30, 31, 28, 33, 27, 27, 28, 30, 31, 28, 42, ],
        [24, 18, 25, 20, 18, 22, 25, 18, 22, 25, 18, 24, 18, 25, 24, 18, 20, 18, 18, 24, 18, 20, 25, 18, 20, 24, 18, 22, 24, 25, ],
        [19, 13, 18, 6, 18, 3, 13, 18, 13, 18, 19, 18, 3, 13, 18, 3, 18, 20, 18, 13, 18, 13, 6, 18, 13, 19, 21, 18, 6, 13, ]
      ], [new BotSpike(27, 11), new RightSpike(27, 10), new RightSpike(15, 7), new RightSpike(15, 8), new RightSpike(15, 9),
        new RightSpike(15, 10), new LeftSpike(17, 7), new LeftSpike(17, 8), new LeftSpike(17, 9), new LeftSpike(17, 10),
        new RightSpike(18, 7), new RightSpike(18, 8), new RightSpike(18, 9), new RightSpike(18, 10)
      ], assets["background"]["forest"]
    ),
    new Map(
      [
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, 2, 5, 7, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, 4, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, 4, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, 4, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, 7, -1, ],
        [-1, -1, -1, -1, -1, -1, 4, -1, -1, -1, 4, -1, -1, -1, -1, -1, 4, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, 2, -1, ],
        [-1, -1, -1, -1, -1, -1, 4, -1, -1, -1, 4, -1, -1, -1, -1, -1, 4, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, 5, -1, ],
        [-1, -1, -1, -1, -1, -1, 4, -1, -1, -1, 4, -1, -1, -1, -1, -1, 4, -1, -1, 4, -1, -1, -1, -1, -1, 4, -1, -1, 2, -1, ],
        [-1, -1, -1, -1, -1, -1, 4, -1, -1, -1, 4, -1, -1, -1, -1, -1, 4, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, 2, -1, ],
        [-1, -1, -1, -1, -1, -1, 4, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, -1, ],
        [40, 31, 28, 31, 31, 31, 28, 34, 30, 33, 27, -1, 31, 30, 33, 27, 28, 31, 33, 30, 31, 28, 33, 27, 27, 28, 30, 31, 28, 42, ],
        [24, 18, 25, 20, 18, 22, 25, 18, 22, 25, 18, 24, 18, 25, 24, 18, 20, 18, 18, 24, 18, 20, 25, 18, 20, 24, 18, 22, 24, 25, ],
        [19, 13, 18, 6, 18, 3, 13, 18, 13, 18, 19, 18, 3, 13, 18, 3, 18, 20, 18, 13, 18, 13, 6, 18, 13, 19, 21, 18, 6, 13, ]
      ], [new Key(18, 2, 1), new Key(18, 6, 2), new BotSpike(17, 10), new BotSpike(18, 10), new RightSpike(9, 5), new RightSpike(9, 6),
        new RightSpike(9, 7), new TopSpike(8, 2), new RightSpike(18, 7), new RightSpike(18, 8),
        new RightSpike(18, 9), new BotSpike(25, 8), new LeftSpike(17, 8), new LeftSpike(17, 9),
        new RightSpike(15, 7), new RightSpike(15, 8), new RightSpike(15, 9), new RightSpike(15, 10)
      ],
      assets["background"]["darkforest"]
    ),
    new Map(
      [], [new Door(11, 9, 1), new Door(10, 12, 1), new Door(11, 13, 2), new Crate(11, 12), new Crate(11, 8), new Gem(26, 0)],
      undefined, 0
    ), 10
  )
}
