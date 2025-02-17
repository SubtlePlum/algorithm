const [A,B] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let ans = A.toString(B).toUpperCase()
console.log(ans)
// let base = B<=10?B:String.fromCharCode(B+55)

// const digitConverter = (n) =>{
//     let digitNum = n<=10?n:String.fromCharCode(n+55)
//     return digitNum===0?"0":digitNum
// }

// let answer = ""

// let num = A
// while(true){
//     let div = Math.floor(num/B)
//     let rem = num%B
//     num = div
//     answer = digitConverter(rem)+answer
//     if(num<B){
//         break
//     }
// }
// console.log(digitConverter(num)+answer)




