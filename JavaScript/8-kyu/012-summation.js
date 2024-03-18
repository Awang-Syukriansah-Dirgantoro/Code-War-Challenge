// var summation = function (num) {
//     let sum = 0
//     for(let i = 0; i < num; i++){
//         sum += i+1
//     }
//     return sum
// }

// function summation(num) {
//     let sum = 0
//     for(let i = 0; i < num; i++){
//         sum += i+1
//     }
//     return sum
// }

// function summation(num) {
//     if (num == 1) {
//         return 1
//     } else {
//         return num + summation(num - 1)
//     }
// }

// const summation = (num) =>  num == 1 ? 1 : num + summation(num - 1)

const summation = n => n * (n + 1) / 2;

console.log(summation(8))