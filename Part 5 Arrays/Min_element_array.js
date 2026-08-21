let prompt = require("prompt-sync")();

let arr = [4, 5, 9, 7, 12, 11, 0.1, 1 ,0,-1]

let min = arr[0];

for(let i=1; i<arr.length; i++){
   if(arr[i]<min){
    min = arr[i]
   }
}

console.log(min)