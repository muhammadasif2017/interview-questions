/*
  ------------------------------------- Problem Statement --------------------------------
  You will be provided with an initial array (the first argument in the destroyer function),
  followed by one or more arguments. Remove all elements from the initial array that are of 
  the same value as these arguments.
*/

function destroyer(arr) {
  // const valsToRemove = [];
  let outputArr = [];
  const valsToRemove = Object.values(arguments).slice(1);
  // for (let i = 1; i < arguments.length; i += 1) {
  //   valsToRemove.push(arguments[i]);
  // }
  for (let j = 0; j < arr.length; j += 1) {
    let isPresent = false;
    for (let k = 0; k < valsToRemove.length; k += 1) {
      if (valsToRemove[k] === arr[j]) {
        isPresent = true;
      }
    }
    if (!isPresent) {
      outputArr.push(arr[j]);
    }
  }
  return outputArr;
}

/*
  Second Solution
  function destroyer(arr) {
    const valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
      return !valsToRemove.includes(val);
    });
  }
*/
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));