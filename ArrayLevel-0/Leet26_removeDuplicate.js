// leetcode 26

const a = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicate() {
 // Here i is first pointer which will check for unique element 
 // and x is second pointer,which will keep track of where to shift the unique element
  let x = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > a[x]) {
      x = x + 1;
      a[x] = a[i];
    }
  }
  return x + 1;
}

const result = removeDuplicate();
console.log(result, a);
