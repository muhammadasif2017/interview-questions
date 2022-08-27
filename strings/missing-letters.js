/*
  ----------- Problem Statement ----------------
  Find the missing letter in the passed letter range and return it.
  If all letters are present in the range, return undefined
*/

function fearNotLetter(str) {
  let characterCode = str.charCodeAt(0);
  let missing = undefined;
  str.split('').forEach(letter => {
    if (characterCode === letter.charCodeAt(0)) {
      characterCode++;
    } else {
      missing = String.fromCharCode(characterCode);
    }
  })
  return missing;
}

console.log(fearNotLetter("abce"));