let arr = [1, 2, 1, 2, 1, 3, 2];
let n = 7;
// arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// n = 9;
function sockMerchant(n, ar) {
  let pairs = 0;
  const obj = ar
    .sort((a, b) => a - b)
    .reduce((acc, curr) => {
      if (!acc[curr]) {
        acc[curr] = 0;
      }
      acc[curr]++;
      return acc;
    }, {});
  Object.values(obj).forEach((val) => {
    if (val >= 2) {
      pairs += Math.floor(val / 2);
    }
  });
  console.log(pairs);
  return pairs;
}

sockMerchant(n, arr);
