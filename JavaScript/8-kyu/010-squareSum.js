// function squareSum(numbers) {
//     let count = 0
//     for (let number in numbers) {
//         count += numbers[number] * numbers[number]
//     }
//     return count
// }

// function squareSum(numbers) {
//     return numbers.map((number) => number * number).reduce((acc, cur) => acc + cur, 0)
// }

// function squareSum(numbers) {
//     return numbers.reduce((acc, cur) => acc + cur * cur, 0)
// }

// const squareSum = (numbers) => numbers.reduce((acc, cur) => acc + cur * cur, 0)

const squareSum = (numbers) => numbers.reduce((acc, cur) => acc + Math.pow(cur, 2), 0)

console.log(squareSum([0, 3, 4, 5]))