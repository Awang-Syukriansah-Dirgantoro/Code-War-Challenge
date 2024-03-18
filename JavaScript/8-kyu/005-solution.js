// Reversed Strings

// function solution(str) {
//     let reverse = ''
//     for (let i = str.length-1; i>-1 ; i--) {
//         reverse += str[i]
//     }
//     return reverse
// }


// function solution(str) {
//     let reverse = str.split("").reverse().join("")
//     return reverse
// }

const solution = (str) =>  str.split("").reverse().join("")

console.log(solution('world'))