function findFactorialRecursive(number) {
  if (number < 2) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(2));

function findFactorialItertically(number) {
  let answer = 1;
  if (answer === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i += 1) {
    answer *= i;
  }
  return answer;
}
console.log(findFactorialItertically(5));
