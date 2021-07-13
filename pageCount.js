// n - number of pages, p - page number
let n = 5,
  p = 3;
n = 6;
p = 2;
n = 5;
p = 4;
n = 6;
p = 5;
function pageCount(n, p) {
  return Math.min(Math.floor(p / 2), Math.floor(n / 2) - Math.floor(p / 2));
}

console.log(pageCount(n, p));
