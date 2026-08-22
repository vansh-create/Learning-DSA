

let arr = [10, 0, 20, 40, 6, 3, 3, 2, 1]

let j = arr.length - 1

for(let i = 0; i<=arr.length/2; i++){
  let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    j--
}


  



console.log(arr)
