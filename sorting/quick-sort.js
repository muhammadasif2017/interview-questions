function quickSort(array) {
  if (!Array.isArray(array)) throw new Error('Parameter does not evaluate to an array');
  
  const newArr = array.slice();

  function swap(indexA, indexB) {
    const temp = newArr[indexA];
    newArr[indexA] = newArr[indexB];
    newArr[indexB] = temp;
  }

  function partition(low, high) {
    let pivot = newArr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j += 1) {
      if (newArr[j] <= pivot) {
        i += 1;
        swap(i, j);
      }
    }
    swap(i + 1, high);
    return (i + 1);
  }

  function recursiveQuickSort(low, high) {
    if (low < high) {
      let pi = partition(low, high);
      recursiveQuickSort(low, pi - 1);
      recursiveQuickSort(pi + 1, high);
    }
  }

  recursiveQuickSort(0, newArr.length - 1);
  return newArr;
}

console.log(quickSort([4,5,3,2]))