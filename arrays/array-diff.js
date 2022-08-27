/*
  Problem Statement: Compare two arrays and return a new array with any items only
  found in one of the two given arrays, but not both. In other words, return the 
  symmetric difference of the two arrays.
*/

/* 
  ------- Solution 1 -----
  function diffArray(arr1, arr2) {
  const newArr = [];

    function onlyInFirst(first, second) {
      for (let i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          newArr.push(first[i]);
        }
      }
    }

    onlyInFirst(arr1, arr2); // O(n^2)
    onlyInFirst(arr2, arr1); // O(n^2);
    // O(n^2) + O(n^2)

    return newArr;
  }

  ------- Second solution ---------
  function diffArray(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];

    function diff(a, b) {
      return a.filter(item => b.indexOf(item) === -1);
    }
  }

  ------- Third Solution ---------
  function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
*/

// Mine Solution
function diffArray(arr1, arr2) {
  const newArr = [];
  const map1 = new Map();
  const map2 = new Map();
  for (let i = 0; i < arr1.length; i += 1) {
    if (!map1.has(arr1[i])) {
      map1.set(arr1[i], i);
    }
  }
  for (let j = 0; j < arr2.length; j += 1) {
    if (!map2.has(arr2[j])) {
      map2.set(arr2[j], j);
    }
  }

  for (let k = 0; k < arr2.length; k += 1) {
    if (!map1.has(arr2[k])) {
      newArr.push(arr2[k]);
    }
  }
  for (let l = 0; l < arr1.length; l += 1) {
    if (!map2.has(arr1[l])) {
      newArr.push(arr1[l]);
    }
  }
  return newArr;
  // O(n) + O(n) + O(n) + O(n) <- Time Complexity
  // O(n) + O(n) <- Space Complexity
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);