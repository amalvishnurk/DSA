const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
function missingNumber(nums) {
  let n = nums.length;
  let sum = (n * (n + 1)) / 2;
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += nums[i];
  }
  return sum - total;
}
console.log(missingNumber(nums));
