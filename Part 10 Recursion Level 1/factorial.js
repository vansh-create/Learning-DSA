
let fact = 1
function hello(n){
    if(n==0 || n==1) return 1
    fact *= n
    hello(n-1)
}

hello(-1)
console.log(fact)