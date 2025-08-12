//waf to search for element and return its index, if element is not there in array return -1 

let arr = [1, 2, 3, 4, 5, 6]

function serachElement(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (n === arr[i]) return i
    }
    return -1
}

let result = serachElement(arr, 6)
console.log(result)