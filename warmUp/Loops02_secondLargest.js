// waf to find second largest

let arr = [1, 8, 4, 10, 10]

function secondLargestNumber(arr) {
    let largest = -Infinity
    let seocondlargest = -Infinity
    if (arr.length < 2) return null
    for (let element of arr) {
        if (element > largest) {
            seocondlargest = largest
            largest = element
        }
        else if (element > seocondlargest && element != largest) {
            seocondlargest = element
        }
        console.log({ element, largest, seocondlargest })

    }
    return seocondlargest
}

let result = secondLargestNumber(arr)
console.log(result)
