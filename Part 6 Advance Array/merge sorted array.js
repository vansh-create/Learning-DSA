let arr1 = [1, 2, 3, 5]
let arr2 = [1, 7, 9, 10]
let total = arr1.length+arr2.length
let temp = new Array((total))

let i = 0;
let j = 0;
let idx = 0

while(i<arr1.length || j <arr2.length){

    if(arr1[i]<arr2[j]){
        temp[idx] = arr1[i]
        i++
        idx++
    }
    else{
        temp[idx] = arr2[j]
        j++
        idx++
    }
}

console.log(temp)

