let unit = 5880;
let amount = 0;

// My Method

let cost = 0

if(unit<=100){
       cost = (unit*4.2)
}
else if(unit<=200){
       cost = (4.2*100)+((unit-100)*6)
}
else if(unit<=400){
       cost = (4.2*100)+(6*100)+((unit-200)*8)
}
else{
   cost = (4.2*100)+(6*100)+(8*200)+((unit-400)*13)
}

console.log(cost)


// Better Method

if (unit > 400) {
    amount = (unit - 400) * 13;
    unit = 400;
}

if (unit <= 400 && unit>200) {
    amount += (unit - 200) * 8;
    unit = 200;
}

if (unit <= 200 && unit>100) {
    amount += (unit - 100) * 6;
    unit = 100;
}

if (unit <= 100) {
    amount += unit * 4.2;
}

console.log(amount)