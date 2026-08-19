let a = Number(prompt("Enter first number."))
let b = Number(prompt("Enter second number."))
let key = prompt("Enter operator (+,-,*,/,%)")

if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log("Enter Valid Numbers.")
}
else {
    switch (key) {
        case "+":
            console.log(a + b)
            break;
        case "-":
            console.log(a - b)
            break;
        case "*":
            console.log(a * b)
            break;
        case "/":
            console.log(a / b)
            break;
        case "%":
            console.log(a % b)
            break;
        default:
            console.log("Enter Valid Operator.")
            break;
    }
}

