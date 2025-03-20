export const sumScoreByTarget = (input: number[], target: number) => {
  if(input.length !== 5){
    return "Dice array length must be 5 long"
  }

  if(input.some(dice => dice < 1 || dice > 6)){
    return "Number in dice is not in range 1-6"
  }

  if(target < 1 || target > 6){
    return "Target must between 1-6"
  }

  return input.reduce((sum, dice) => dice === target ? sum + dice : sum, 0)
}