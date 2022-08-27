function firstRecurringCharacter(array) {
  const map = new Map();
  // Alternatively I can use
  // const map = {};
  for (let i = 0; i < array.length; i += 1) {
    if (map.has(array[i])) {
      return array[i];
    }
    map.set(array[i], array[i]);
  }
  return undefined;
}

const data = [8, 3, 4, 54, 5, 3, 77, 8, 28, 344];
const output = firstRecurringCharacter(data);
console.log(output);
