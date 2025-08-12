//  sum of array
const arr = [5];
let n = arr.length - 1;
function sumOfArray(n) {
  if (n < 0) return 0;
  return arr[n] + sumOfArray(n - 1);
}
console.log(sumOfArray(n));
