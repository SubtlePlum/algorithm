const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

if(input[0]>input[1]){
    console.log(">")
} else if(input[0]===input[1]){
console.log("==")
} else {
console.log("<")
}