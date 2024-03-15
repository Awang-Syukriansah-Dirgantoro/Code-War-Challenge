// function makeNegative(num) {
//     return num < 0 ? num : -num
// }

// const makeNegative = (num) => num < 0 ? num : -num

const makeNegative = (num) => -Math.abs(num)

console.log(makeNegative(-42))