let str = "malayalam"
let temp = ""

for(let i=str.length-1; i>=0; i--){
    temp += str[i]
}

if(str == temp){
    console.log("Palindrome")
}
else{
    console.log("Not Palindrome")
}