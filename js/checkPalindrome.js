function checkPalindrome(inputString) {
    return (inputString.split('').reverse().join('') == inputString) ? true: false
}
console.log(checkPalindrome("ava"));