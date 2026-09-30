function factor(num) {
    let arr = []
    for (let i = 1; i <= (num / 2); i++) {
        if (num % i == 0) {
            arr.push(i)
        }
    }
    arr.push(num)
    return arr
}

let a = 72   // idhar bada number likhna
let b = 60   // idhar chota number likhna


let fact1 = factor(a)
let fact2 = factor(b)

for(let i = fact2.length-1; i>=0; i--){
    if(a%fact2[i]==0 && b%fact2[i]==0){
        return console.log(fact2[i])
    }
}