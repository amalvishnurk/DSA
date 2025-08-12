// Given signed 32 bit integer, reverse it
//  if reverse go outside signed 32-bit integer range [-2^31, 2^31-1] return 0
// -2147483648 and 2147483647

function reverseNumber(n) {
  const nCopy = n;
  let rev = 0;
  let rem;
  n = Math.abs(n);
  let limit = Math.pow(2, 31);
  // let limit =2**31

  while (n > 0) {
    rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  if (rev < -limit || rev > limit) return 0;
  return nCopy < 0 ? -rev : rev;
}

const result = reverseNumber(-1891);
console.log(result);
