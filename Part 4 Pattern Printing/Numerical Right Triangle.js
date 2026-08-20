let prompt = require("prompt-sync")();

let value = Number(prompt("Enter number of starts = "))

for(let i = 1; i<=value; i++){

    for(let j =1; j<=i; j++){
        process.stdout.write(String(j + " "))
    }
    console.log()
}


