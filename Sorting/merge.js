// merge two sorted array
// let left = [1, 3, 5, 7];
// let right = [2, 4, 8, 9];

// helper function for merging two sorted array
function merge(left, right) {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  // logic for adding remaining element to res
  return [...res, ...left.slice(i), ...right.slice(j)];
}

// console.log(merge(left, right));
let nums = [5, 1, 1, 2, 0, 0];
function mergeSort(nums) {
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = mergeSort(nums.slice(0, mid)); //mid is not included
  let right = mergeSort(nums.slice(mid)); //from mid to end of array
  return merge(left, right);
}

console.log(mergeSort(nums));
