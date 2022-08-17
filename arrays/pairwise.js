/*
  Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
  You may use multiple pairs that have the same numeric elements but different indices. 
  Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element.
  For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.
  pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
*/

function pairwise(arr, arg) {
  if (arr.length === 0) {
    return 0;
  }
  let map = {};
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const diff = arg - arr[i] 
    if (diff in map) {
      const index = map[diff];
      if (index.length > 0) {
        sum += index[0] + i;
        map[diff].shift();
      }
      continue;
    }
    if (arr[i] in map) {
      map[arr[i]].push(i);
    } else {
      map[arr[i]] = [i];
    }
  }
  console.log(sum)
  return sum;
}

pairwise([1, 4, 2, 3, 5], 5);