function rabbit(initial, months) {
  if (months === 0) return initial;
  return 2 * rabbit(initial, months - 1);
}
console.log(rabbit(2,3));

