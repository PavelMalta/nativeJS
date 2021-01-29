// ...numbers собирает все входящие в функцию параметры в массив numbers - рестОператор
export function sum(...numbers: Array<number>) {
    return numbers.reduce((acc, item) => acc + item)
}

//Array.isArray(numbers) - метод который проверяет является ли numbers массивом, возвращает true или  false
export function checkType(...numbers: Array<number>) {
    return Array.isArray(numbers)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "01", если треугольник равнобедренный,
//  - "10", если треугольник равносторонний,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b >= c && b + c >= a && a + c >= b) {
        if (a === b && c === b) {
            return "10"
        } else if (a === b || a === c || c === b) {
            return "01"
        } else {
            return "11"
        }
    } else {
        return "00"
    }
}

// 3. Функция принимает isEvenSumGreater параметром массив чисел.
// Если сумма элементов массива с чётным индексом больше суммы элементов массива с нечётными индексами,
// то функция возвращает true. В противном случае - false.

export function isEvenSumGreater(numbers: Array<number>): boolean {
    let ch = 0;
    for (let i = 0; i < numbers.length; i = i + 2) {
        ch = ch + numbers[i];
    }
    let nch = 0;
    for (let i = 1; i < numbers.length; i = i + 2) {
        nch = nch + numbers[i];
    }
    return ch > nch
}

export function isEvenSumGreater1(numbers: Array<number>): boolean {
    let even = numbers.reduce((sum, num, index) => index % 2 === 0 ? sum + num : sum, 0)
    let notEven = numbers.reduce((sum, num, index) => index % 2 !== 0 ? sum + num : sum, 0)
    return even > notEven
}

export function isEvenSumGreater2(numbers: Array<number>): boolean {
    let sumEven = 0, sumOdd = 0
    numbers.forEach((num, i) => {
            if (i % 2 === 0) {
                sumEven = sumEven + num
            } else {
                sumOdd = sumOdd + num
            }
        }
    )
    return sumEven > sumOdd
}

// 4. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(num: number): number {
    let digits = num.toString().split('')
    let realDigits = digits.map(Number)
    return (realDigits.reduce((acc, item) => acc + item, 0))
}

export function getSum1(num: number): number {
    return 1
    //использовать остаток от деления на 10
}

// 5. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

export function getBanknotesList(num: number): Array<number> {
    return [1]
}