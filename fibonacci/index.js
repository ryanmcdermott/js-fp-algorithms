const fibonacciHelper = (n, memo) => {
  if (n <= 1) return 1;

  if (!memo[n]) {
    return (memo[n] =
      fibonacciHelper(n - 1, memo) + fibonacciHelper(n - 2, memo));
  }

  return memo[n];
};

const fibonacci = n => fibonacciHelper(n, {});

export default fibonacci;
