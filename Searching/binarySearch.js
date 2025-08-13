const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;

function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (r >= l) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] === target) {
      return m;
    } else if (target > nums[m]) {
      l = m + 1;
    } else r = m - 1;
  }
  return -1
}

console.log(binarySearch(nums, target));
