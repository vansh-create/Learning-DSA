let arr = [1, 2, 3, 4, 5, 8, 10]
let temp = new Array(arr.length)

let k = 7

for (let i = 0; i < arr.length; i++) {
   temp[i] = arr[(i+k)%arr.length]
}

for (let i = 0; i < arr.length; i++) {
   arr[i] = temp[i]
}

console.log(arr)