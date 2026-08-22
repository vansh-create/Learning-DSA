let arr = [1, 2, 3, 4, 5, 8 , 10]

let i=arr.length-2
let temp = arr[arr.length-1]

while(i>=0){
    arr[i+1] = arr[i]
    i--
}
arr[0] = temp
    
console.log(arr)