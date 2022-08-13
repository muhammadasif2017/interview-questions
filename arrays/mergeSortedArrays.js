function mergeSortedArrays(arr1, arr2) {
  const mergedArr = [];

  // Check input
  if (arr1.length === 0 && arr2.length === 0) {
    return [];
  }
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  function mergeArrays() {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArr.push(arr1Item);
      arr1Item = arr1[i];
      i += 1;
    } else {
      mergedArr.push(arr2Item);
      arr2Item = arr2[j];
      j += 1;
    }
  }

  while (arr1Item || arr2Item) {
    mergeArrays();
  }

  return mergedArr;
}

console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6, 7, 8]));
