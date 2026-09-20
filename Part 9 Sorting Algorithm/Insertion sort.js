// smallest element ko select karke right side rakh dena hai.

let arr = [5, 2, 6, 3, 1, 7, 4]

// Ascending Order
// for (let i = 0; i < arr.length; i++) {
//     let key = arr[i]
//     let j = i - 1
//     while (j >= 0 && arr[j] > key) {
//         arr[j+1] = arr[j]
//         j--
//     }
//     arr[j + 1] = key
// }

// Descending Order
for (let i = 0; i < arr.length; i++) {
    let key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] < key) {
        arr[j+1] = arr[j]
        j--
    }
    arr[j + 1] = key
}


console.log(arr)