function fibonacciIterative(n) {
  const arr = [0, 1];

  for (let i = 2; i <= n; i += 1) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}
console.log(fibonacciIterative(6));

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}
console.log(fibonacciRecursive(6));
