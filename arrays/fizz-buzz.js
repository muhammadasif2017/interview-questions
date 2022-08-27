const fizzBuzz = function (n) {
  const outputArr = [];
  for (let i = 1; i <= n; i += 1) {
    let itemToPush = "";
    if (i % 3 === 0) {
      itemToPush += "Fizz";
    }
    if (i % 5 === 0) {
      itemToPush += "Buzz";
    }
    if (itemToPush === "") {
      itemToPush += i.toString();
    }
    outputArr.push(itemToPush);
  }
  return outputArr;
};

console.log(fizzBuzz(15));
