let prompt = require("prompt-sync")();

let value = Number(prompt("Enter number of starts = "))

for (let i = 1; i <= value; i++) {

   
    for (let j = 1; j <= value - i; j++) {
        process.stdout.write("  ")
    }

    for (let k = 1; k <= i; k++) {
        process.stdout.write("* ")
    }
     for(let j =1; j<=i; j++){
        process.stdout.write("* ")
    }
    console.log()
}




