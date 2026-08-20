let prompt = require("prompt-sync")();

let value = Number(prompt("Enter number of starts = "))

// My Method 

// if (value % 2 == 0) {
//     console.log("Enter Odd Integer.")
// }
// else {
//     outerLoop:
//     for (let i = 1; i <= value; i++) {

//         for (let j = 1; j <= value; j++) {
//             if (i == j || (i + j) == value + 1) {
//                 process.stdout.write("* ")
//             }
//             else {
//                 process.stdout.write("  ")
//             }

//             if (i == j && (i + j) == value + 1) {
//                 break outerLoop;
//             }

//         }

//         console.log()

//     }
// }


// Better Version 

for (let i = 1; i <= value; i++) {

    for (let j = 1; j <= value*2; j++) {
        if(i==j || (i+j)==(value*2)+1){
              process.stdout.write("* ")
        }
        else{
            process.stdout.write("  ")
        }
      
    }

    console.log()

}
