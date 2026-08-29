let str = "abbccc";
let arr = new Array(122).fill(0)

for(let i=0; i<str.length; i++){
   arr[str.charCodeAt(i)] += 1 
}

for(let j = 1; j<arr.length; j++){
    if(arr[j] != 0){
        console.log(String.fromCharCode(j) + " " + arr[j])
    }   
}