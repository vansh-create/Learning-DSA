

let arr = [10,30,40,40,40]

let max = Math.max(arr[0], arr[1]);
let max_2 = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {

   if (arr[i] > max) {
      max_2 = max
      max = arr[i]
   }
   else if (arr[i]>max_2 && max != arr[i]) {
    max_2=arr[i]
   }

}

console.log(max)
console.log(max_2)