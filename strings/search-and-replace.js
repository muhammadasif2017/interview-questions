/*
  --------------------------- Problem Statement ----------------------------
  Perform a search and replace on the sentence using the arguments provided and return the new sentence.
  First argument is the sentence to perform the search and replace on.
  Second argument is the word that you will be replacing (before).
  Third argument is what you will be replacing the second argument with (after).
*/

function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));