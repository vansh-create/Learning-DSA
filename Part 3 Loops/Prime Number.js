// let num = 8;
// let count = 0;
// for(let i = 1; i<=(num/2); i++){
//     if(num%i==0){
//         count++
//     }
// }
// if (count > 1){
//     console.log("Not Prime Number")
// }
// else{
//     console.log(num, " is a Prime number.")
// }


// Modified Version

let limit = 20;

for (let num = 2; num <= limit; num++) {
    let isPrime = true
    for (let i = 2; i <= (num / 2); i++) {
        if (num % i == 0) {
            isPrime = false
            break
        }
    }

    if (isPrime) {
        console.log(num)
    }
}



