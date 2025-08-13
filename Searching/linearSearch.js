const arr = [2, 4, 6, 8, 4, 5, 1, 0];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    } 
  }
  return "Not found"
}

console.log(linearSearch(arr,1));

