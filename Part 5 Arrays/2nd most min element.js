

let arr = [10,30,40,40,40]

let min = Math.min(arr[0], arr[1]);
let min_2 = Math.max(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {

   if (arr[i] < min) {
      min_2 = min
      min = arr[i]
   }
   else if (arr[i]<min_2 && min != arr[i]) {
    min_2=arr[i]
   }

}

console.log(min)
console.log(min_2)