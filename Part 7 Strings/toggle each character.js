let str = "MalaYalAm";
let toggle = ""
for(let i=0; i<str.length; i++){
   if(str.charCodeAt(i)>=97){
   toggle += str[i].toUpperCase()
   }
   else{
   toggle += str[i].toLowerCase()
   }
}

console.log(str)
console.log(toggle)

