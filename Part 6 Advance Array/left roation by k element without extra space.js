let arr = [1, 2, 3, 4, 5, 8, 10]

let k = 700

function reverse(i, j) {
    while (i < j) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }

}

reverse(0, (k%arr.length)-1)
reverse((k%arr.length), arr.length-1)
reverse(0, arr.length-1)

console.log(arr)