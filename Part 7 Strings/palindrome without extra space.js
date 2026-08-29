let str = "malayalam"
let isPalindrome = true;


i = 0;
j = str.length - 1

while (i < str.length / 2) {

    if (str[i] !== str[j]) {
        isPalindrome = false;
        break;
    }

    i++
    j--
}

console.log(isPalindrome?"Palindrome":"Not Palindrome")