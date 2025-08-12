// Iterative method

// function fibonacci(n) {
//   if (n < 2) return n;
//   let a = 0,
//     b = 1;
//   for (let i = 2; i <= n; i++) {
//     let temp = a + b;
//     a = b;
//     b = temp;
//   }
//   return b;
// }

// Recursive method

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(1));
