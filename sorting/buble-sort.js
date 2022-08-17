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
    for (let j = i + 1; j < copyArr.length; j += 1) {
      if (copyArr[i] > copyArr[j]) {
        swap(i, j);
      }
    }
  }
  return copyArr;
}

console.log(bubbleSort([3,2,5,1]));
