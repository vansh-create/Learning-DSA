let digit = 12443;

let rev = 0

while (digit > 0){
    let n = (digit%10);
    digit = Math.floor(digit/10)
    rev = (rev * 10) + n;
}

console.log(rev)