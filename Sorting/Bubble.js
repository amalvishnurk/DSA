let arr = [5, 4, 9, 1, 0];

// If length is 5, then first loop will run for 4 times, from i=0 to i=3
// Second nested loop will run - when i=0, j loop will run for 4 times
// when i=1, j loop will run for 3 times (5-1-1 = 3)

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}

console.log(bubbleSort(arr));
