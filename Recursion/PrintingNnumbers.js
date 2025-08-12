// print n to 1

// function number(num) {
//   if (num === 0) return;
//   console.log(num);
//   number(--num);
// }

// const num = 10;
// number(num);

// print 1 to n
let n = 10;
function number(num) {
  if (num > n) return;
  console.log(num);
  number(++num);
}

number(1);
