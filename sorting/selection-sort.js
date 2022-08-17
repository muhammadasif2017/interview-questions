function selectionSort(array) {
  if (!Array.isArray(array)) {
    throw new Error('Parameter does not evaluate to an array.');
  }

  if (array.length === 1) {
    return array;
  } 

  function swap(indexA, indexB) {
    const temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
  }

  for (let i = 0; i < array.length - 1; i += 1) {
    let min = i;
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    swap(i, min);
  }
  return array;
}

console.log(selectionSort([2]))
