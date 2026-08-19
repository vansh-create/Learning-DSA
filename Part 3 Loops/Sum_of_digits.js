let digit = 54654;

let sum = 0

while (digit > 0){
    let n = digit%10;
    digit = Math.floor(digit/10)
    sum += n;
}

console.log(sum)