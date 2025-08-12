// waf to find largest number

let arr = [24, -72, -23, -4, -45, -6];

function largestNumber(arr) {
  // let largest = -Infinity
  let largest = arr[0];
  for (let element of arr) {
    if (element > largest) largest = element;
  }
  return largest;
}

let result = largestNumber(arr);
console.log(result);
