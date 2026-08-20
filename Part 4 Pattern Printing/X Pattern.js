let prompt = require("prompt-sync")();

let value = Number(prompt("Enter number of starts = "))

for (let i = 1; i <= value; i++) {

    for (let j = 1; j <= value; j++) {
        if(i==j || (i+j)==value+1){
              process.stdout.write("* ")
        }
        else{
            process.stdout.write("  ")
        }
      
    }

    console.log()

}

