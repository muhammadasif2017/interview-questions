function bubbleSort(array) {
  if (!Array.isArray(array)) {
    throw new Error('Parameter does not evaluate to an array.');
  }

  const copyArr = array.slice();

  function swap(a, b) {
    const temp = copyArr[a];
    copyArr[a] = copyArr[b];
    copyArr[b] = temp;
  }

  for (let i = 0; i < copyArr.length; i += 1) {
    for (let j = 0; j < (copyArr.length - 1 - i); j += 1) {
      if (copyArr[j] > copyArr[j + 1]) {
        swap(j, j + 1);
      }
    }
  }
  return copyArr;
}

console.log(bubbleSort([3,2,5,1]));
