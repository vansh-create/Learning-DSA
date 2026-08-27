let arr = [1, 2, 3, 4, 5, 8, 10]

let k = 8
let l = k%arr.length
let last = arr.length-1

function reverse(i, j) {
    while (i < j) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}

reverse(0, last-l)
reverse( last-l+1, last)
reverse(0, last)

console.log(arr)