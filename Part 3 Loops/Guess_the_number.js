let number = Math.floor(Math.random()*100) + 1

let input;

do {
    
 input = Number(prompt("Continue if 1"))

 if(input<1 || Number.isNaN(input) || input >100){
    console.log("Try a value between 1 - 100")
    continue;
 }

 if(number>input){
    console.log("Bada Hai")
 }
 else if(number<input){
    console.log("Chota hai")
 }
 else{
    console.log("You guess right number", number)
 }

 if(input==0){
    break
 }
 
} while (input!==number);

