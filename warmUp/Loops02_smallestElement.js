// waf to find smallest number

let arr = [24, 72, -23, 4, 45, 6];

function SmallestNumber(arr) {
  // let smallest = Infinity
  let smallest = arr[0];
  for (let element of arr) {
    if (element < smallest) smallest = element;
  }
  return smallest;
}

let result = SmallestNumber(arr);
console.log(result);
