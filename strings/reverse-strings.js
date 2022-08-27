/*
  Create a function that reverse a string:
  'Hi My name is Muhammad Asif' should be:
  'fisA dammahuM si eman yM iH'
*/

function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  // O(n) memory space
  // O(n) time complexity
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i -= 1) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

// function reverse2(str) {
//   return str.split('').reverse().join('');
// }

/*
  In-place traversal -> O(1) memory space
  O(n) time complexity
  const reverseString = function(s) {
    const strLength = s.length - 1;
    const counter = Math.ceil(strLength / 2);
    for(let i = 0; i < counter ; i += 1) {
        let temp =  s[strLength - i];
        s[strLength - i] = s[i];
        s[i] = temp;
    }
  };
*/

// Reverse a string using recursion
function recursiveReverse(str, length) {
  if (length < 0) {
    return "";
  }
  return str[length] + recursiveReverse(str, length - 1);
}

const str = "Hi My name is Muhammad Asif";
console.log(recursiveReverse(str, str.length - 1));
