let prompt = require("prompt-sync")();

let arr = [4, 5, 9, 7, 12, 11, 10, 34, 22]

let max = arr[0];

for(let i=1; i<arr.length; i++){
   if(arr[i]>max){
    max = arr[i]
   }
}

console.log(max)