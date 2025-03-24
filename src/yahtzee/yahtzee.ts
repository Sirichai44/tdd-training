export type Kind = 3 | 4
export type Straight = "SmallStraight" | "LargeStraight"
export type Dice = 1 | 2 | 3 | 4 | 5 | 6
export type Dices = [Dice, Dice, Dice, Dice, Dice]

export const sumScoreByTarget = (input: Dices, target: Dice) => {
  // if(input.length !== 5) return "Dice array length must be 5 long"
  // if(input.some(dice => dice < 1 || dice > 6)) return "Number in dice is not in range 1-6"
  // if(target < 1 || target > 6) return "Target must between 1-6"
  let sum = 0
  for (const dice of input) {
    if (dice === target) {
      sum += dice
    }
  }

  return sum
}

const countDice = (input: Dices) => {
  const countDice = Array(6).fill(0)
  for (const dice of input) {
    countDice[dice - 1]++
  }

  return countDice
}

export const valueOfKind = (input: Dices, kind:Kind) => {
  const count = countDice(input)

  const ofKind = count.some(count => count >= kind)
  if (!ofKind) return 0

  let sum = 0
  for (let i = 0; i < count.length; i++) {
    sum += (i + 1) * count[i]
  }  
  
  return sum
}

export const valueOfFullHouse = (input: Dices) => {
  const count = countDice(input)

  const threeOfKind = count.some(count => count === 3)
  const twoOfKind = count.some(count => count === 2)

  if (threeOfKind && twoOfKind) {
    return 25
  }
  return 0
}

export const valueOfStraight = (input: Dices, arrange:Straight) => {
  const sortDice = input.sort((a, b) => a - b)

  let straight = 1
  for (let i = 0; i < sortDice.length - 1; i++) {
    if (sortDice[i] + 1 === sortDice[i + 1]) {
      straight++
    }
  }

  if(straight < 4) return 0
  if (arrange === "SmallStraight" && straight === 4) return 30
  if (arrange === "LargeStraight" && straight === 5) return 40
}

export const valueOfChance = (input: Dices) => {
  let sum = 0
  for (const dice of input) {
    sum += dice
  }
  return sum
}

export const valueOfYahtzee = (input: Dices) => {
  const count = countDice(input)
  const yahtzee = count.some(count => count === 5)

  return yahtzee ? 50 : 0
}