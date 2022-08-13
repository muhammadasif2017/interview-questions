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

console.log(reverse("Hi My name is Muhammad Asif"));
