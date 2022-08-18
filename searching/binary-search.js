function binarySearch(searchList, value) {
  let arrayPath = [];
  let low = 0;
  let high = searchList.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (value === searchList[middle]) {
      break;
    } else if (searchList[middle] < value) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return arrayPath;
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
console.log(binarySearch(testArray, 0));