import { Dices, Kind, Straight, sumScoreByTarget, valueOfChance, valueOfFullHouse, valueOfKind, valueOfStraight, valueOfYahtzee } from "./yahtzee";

describe("Sum Score by Target > Success Case", () => {
  describe("Target is 1", () => {
    it("Should be return 0", () => {
      const input:Dices = [6,5,2,3,3]
      const target = 1
      const expected = 0
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })

    it("Should be return 1", () => {
      const input:Dices = [2,3,3,3,1]
      const target = 1
      const expected = 1
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })

    it("Should be return 2", () => {
      const input:Dices = [2,1,3,2,1]
      const target = 1
      const expected = 2
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })
  });

  describe("Target is 2", () => {
    it("Should be return 0", () => {
      const input:Dices = [6,5,1,3,3]
      const target = 2
      const expected = 0
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })

    it("Should be return 2", () => {
      const input:Dices = [2,3,3,3,1]
      const target = 2
      const expected = 2
  
      const result = sumScoreByTarget(input, target)

      expect(result).toEqual(expected)
    })

    it("Should be return 4", () => {
      const input:Dices = [2,1,3,2,1]
      const target = 2
      const expected = 4
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })
  });

  describe("Target is 2", () => {
    it("Should be return 0", () => {
      const input:Dices = [6,5,1,3,3]
      const target = 2
      const expected = 0
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })

    it("Should be return 2", () => {
      const input:Dices = [2,3,3,3,1]
      const target = 2
      const expected = 2
  
      const result = sumScoreByTarget(input, target)

      expect(result).toEqual(expected)
    })

    it("Should be return 4", () => {
      const input:Dices = [2,1,3,2,1]
      const target = 2
      const expected = 4
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })
  });

  describe("Target is 3", () => {
    it("Should be return 0", () => {
      const input:Dices = [6,5,1,2,2]
      const target = 3
      const expected = 0
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })

    it("Should be return 3", () => {
      const input:Dices = [2,3,2,2,1]
      const target = 3
      const expected = 3
  
      const result = sumScoreByTarget(input, target)

      expect(result).toEqual(expected)
    })

    it("Should be return 6", () => {
      const input:Dices = [2,1,3,3,1]
      const target = 3
      const expected = 6
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })
  });

  describe("Target is 4", () => {
    it("Should be return 0", () => {
      const input:Dices = [6,5,1,2,2]
      const target = 4
      const expected = 0
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })

    it("Should be return 4", () => {
      const input:Dices = [2,4,2,2,1]
      const target = 4
      const expected = 4
  
      const result = sumScoreByTarget(input, target)

      expect(result).toEqual(expected)
    })

    it("Should be return 8", () => {
      const input:Dices = [2,1,4,4,1]
      const target = 4
      const expected = 8
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })
  });

  describe("Target is 5", () => {
    it("Should be return 0", () => {
      const input:Dices = [6,6,2,3,3]
      const target = 5
      const expected = 0
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })

    it("Should be return 10", () => {
      const input:Dices = [2,5,5,2,1]
      const target = 5
      const expected = 10
  
      const result = sumScoreByTarget(input, target)

      expect(result).toEqual(expected)
    })

    it("Should be return 15", () => {
      const input:Dices = [5,6,5,3,5]
      const target = 5
      const expected = 15
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })
  });

  describe("Target is 6", () => {
    it("Should be return 0", () => {
      const input:Dices = [1,5,2,3,3]
      const target = 6
      const expected = 0
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })

    it("Should be return 12", () => {
      const input:Dices = [5,6,5,6,5]
      const target = 6
      const expected = 12
  
      const result = sumScoreByTarget(input, target)

      expect(result).toEqual(expected)
    })

    it("Should be return 24", () => {
      const input:Dices = [6,6,6,6,1]
      const target = 6
      const expected = 24
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })
  });

  
});

describe("Sum Score by Target > Alternative Case", () => {
  describe.skip("[Handle by Typescript] Dice array length must be 5 long", () => {
    it("Dice array is empty", () => {
      // const input: number[] = []
      // const target = 1
      // const expected = "Dice array length must be 5 long"

      // const result = sumScoreByTarget(input, target)

      // expect(result).toEqual(expected)
    });

    it("Dice array length is 6", () => {
      // const input = [1,2,3,4,5,6]
      // const target = 1
      // const expected = "Dice array length must be 5 long"

      // const result = sumScoreByTarget(input, target)

      // expect(result).toEqual(expected)
    })
  });

  describe.skip("[Handle by Typescript] Number in dice is not in range 1-6", () => {
    it("Some number in dice out of range", () => {
      // const input = [7,7,1,1,1]
      // const target = 1
      // const expected = "Number in dice is not in range 1-6"

      // const result = sumScoreByTarget(input, target)

      // expect(result).toEqual(expected)
    })
  });

  describe.skip("[Handle by Typescript] Target is not in range 1-6", () => {
    it("Target is 7", () => {
      // const input = [1,1,1,1,1]
      // const target = 7
      // const expected = "Target must between 1-6"

      // const result = sumScoreByTarget(input, target)

      // expect(result).toEqual(expected)
    })
  });
});

describe("Three of a Kind > Success Case", () => {
  it("Should be return 0", () => {
    const input:Dices = [1,2,3,4,5]
    const kind:Kind = 3
    const expected = 0

    const result = valueOfKind(input, kind)

    expect(result).toEqual(expected)
  });

  it("Should be return 12", () => {
    const input:Dices = [2,3,3,3,1]
    const kind:Kind = 3
    const expected = 12

    const result = valueOfKind(input, kind)

    expect(result).toEqual(expected)
  })

  it("Should be return 25", () => {
    const input:Dices = [6,6,6,6,1]
    const kind:Kind = 3
    const expected = 25

    const result = valueOfKind(input, kind)

    expect(result).toEqual(expected)
  })
});

describe("Four of a Kind > Success Case", () => {
  it("Should be return 0", () => {
    const input:Dices = [1,2,1,1,3]
    const kind:Kind = 4
    const expected = 0

    const result = valueOfKind(input, kind)

    expect(result).toEqual(expected)
  });

  it("Should be return 20", () => {
    const input:Dices = [4,4,4,4,4]
    const kind:Kind = 4
    const expected = 20

    const result = valueOfKind(input, kind)

    expect(result).toEqual(expected)
  })

  it("Should be return 23", () => {
    const input:Dices = [5,5,3,5,5]
    const kind:Kind = 4
    const expected = 23

    const result = valueOfKind(input, kind)

    expect(result).toEqual(expected)
  })
})

describe("Three | Four of a Kind > Alternative Case", () => {
  it.skip("[Handle by Typescript] Kind must be a number", () => {})
  it.skip("[Handle by Typescript] Kind must be 3 or 4", () => {})
})

describe("Full House > Success Case", () => {
  it("Should be return 0", () => {
    const input:Dices = [1,2,1,4,3]
    const expected = 0

    const result = valueOfFullHouse(input)

    expect(result).toEqual(expected)
  });

  it("Should be return 25", () => {
    const input:Dices = [4,4,4,5,5]
    const expected = 25

    const result = valueOfFullHouse(input)

    expect(result).toEqual(expected)
  })

  it("Should be return 25", () => {
    const input:Dices = [5,5,3,3,5]
    const expected = 25

    const result = valueOfFullHouse(input)

    expect(result).toEqual(expected)
  })
})

describe("Small Straight > Success Case", () => {
  it("Should be return 0", () => {
    const input:Dices = [1,1,3,4,6]
    const straight:Straight = 'SmallStraight'
    const expected = 0

    const result = valueOfStraight(input, straight)

    expect(result).toEqual(expected)
  })

  it("Should be return 30", () => {
    const input:Dices = [1,2,3,4,6]
    const straight:Straight = 'SmallStraight'
    const expected = 30

    const result = valueOfStraight(input, straight)

    expect(result).toEqual(expected)
  })

  it("Should be return 30", () => {
    const input:Dices = [3,2,3,4,5]
    const straight:Straight = 'SmallStraight'
    const expected = 30

    const result = valueOfStraight(input, straight)

    expect(result).toEqual(expected)
  })
})

describe("Large Straight > Success Case", () => {
  it("Should be return 0", () => {
    const input:Dices = [1,1,3,4,6]
    const straight:Straight = 'LargeStraight'
    const expected = 0

    const result = valueOfStraight(input, straight)

    expect(result).toEqual(expected)
  })

  it("Should be return 40", () => {
    const input:Dices = [1,2,3,4,5]
    const straight:Straight = 'LargeStraight'
    const expected = 40

    const result = valueOfStraight(input, straight)

    expect(result).toEqual(expected)
  })

  it("Should be return 40", () => {
    const input:Dices = [6,3,4,2,5]
    const straight:Straight = 'LargeStraight'
    const expected = 40

    const result = valueOfStraight(input, straight)

    expect(result).toEqual(expected)
  })
})

describe("Small | Large Straight > Alternative Case", () => {
  it.skip("[Handle by Typescript] Straight must be a 'SmallStraight' or 'LargeStraight'", () => {})
})

describe("Chance > Success Case", () => {
  it("Should be return 15", () => {
    const input:Dices = [1,1,3,4,6]
    const expected = 15

    const result = valueOfChance(input)

    expect(result).toEqual(expected)
  });

  it("Should be return 18", () => {
    const input:Dices = [2,2,5,4,5]
    const expected = 18

    const result = valueOfChance(input)

    expect(result).toEqual(expected)
  })

  it("Should be return 19", () => {
    const input:Dices = [5,2,2,4,6]
    const expected = 19

    const result = valueOfChance(input)

    expect(result).toEqual(expected)
  })
})

describe("Yahtzee > Success Case", () => {
  it("Should be return 0", () => {
    const input:Dices = [1,1,3,4,6]
    const expected = 0

    const result = valueOfYahtzee(input)

    expect(result).toEqual(expected)
  })

  it("Should be return 50", () => {
    const input:Dices = [1,1,1,1,1]
    const expected = 50

    const result = valueOfYahtzee(input)

    expect(result).toEqual(expected)
  })

  it("Should be return 50", () => {
    const input:Dices = [3,3,3,3,3]
    const expected = 50

    const result = valueOfYahtzee(input)

    expect(result).toEqual(expected)
  })
})
