let str = "hello";
let arr = new Array(122).fill(0)
let visited = []

for (let i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i)] += 1
}

// for(let j = 0; j<arr.length; j++){
//     if(arr[j] != 0){
//         console.log(String.fromCharCode(j) + " " + arr[j])
//     }   
// }

// Print in orderd manner of given string : modified version

for (let i = 0; i < str.length; i++) {

    let code = str.charCodeAt(i)

    if (visited.includes(str[i])) {
        continue;
    }

    visited[i] = str[i]
    console.log(String.fromCharCode(code) + " " + arr[code])
}
