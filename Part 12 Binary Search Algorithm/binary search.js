//let i = [0, 01, 02, 03, 04, 05, 06, 07, 08, 09]
let arr = [0, 12, 21, 34, 54, 59, 60, 87, 89, 91]
let f = 0
let l = arr.length-1
let target = 91

while(f<=l){
    mid = Math.floor((f+l)/2)
    if(arr[mid]==target) return console.log(mid)
    if(target>arr[mid]){
        f = mid+1
    }
    else{
        l = mid-1
    }
}

