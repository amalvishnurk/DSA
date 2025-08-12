const nums = [2, 2, 1];
// function singleNumber(nums) {
//   let hash = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (!hash[nums[i]]) {
//       hash[nums[i]] = 1;
//     } else {
//       hash[nums[i]]++;
//     }
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (hash[nums[i]] === 1) return nums[i];
//   }
// }
// console.log(singleNumber(nums));

function singleNumber(nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
}
console.log(singleNumber(nums));
