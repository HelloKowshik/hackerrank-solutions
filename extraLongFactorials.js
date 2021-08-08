function extraLongFactorials(n) {
  n = BigInt(n);
  let fact = BigInt(1);
  for (let i = n; i > 0; i--) {
    fact *= i;
  }
  return fact.toString();
}

console.log(extraLongFactorials(25));
