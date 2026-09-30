// For HCF using maths trick

// let a = 72
// let b = 60

// while(a !== b){
//     if(a>b){
//         a = a-b
//     }
//     else{
//         b = b-a
//     }
// }

// Using recursion

// let a
// let b

// function hcf(a, b) {

//     if (a > b) {
//         a = a - b
//     }
//     else {
//        b= b - a
//     }
//     if (a == b) {
//         return console.log(a)
//     }

//     hcf(a, b)
// }

// hcf(12, 605)


// Best method

let a = 84
let b = 64

function hcf(a, b){
    if(a==b) return a
    if(a>b) return hcf(a-b, b)
    return hcf(b, b-a)
}

console.log(hcf(a, b))