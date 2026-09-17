// smallest element ko select karke right side rakh dena hai.

let arr = [5, 2, 6, 3, 1, 7, 4]

function swap(a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// Ascending Order

// for(let i=0; i<arr.length-1; i++){

//     let min = i
//     for(let j=i; j<arr.length; j++){
//         if(arr[j]<arr[min]){
//             min = j
//         }
//     }
//     swap(min, i)
// }

// Descending Order

for(let i=0; i<arr.length-1; i++){

    let max = i
    for(let j=i; j<arr.length; j++){
        if(arr[j]>arr[max]){
            max= j
        }
    }
    swap(max, i)
}


console.log(arr)