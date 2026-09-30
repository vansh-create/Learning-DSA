// For HCF using maths trick

let a = 72
let b = 60

while(a !== b){
    if(a>b){
        a = a-b
    }
    else{
        b = b-a
    }
}
console.log(a)