// function countSheeps(sheep) {
//     let count = 0
//     for (let i in sheep){
//         if (sheep[i]){
//             count++
//         }
//     }
//     return count
// }

// function countSheeps(sheep) {
//     return sheep.filter((n)=>n).length
// }

const countSheeps = (sheep) => sheep.filter((n)=>n).length

console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]))
console.log(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]))