// Mathematics factor upto its sqrt 
let num = 30
let arr= []
let sqrt = Math.floor(Math.sqrt(num))

for (let i = 1; i <= sqrt; i++) {
    if (num % i == 0) {
      arr.push(i)
    }
}

for (let i = sqrt; i >= 1; i--) {
    if (num % i == 0) {
      arr.push(num/i)
    }
}


console.log(arr)