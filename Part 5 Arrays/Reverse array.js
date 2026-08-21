let prompt = require("prompt-sync")();

let arr = [10,30,40,40,40,50,80]
let rev = []
let ele = arr.length-1

for(let i = 0; i<=ele; i++){
    rev[i] = arr[ele-i]
}


console.log(rev)