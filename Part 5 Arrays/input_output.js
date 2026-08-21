let prompt = require("prompt-sync")();

// First Method

// let arr = []

// for(let i = 0; i<5; i++){
// let value = Number(prompt("Enter value = "))
// arr.push(value)
// }

// console.log(arr)


// Second Method

let arr = new Array(4)

for(let i=0; i<arr.length; i++){
    arr[i] = Number(prompt("Enter value = "))
}

console.log(arr)