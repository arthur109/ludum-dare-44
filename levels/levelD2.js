function getLevelD2() {
  return new Level(
    new Player(3, 3),
    new Map(
      [
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 4, 4, 4, -1, -1, -1, -1, -1, 4, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, 4, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [40, 32, 29, 31, 27, 33, 29, 30, 31, 31, 31, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 31, 33, 29, 27, 31, 36, ],
        [25, 26, 24, 15, 26, 26, 24, 22, 26, 26, 15, 13, 22, 20, 26, 26, 25, 20, 26, 18, 18, 15, 25, 22, 26, 15, 26, 24, 22, 26, ],
        [13, 19, 23, 26, 26, 22, 18, 17, 23, 19, 26, 23, 23, 18, 22, 19, 18, 19, 22, 17, 18, 18, 17, 18, 18, 22, 26, 19, 26, 26, ]
      ], [new RightSpring(10, 8), new RightSpring(10, 9), new RightSpring(10, 10), new Spring(20, 9),
        new Spring(21, 9), new Spring(22, 9), new LeftSpike(16, 1), new LeftSpike(16, 2), new LeftSpike(16, 3),
        new LeftSpring(25, 6), new LeftSpring(27, 2), new RightSpike(12, 1), new RightSpike(12, 2),
        new RightSpike(12, 3), new LeftSpike(19, 4), new BotSpike(20, 3), new BotSpike(21, 3), new BotSpike(22, 3),
        new TopSpike(20, 7), new TopSpike(21, 7), new TopSpike(22, 7), new LeftSpike(13, 8), new TopSpike(16, 9),
        new TopSpike(17, 9), new LeftSpike(19, 10), new BotSpike(13, 13), new BotSpike(14, 13), new BotSpike(15, 13),
        new BotSpike(16, 13), new BotSpike(17, 13), new BotSpike(18, 13), new BotSpike(19, 13), new BotSpike(18, 13),
        new BotSpike(18, 13), new BotSpike(18, 13), new RightSpike(24, 0), new RightSpike(24, 1), new RightSpike(24, 2),
        new RightSpike(24, 3), new RightSpike(24, 4), new RightSpike(24, 5), new RightSpike(24, 6), new RightSpike(24, 7),
        new RightSpike(24, 8), new RightSpike(24, 9), new Gem(27, 1), new Door(12, 14, 1), new Door(13, 14, 1),
        new Door(14, 14, 1), new Door(15, 14, 1), new Door(16, 14, 1), new Door(17, 14, 1), new Door(18, 14, 1), new Door(19, 14, 1),
        new Door(20, 14, 1), new Door(21, 14, 1), new Door(22, 14, 1), new Door(23, 14, 1), new Door(24, 14, 1)
      ], assets["background"]["forest"]
    ),
    new Map(
      [
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, 7, -1, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, 5, -1, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, 7, -1, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, 4, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, -1, -1, -1, 4, -1, -1, 8, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, 9, -1, 7, 5, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, ],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 8, -1, -1, -1, -1, -1, -1, ],
        [40, 32, 29, 31, 27, 33, 29, 30, 31, 31, 31, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 31, 33, 29, 27, 31, 36, ],
        [25, 26, 24, 15, 26, 26, 24, 22, 26, 26, 15, 13, 22, 20, 26, 26, 25, 20, 26, 18, 18, 15, 25, 22, 26, 15, 26, 24, 22, 26, ],
        [13, 19, 23, 26, 26, 22, 18, 17, 23, 19, 26, 23, 23, 18, 22, 19, 18, 19, 22, 17, 18, 18, 17, 18, 18, 22, 26, 19, 26, 26, ]
      ], [new RightSpring(10, 8), new RightSpring(10, 9), new RightSpring(10, 10), new Spring(20, 9),
        new Spring(21, 9), new Spring(22, 9), new LeftSpike(16, 1), new LeftSpike(16, 2), new LeftSpike(16, 3),
        new LeftSpring(25, 6), new LeftSpring(27, 2), new RightSpike(12, 1), new RightSpike(12, 2),
        new TopSpike(16, 9), new TopSpike(17, 9), new LeftSpike(19, 10), new BotSpike(13, 13), new BotSpike(14, 13), new BotSpike(15, 13),
        new BotSpike(16, 13), new BotSpike(17, 13), new BotSpike(18, 13), new RightSpike(24, 0), new RightSpike(24, 1), new RightSpike(24, 2),
        new RightSpike(24, 3), new RightSpike(24, 4), new RightSpike(24, 5), new RightSpike(24, 6), new RightSpike(24, 7),
        new RightSpike(24, 8), new Key(12, 4, 1), new Door(12, 14, 1), new Door(13, 14, 1),
        new Door(14, 14, 1), new Door(15, 14, 1), new Door(16, 14, 1), new Door(17, 14, 1), new Door(18, 14, 1), new Door(19, 14, 1),
        new Door(20, 14, 1), new Door(21, 14, 1), new Door(22, 14, 1), new Door(23, 14, 1), new Door(24, 14, 1)
      ], assets["background"]["darkforest"]
    )
  )
}
