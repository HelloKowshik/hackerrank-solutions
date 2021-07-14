let k = [40, 50, 60],
  b = 60,
  d = [5, 8, 12];
b = 10;
k = [3, 1, 5];
d = [2, 8];
function getMoneySpent(keyboards, drives, b) {
  let arr = [];
  for (let m of keyboards) {
    for (let n of drives) {
      if (m + n <= b) {
        arr.push(m + n);
      }
    }
  }
  return arr.length > 0 ? Math.max(...arr) : -1;
}
console.log(getMoneySpent(k, d, b));
