// bubble element ko swap karo if bubble element badi ho nahi to pass kardo next element ko.

let arr = [5, 2, 6, 3, 1, 7, 4]

function swap(a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// Ascending Order

for (let i = 0; i <= arr.length - 1; i++) {

    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            swap(j, j + 1)
        }
    }

}

// Descending Order


// for (let i = 0; i <= arr.length - 1; i++) {

//     for (let j = 0; j < arr.length - 1 - i; j++) {
//        if (arr[j] < arr[j + 1]) {
//             swap(j, j + 1)
//         }

//     }

// }

console.log(arr)