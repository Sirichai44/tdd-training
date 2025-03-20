import { sumScoreByTarget } from "./yahtzee";

describe("Sum Score by Target > Success Case", () => {
  describe("Target is 1", () => {
    it("Should be return 0", () => {
      const input = [6,5,2,3,3]
      const target = 1
      const expected = 0
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })

    it("Should be return 1", () => {
      const input = [2,3,3,3,1]
      const target = 1
      const expected = 1
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })

    it("Should be return 2", () => {
      const input = [2,1,3,2,1]
      const target = 1
      const expected = 2
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })
  });

  describe("Target is 2", () => {
    it("Should be return 0", () => {
      const input = [6,5,1,3,3]
      const target = 2
      const expected = 0
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })

    it("Should be return 2", () => {
      const input = [2,3,3,3,1]
      const target = 2
      const expected = 2
  
      const result = sumScoreByTarget(input, target)

      expect(result).toEqual(expected)
    })

    it("Should be return 4", () => {
      const input = [2,1,3,2,1]
      const target = 2
      const expected = 4
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })
  });

  describe("Target is 2", () => {
    it("Should be return 0", () => {
      const input = [6,5,1,3,3]
      const target = 2
      const expected = 0
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })

    it("Should be return 2", () => {
      const input = [2,3,3,3,1]
      const target = 2
      const expected = 2
  
      const result = sumScoreByTarget(input, target)

      expect(result).toEqual(expected)
    })

    it("Should be return 4", () => {
      const input = [2,1,3,2,1]
      const target = 2
      const expected = 4
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })
  });

  describe("Target is 3", () => {
    it("Should be return 0", () => {
      const input = [6,5,1,2,2]
      const target = 3
      const expected = 0
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })

    it("Should be return 3", () => {
      const input = [2,3,2,2,1]
      const target = 3
      const expected = 3
  
      const result = sumScoreByTarget(input, target)

      expect(result).toEqual(expected)
    })

    it("Should be return 6", () => {
      const input = [2,1,3,3,1]
      const target = 3
      const expected = 6
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })
  });

  describe("Target is 4", () => {
    it("Should be return 0", () => {
      const input = [6,5,1,2,2]
      const target = 4
      const expected = 0
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })

    it("Should be return 4", () => {
      const input = [2,4,2,2,1]
      const target = 4
      const expected = 4
  
      const result = sumScoreByTarget(input, target)

      expect(result).toEqual(expected)
    })

    it("Should be return 8", () => {
      const input = [2,1,4,4,1]
      const target = 4
      const expected = 8
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })
  });

  describe("Target is 5", () => {
    it("Should be return 0", () => {
      const input = [6,6,2,3,3]
      const target = 5
      const expected = 0
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })

    it("Should be return 10", () => {
      const input = [2,5,5,2,1]
      const target = 5
      const expected = 10
  
      const result = sumScoreByTarget(input, target)

      expect(result).toEqual(expected)
    })

    it("Should be return 15", () => {
      const input = [5,6,5,3,5]
      const target = 5
      const expected = 15
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })
  });

  describe("Target is 6", () => {
    it("Should be return 0", () => {
      const input = [1,5,2,3,3]
      const target = 6
      const expected = 0
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })

    it("Should be return 12", () => {
      const input = [5,6,5,6,5]
      const target = 6
      const expected = 12
  
      const result = sumScoreByTarget(input, target)

      expect(result).toEqual(expected)
    })

    it("Should be return 24", () => {
      const input = [6,6,6,6,1]
      const target = 6
      const expected = 24
  
      const result = sumScoreByTarget(input, target)
  
      expect(result).toEqual(expected)
    })
  });

  
});

describe("Sum Score by Target > Alternative Case", () => {
  describe("Dice array length must be 5 long", () => {
    it("Dice array is empty", () => {
      const input: number[] = []
      const target = 1
      const expected = "Dice array length must be 5 long"

      const result = sumScoreByTarget(input, target)

      expect(result).toEqual(expected)
    });

    it("Dice array length is 6", () => {
      const input = [1,2,3,4,5,6]
      const target = 1
      const expected = "Dice array length must be 5 long"

      const result = sumScoreByTarget(input, target)

      expect(result).toEqual(expected)
    })
  });

  describe("Number in dice is not in range 1-6", () => {
    it("Some number in dice out of range", () => {
      const input = [7,7,1,1,1]
      const target = 1
      const expected = "Number in dice is not in range 1-6"

      const result = sumScoreByTarget(input, target)

      expect(result).toEqual(expected)
    })
  });

  describe("Target is not in range 1-6", () => {
    it("Target is 7", () => {
      const input = [1,1,1,1,1]
      const target = 7
      const expected = "Target must between 1-6"

      const result = sumScoreByTarget(input, target)

      expect(result).toEqual(expected)
    })
  });
});