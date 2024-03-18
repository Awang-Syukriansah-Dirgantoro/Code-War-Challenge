// function repeatStr (n, s) {
//     let str = ""
//     for(let i = 0; i < n; i++){
//         str += s
//     }
//     return str
// }

// function repeatStr (n, s) {
//     return s.repeat(n)
// }

// const repeatStr = (n, s) => s.repeat(n)

//another solution with recursive
function repeatStr (n, s) {
    return n == 1 ? s : s + repeatStr(n-1, s);
}

console.log(repeatStr(3, "*"))
console.log(repeatStr(5, "#"))
console.log(repeatStr(2, "ha "))