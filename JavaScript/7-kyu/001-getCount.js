// function getCount(str) {
//     let count = 0
//     for(let i in str){
//         if(str[i] == "a" || str[i] == "i" || str[i] == "u" || str[i] == "e" || str[i] == "o"){
//             count++
//         }
//     }
//     return count
// }

// function getCount(str) {
//     return str.split('').filter((n) => n == "a" || n == "i" || n == "u" || n == "e" || n == "o").length
// }

// const getCount = (str) => str.split('').filter((n) => n == "a" || n == "i" || n == "u" || n == "e" || n == "o").length

const getCount = (str) => str.match(/[aiueo]/ig).length

console.log(getCount("abricodubre ifhsasasa"))