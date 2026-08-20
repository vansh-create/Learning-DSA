let prompt = require("prompt-sync")();

let value = Number(prompt("Enter number of starts = "))

for(let i = 1; i<=value; i++){
    process.stdout.write("* ")
}


