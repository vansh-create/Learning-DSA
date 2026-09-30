
let first = 0
let second = 1

let term = 10
let third;
function hello(){
    if(third==10) return 
    third = first + second
    console.log(third)
    first = second
    second = third     
    hello()
}

hello()