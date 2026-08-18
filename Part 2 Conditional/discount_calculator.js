let amount = 6000;
let discount;

if(amount<=5000){
    discount = 0
}
else if(amount<=7000){
    discount = 5
}
else if(amount<=9000){
    discount = 10
}
else{
    discount = 20
}

let netDiscount = (discount/100)*amount;

console.log("You Got Discount Of = ", netDiscount, "Rs.")