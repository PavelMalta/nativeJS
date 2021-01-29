import {checkType,
    getBanknotesList,
    getSum, getSum1, getTriangleType, isEvenSumGreater, isEvenSumGreater1, isEvenSumGreater2, sum} from "./tasks"


test ("sum of numbers", () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15)
    expect(sum(1, 2, 3)).toBe(6)
    expect(sum(1, 3)).toBe(4)
})

test ("get type of numbers", () => {
    expect(checkType(1, 2, 3, 4, 5)).toBe(true)
})

test ("get triangle type", () => {
    expect(getTriangleType(3, 3, 3)).toBe("10")
    expect(getTriangleType(3, 2, 3)).toBe("01")
    expect(getTriangleType(3, 4, 5)).toBe("11")
    expect(getTriangleType(10, 4, 5)).toBe("00")
})

test ("is even sum greater", () => {
    expect(isEvenSumGreater([1,2,3,4,5])).toBe(true)
    expect(isEvenSumGreater([100,2,300,4,500])).toBe(true)
    expect(isEvenSumGreater([1,200,3,400,5])).toBe(false)
})
test ("is even sum greater 1", () => {
    expect(isEvenSumGreater1([1,2,3,4,5])).toBe(true)
    expect(isEvenSumGreater1([100,2,300,4,500])).toBe(true)
    expect(isEvenSumGreater1([1,200,3,400,5])).toBe(false)
})
test ("is even sum greater 2", () => {
    expect(isEvenSumGreater2([1,2,3,4,5])).toBe(true)
    expect(isEvenSumGreater2([100,2,300,4,500])).toBe(true)
    expect(isEvenSumGreater2([1,200,3,400,5])).toBe(false)
})

test ("get sum", () => {
    expect(getSum(2000)).toBe(2)
    expect(getSum(2010)).toBe(3)
    expect(getSum(9999)).toBe(36)
})

test ("get sum1", () => {
    expect(getSum1(2000)).toBe(2)
    expect(getSum1(2010)).toBe(3)
    expect(getSum1(9999)).toBe(36)
})

test("get banknote list", ()=> {
    const result1500 = getBanknotesList(1500)
    const result23 = getBanknotesList(23)
    expect(result1500[0]).toBe(1000)
    expect(result1500[1]).toBe(500)
    expect(result23[0]).toBe(20)
    expect(result23[1]).toBe(2)
    expect(result23[2]).toBe(1)

})
