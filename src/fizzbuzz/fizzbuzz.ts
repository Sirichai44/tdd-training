export const fizzbuzz = (input: number) => {
  if(input > 100 || input < 1){
    return "Input must have range 1-100"
  }
  
  const isFizz = input % 3 === 0
  const isBuzz = input % 5 === 0

  if(isFizz && isBuzz) return "FizzBuzz"
  if(isFizz) return "Fizz"
  if(isBuzz) return "Buzz"

  return input
}