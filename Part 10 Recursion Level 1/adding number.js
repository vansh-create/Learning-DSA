
let sum = 0
function hello(n){
    if(n==0) return 
    sum += n
    hello(n-1)
}

hello(10)
console.log(sum)