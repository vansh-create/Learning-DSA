let arr = [1, 2, 3, 3, 4, 5]
// let arr = [0, 0, 1, 1, 1, 2, 2, 3]

let j = 0;

for (let i = 0; i < arr.length-1; i++) {

    if (arr[i] != arr[i + 1]) {
        j++;
        arr[j] = arr[i + 1]
    }

}

arr.splice(j, arr.length-j-1)

console.log(arr)