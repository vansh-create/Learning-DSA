
let arr = [8 -5, 8, -4, 7, 6 ,-9, 3, 2, -1]

let j = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j++
    }

}

console.log(arr)