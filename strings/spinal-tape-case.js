/*
  -------------------------------    Problem Statement    ----------------------------
  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  // let splitToArr = str.split(' ');
  // let outputStr = splitToArr[0].toLowerCase();
  // for (let i = 1; i < splitToArr.length; i += 1) {
  //   outputStr += '-' + splitToArr[i].toLowerCase();
  // }
  // console.log(outputStr);
  // return outputStr;

  // Solution using regex
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

spinalCase('This Is Spinal Tap');