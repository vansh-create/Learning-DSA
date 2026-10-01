// Simple factor upto half 
let num = 30
let arr= []
for (let i = 1; i <= (num / 2); i++) {
    if (num % i == 0) {
      arr.push(i)
    }
}

arr.push(num)
console.log(arr)

