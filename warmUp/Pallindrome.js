// wap to return pallindrome or not
function palindrome(n) {
    if (n < 0) return false
    let rev = 0
    let originalNumber = n
    let rem
    while (n > 0) {
        rem = n % 10
        rev = (10 * rev) + rem
        n = Math.floor(n / 10)
    }
    return rev === originalNumber
}

const result = palindrome(1221)
console.log(result)