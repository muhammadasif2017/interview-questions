function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitIndex = Math.floor(array.length / 2);
    console.log('arr1:',array.slice(0, splitIndex));
    console.log('arr2:',array.slice(splitIndex));
    return merge(
      mergeSort(array.slice(0, splitIndex)),
      mergeSort(array.slice(splitIndex))
    );
  }
  // Merge two sorted arrays
  function merge(array1, array2) {
    console.log('array 1, array 2', array1, array2);
    let merged = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        merged.push(array1.shift());
      } else if (array1[0] > array2[0]) {
        merged.push(array2.shift());
      } else {
        merged.push(array1.shift(), array2.shift());
      }
    }
    // After looping ends, one array is empty, and other array contains only
    // values greater than all values in `merged`
    return [...merged, ...array1, ...array2];
  }
}
mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])