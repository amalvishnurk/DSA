function powerOfTwo(n) {
  if (n === 1) return true;
  else if (n < 1 || n % 2 === 1) return false;
  return powerOfTwo(n / 2);
}

console.log(powerOfTwo(10));
