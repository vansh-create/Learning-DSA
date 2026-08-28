let arr = [2, 3, 2, 3, 2, 4, 5, 6, 2]

let ans = arr[0]
let count = 1

for(let i=1; i<arr.length; i++){
    if(ans == arr[i]){
        count++
    }
    else if(count == 0){
        ans = arr[i]
    }
    else{
        count--
    }

}

console.log(ans)