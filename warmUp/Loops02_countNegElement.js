// waf to count negative numbers

let arr = [1, -2, -3, -4, 5, 6];

function CountNegativeNumber(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) count += 1;
  }
  return count;
}

let result = CountNegativeNumber(arr);
console.log(result);
