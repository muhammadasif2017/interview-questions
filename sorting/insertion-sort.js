function insertionSort(array) {
  if (!Array.isArray(array)) throw new Error('Parameter does not evaluate to an array');

  const newArr = array.slice();

  function swap(indexA, indexB) {
    const temp = newArr[indexA];
    newArr[indexA] = newArr[indexB];
    newArr[indexB] = temp;
  }

  for (let i = 0; i < newArr.length; i += 1) {
    let elem = newArr[i];
    for (let j = 0; j <= i; j += 1) {
      if (elem < newArr[j]) {
        swap(i, j);
      }
    }
  }
  return newArr;
}
insertionSort([5, 4, 33, 2, 8]);
