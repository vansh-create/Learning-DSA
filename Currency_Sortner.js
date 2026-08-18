let amount = 11500;

function Check(amt) {
    let x = Math.floor(amount / amt);
    amount -= (x * amt);
    console.log(`Currecy of ${amt} = `, x)
}

if (amount / 500 >= 1) {
    Check(500)
}
if (amount / 200 >= 1) {
    Check(200)
}
if (amount / 100 >= 1) {
    Check(100)
}
if (amount / 50 >= 1) {
    Check(50)
}
if (amount / 20 >= 1) {
    Check(20)
}
if (amount / 10 >= 1) {
    Check(10)
}
if (amount / 5 >= 1) {
    Check(5)
}
if (amount / 2 >= 1) {
    Check(2)
}
if (amount / 1 >= 1) {
    Check(1)
}
