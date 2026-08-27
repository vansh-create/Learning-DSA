let arr = [1, 2, 3, 4, 5, 8, 10]

let k = 9


for (let j = 1; j <= (k % arr.length); j++) {
    let i = arr.length - 1
    let temp = arr[arr.length - 1]
    while (i > 0) {
        arr[i] = arr[i - 1]
        i--
    }
    arr[0] = temp
}



console.log(arr)