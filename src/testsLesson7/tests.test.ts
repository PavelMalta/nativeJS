import {addFriends, copyStudent, deepCopyStudent, multi, StudentType, subtraction, sum} from "./tests"


let a: number
let b: number
let student: StudentType = {
    name: "Bob",
    isStudent: true,
    friends: ["Adam", "Helen"]
}

let stGroup: Array<StudentType> = [
    {
        name: "Bob",
        isStudent: true,
        friends: []
    },
    {
        name: "Alex",
        isStudent: false,
        friends: []
    },
    {
        name: "Helen",
        isStudent: true,
        friends: []
    },
    {
        name: "Donald",
        isStudent: true,
        friends: []
    }
]

beforeEach(() => {
    a = 6
    b = 2
})

test("get sum", () => {
    expect(sum(a, b)).toBe(8)
})

test("get multi", () => {
    expect(multi(a, b)).toBe(12)

})

test("get subtraction", () => {
    expect(subtraction(a, b)).toBe(4)

})

test("get copy student", () => {
    expect(student.friends === copyStudent(student).friends).toBe(true)
} )

test("get deep copy student", () => {
    expect(student.friends === deepCopyStudent(student).friends).toBe(false)
} )

test("add friends students", () => {
    expect(addFriends(stGroup) === stGroup).toBe(false)
    expect(addFriends(stGroup)[1].name).toBe('Alex')
    expect(addFriends(stGroup)[1].friends.includes("Alex")).toBe(false)
} )

