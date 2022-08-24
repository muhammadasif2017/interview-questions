/*
  ------------------ Problem Statement --------------------
  Make a function that looks through an array of objects (first argument) 
  and returns an array of all objects that have matching name and value pairs
  (second argument). Each name and value pair of the source object has to be present in 
  the object from the collection if it is to be included in the returned array.
*/

function whatIsInAName(collection, source) {
  const arr = [];
  const srcKeys = Object.keys(source);
  for (let i = 0; i < collection.length; i += 1) {
    const obj = collection[i];
    let isPresent = false;
    for (let j = 0; j < srcKeys.length; j += 1) {
      if (
        !obj.hasOwnProperty(srcKeys[j])
        || obj[srcKeys[j]] !== source[srcKeys[j]]
      ) {
        isPresent = true;
      }
    }
    if (!isPresent) {
      arr.push(obj);
    } 
  }
  return arr;
}

/*
  -----------      Solution 2      ------------
  function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    const sourceKeys = Object.keys(source);

    return collection
      .filter(obj => sourceKeys
        .every(key => obj.hasOwnProperty(key) &&
          obj[key] === source[key]));
  }

  -----------   Solution 3      --------------
  function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    const sourceKeys = Object.keys(source);

    // filter the collection
    return collection.filter(obj => sourceKeys
      .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
        .reduce((a, b) => a && b));
  }
*/
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });