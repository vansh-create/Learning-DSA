let arr = [7, 2, 5, 3, 6, 1]

let maxProfit = 0;
let min = arr[0]; 

for (let i = 1; i < arr.length; i++) {
   if(arr[i]<min){
    min = arr[i]
   }
   if(maxProfit < (arr[i]-min)){
    maxProfit = arr[i]-min
   }
}

console.log(maxProfit)