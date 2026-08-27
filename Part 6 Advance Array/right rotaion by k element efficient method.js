let arr = [1, 2, 3, 4, 5, 8, 10]
let temp = new Array(arr.length)

let k = 10

for (let i = 0; i < arr.length; i++) {
   temp[(i+k)%arr.length] = arr[i]
}

for (let i = 0; i < arr.length; i++) {
   arr[i] = temp[i]
}

console.log(arr)