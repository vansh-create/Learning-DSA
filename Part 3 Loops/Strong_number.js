let digit = 145;

let sum = 0;
const value = digit;

while (digit > 0) {
    let n = digit % 10;
    digit = Math.floor(digit / 10)

    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i
    }
    
    sum += fact;
}

if (value == sum) {
    console.log(value, "is Strong Number.")
}
else {
    console.log("Not Strong Number.")
}
