let str = "Vansh"
let lastName = "Kesharwani"
let space = "  Extra Spaces  "
let para = "hello vansh, hello bhai"

// for(let i = 0; i<str.length; i++){
//     console.log(str[i])
// }

console.log(str[1])
console.log(str.charAt(1))
console.log(str.charCodeAt(1))
console.log(str.length)
console.log(str.slice(-4, 5)) // also supports negative indeing
console.log(str.substring(1, 5))
console.log(str.toLocaleLowerCase())
console.log(str.toUpperCase())
console.log(str + " " + lastName)
console.log(str.concat(" " + lastName))
console.log(space)
console.log(space.trim())
console.log(para.indexOf("hello")) // first occurance
console.log(para.lastIndexOf("hello")) // last occurance
console.log(para.includes(","))
console.log(str.startsWith("V"))
console.log(str.endsWith("sh"))
console.log(para.replace("hello", "hii"))
console.log(para.replaceAll("hello", "hii"))
console.log(str.split(""))
console.log(para.split(","))

