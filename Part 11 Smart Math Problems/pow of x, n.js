// Simple method

// let base = 2.00000
// let pow = 10
// let result = 1

// for(let i = 1; i<=pow; i++){
//     result *= base
// }

// console.log(result.toFixed(5))

// Maths view

function power(base, pow) {
    if (pow == 0) return 1
    result = power(base, Math.floor(pow / 2))
    if (pow % 2 == 0) return result * result
    else return result * result * base
}

console.log(power(2, 2))