//  sum of odd num in array
const arr = [6, 3, 2, 0, 1];
let n = arr.length - 1;

function sumOfOddArray(n) {
  console.log(n);

  if (n < 0) return 0;
  if (arr[n] % 2 != 0) {
    return arr[n] + sumOfOddArray(n - 1);
  } else return sumOfOddArray(n - 1);
}
console.log(sumOfOddArray(n));
// sumOfOddArray(n);
