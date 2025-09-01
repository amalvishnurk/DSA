let arr = [7, 1, 5, 12, -10, 0, 4, 3, 2];

// First part is taken as sorted and rest as non sorted
// consider 1st element 7 is sorted, then 1 is compare with sorted and identify a place to keep 1
// [1, 7, 5, 12, -10, 0, 4, 3, 2]
// next 1,7 is sorted and current element 5 needs position in sorted

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}

console.log(insertionSort(arr));
