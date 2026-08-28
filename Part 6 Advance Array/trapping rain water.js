let arr = [4, 2, 0, 3, 2, 5, 0, 3, 1, 4, 2, 1]

let left = new Array(arr.length)
let right = new Array(arr.length)
let sum = 0;

let maxleft = arr[0]
for(let l = 0; l<left.length; l++){
    if(maxleft<arr[l]){
        maxleft = arr[l]
    }
    left[l] = maxleft
}

let maxright = arr[arr.length-1]
for(let r = right.length-1; r>=0; r--){
    if(maxright<arr[r]){
        maxright = arr[r]
    }
    right[r] = maxright
}

for(let i=1; i<arr.length; i++){
    sum += Math.min(left[i], right[i]) - arr[i]
}


console.log(sum)
