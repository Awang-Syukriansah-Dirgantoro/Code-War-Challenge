// function positiveSum(arr) {
//   let count = 0
//   for (var value in arr){
//     if (arr[value] > 0) {
//         count = count+arr[value]
//     }
//   }
//   return count
// }

// function positiveSum(arr) {
//     let count = arr.filter((x) => x > 0).reduce((acc, cur) => acc + cur, 0);
//     return count
// }

// const positiveSum = (arr) =>  arr.filter((x) => x > 0).reduce((acc, cur) => acc + cur, 0)

const positiveSum = arr => arr.reduce((acc, cur) => cur > 0 ? acc + cur : acc, 0)

console.log(positiveSum([1, -2, 3, 4, 5]))