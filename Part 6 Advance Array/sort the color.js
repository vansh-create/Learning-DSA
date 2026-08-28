
let arr = [1, 2, 0, 2, 1, 0, 2, 0, 1, 2, 0, 1]

function swap(x, y) {
    temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp
}

// My Method

let j = 0;
for (let k = 0; k < 2; k++) {

    for (let i = j+1; i < arr.length; i++) {
        if (arr[i] == k) {
            swap(i, j)
            j++
        }
    }
   

}



// Better Method

// let i = 0
// let j = 0;
// let k = arr.length - 1;

// while (i <= k) {
//     if (arr[i] == 0) {
//         swap(i, j)
//         j++
//         i++
//     }
//     else if (arr[i] == 2) {
//         swap(i, k)
//         k--
//     }
//     else{
//         i++
//     }
       
// }

console.log(arr)