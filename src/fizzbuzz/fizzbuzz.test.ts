import { fizzbuzz } from "./fizzbuzz"

describe("Success Case", () => {
  it("ต้องได้ 2 เมื่อส่ง input เป็น 2", () => {
    const input = 2
    const expected = 2
  
    const result = fizzbuzz(input)
  
    expect(result).toEqual(expected)
  })
  
  it("ต้องได้ Fizz เมื่อส่ง input เป็น 3",() => {
    const input = 3
    const expected = "Fizz"
  
    const result = fizzbuzz(input)
  
    expect(result).toEqual(expected)
  })
  
  it("ต้องได้ Buzz เมื่อส่ง input เป็น 5",() => {
    const input = 5
    const expected = "Buzz"
  
    const result = fizzbuzz(input)
  
    expect(result).toEqual(expected)
  })
  
  it("ต้องได้ 8 เมื่อส่ง input เป็น 8",() => {
    const input = 8
    const expected = 8
  
    const result = fizzbuzz(input)
  
    expect(result).toEqual(expected)
  })
  
  it("ต้องได้ Fizz เมื่อส่ง input เป็น 9",() => {
    const input = 9
    const expected = "Fizz"
  
    const result = fizzbuzz(input)
  
    expect(result).toEqual(expected)
  })
  
  it("ต้องได้ 13 เมื่อส่ง input เป็น 13",() => {
    const input = 13
    const expected = 13
  
    const result = fizzbuzz(input)
  
    expect(result).toEqual(expected)
  })
  
  it("ต้องได้ FizzBuzz เมื่อส่ง input เป็น 15",() => {
    const input = 15
    const expected = "FizzBuzz"
  
    const result = fizzbuzz(input)
  
    expect(result).toEqual(expected)
  })
  
  it("ต้องได้ Buzz เมื่อส่ง input เป็น 25",() => {
    const input = 25
    const expected = "Buzz"
  
    const result = fizzbuzz(input)
  
    expect(result).toEqual(expected)
  })
  
  it("ต้องได้ FizzBuzz เมื่อส่ง input เป็น 30",() => {
    const input = 30
    const expected = "FizzBuzz"
  
    const result = fizzbuzz(input)
  
    expect(result).toEqual(expected)
  })
})

describe("Alternative Case", () => {
  it("ต้องได้ Input must have range 1-100 เมื่อส่ง input เป็น 101",() => {
    const input = 101
    const expected = "Input must have range 1-100"
  
    const result = fizzbuzz(input)
  
    expect(result).toEqual(expected)  
  })

  it("ต้องได้ Input must have range 1-100 เมื่อส่ง input เป็น -1",() => {
    const input = -1
    const expected = "Input must have range 1-100"
  
    const result = fizzbuzz(input)
  
    expect(result).toEqual(expected)  
  })
})