const arr = []

arr.push(10)
arr.push("vansh")
arr.push(null)
arr.push(true)
arr.push(1)

console.log(arr)
arr.pop()
console.log(arr)

arr[10] = 100

for(let i = 0; i<arr.length; i++){
    console.log(arr[i])
}