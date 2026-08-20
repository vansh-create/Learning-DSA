let prompt = require("prompt-sync")();

let value = Number(prompt("Enter number of starts = "))

for(let i = 65; i<=(value+65); i++){

    for(let j =65; j<=i; j++){
        process.stdout.write(String.fromCharCode(j))
        process.stdout.write(" ")
    }
    console.log()
}


