let arr = [1, 2, 3, 4, 5, 8 , 10]

let i=1
let temp = arr[0]
while(i<arr.length){
    arr[i-1] = arr[i]
    i++
}
arr[arr.length-1] = temp
    

console.log(arr)