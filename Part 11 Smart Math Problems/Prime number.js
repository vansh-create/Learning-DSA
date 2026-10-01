// let limit = 20;

// for (let num = 2; num <= limit; num++) {
//     let isPrime = true
//     for (let i = 2; i <= (num / 2); i++) {
//         if (num % i == 0) {
//             isPrime = false
//             break
//         }
//     }

//     if (isPrime) {
//         console.log(num)
//     }
// }



// Maths view
let num = 31
let arr = new Array(num+1).fill(true)

for(i=2; i<=Math.floor(Math.sqrt(num)); i++){
    if(arr[i]==true){
        for(j=i*i; j<=num; j+=i){
            arr[j] = false
        }
    }
} 

for(let i = 2; i<=arr.length; i++){
    if(arr[i]==true){
        console.log(i)
    }
}