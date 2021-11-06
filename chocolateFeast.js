let n = 15,
  c = 3,
  m = 2;

function chocolateFeast(n, c, m) {
  let wrap = 0;
  wrap = parseInt(n / c);
  let total = wrap;
  while (wrap >= m) {
    wrap = wrap - m;
    wrap++;
    total++;
  }
  return total;
}

console.log(chocolateFeast(n, c, m));
