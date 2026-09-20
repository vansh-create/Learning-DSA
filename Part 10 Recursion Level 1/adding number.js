
let sum = 0
function hello(n){
    if(n==1) return sum += n
    sum += n
    hello(n-1)
}

hello(10)
console.log(sum)